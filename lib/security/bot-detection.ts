/**
 * Multi-layer Bot Detection Module
 */

export interface BotCheckParams {
  websiteUrl?: string;
  formTimestamp?: number;
  turnstileToken?: string;
  mensaje?: string;
  clientIp?: string;
}

export interface BotCheckResult {
  isBot: boolean;
  reason?: string;
  silentResponse?: boolean; // Return 200 OK without sending email to deceive bot
}

/**
 * Validates Cloudflare Turnstile token server-side if secret key is present.
 */
async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If turnstile secret is not set, skip turnstile verification
    return true;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const outcome = await res.json();
    return outcome.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    // Fallback gracefully if Cloudflare API is temporarily unreachable
    return true;
  }
}

/**
 * Checks for obvious spam pattern heuristics in message body.
 */
function isSpamContent(text: string = ""): boolean {
  const lower = text.toLowerCase();
  
  // Count links (http/https) in message. Most contact form spam has multiple links.
  const linkCount = (text.match(/https?:\/\//gi) || []).length;
  if (linkCount > 2) return true;

  // Known spam keywords / patterns commonly used by contact form bots
  const spamKeywords = [
    "seo ranking",
    "buy backlinks",
    "casino online",
    "crypto investment",
    "telegram channel",
    "whatsapp group lead",
    "replica watches",
    "viagra",
  ];

  return spamKeywords.some((keyword) => lower.includes(keyword));
}

/**
 * Main anti-bot inspection function.
 */
export async function detectBot(params: BotCheckParams): Promise<BotCheckResult> {
  const MIN_FILL_TIME_MS = 3000; // Minimum 3 seconds to fill form
  const MAX_TIMESTAMP_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours max age

  // 1. Honeypot check: Honeypot field MUST be empty
  if (params.websiteUrl && params.websiteUrl.trim().length > 0) {
    return {
      isBot: true,
      reason: "Honeypot field filled",
      silentResponse: true, // Deceive bot into thinking request succeeded
    };
  }

  // 2. Time Trap check: Must take at least 3 seconds to submit
  if (params.formTimestamp) {
    const now = Date.now();
    const elapsed = now - params.formTimestamp;

    if (elapsed < MIN_FILL_TIME_MS) {
      return {
        isBot: true,
        reason: "Form submitted too fast (Time Trap)",
        silentResponse: true,
      };
    }

    if (elapsed > MAX_TIMESTAMP_AGE_MS || params.formTimestamp > now + 60000) {
      return {
        isBot: true,
        reason: "Invalid timestamp window",
        silentResponse: false,
      };
    }
  }

  // 3. Spam Content Heuristic Check
  if (params.mensaje && isSpamContent(params.mensaje)) {
    return {
      isBot: true,
      reason: "Spam content pattern detected",
      silentResponse: true,
    };
  }

  // 4. Cloudflare Turnstile token validation if token provided
  if (params.turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
    const isValidToken = await verifyTurnstileToken(params.turnstileToken, params.clientIp);
    if (!isValidToken) {
      return {
        isBot: true,
        reason: "Turnstile verification failed",
        silentResponse: false,
      };
    }
  }

  return { isBot: false };
}
