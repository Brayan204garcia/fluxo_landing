/**
 * In-memory Sliding Window Rate Limiter for Next.js API Routes.
 * Protects against form spam and flood attacks.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const tracker = new Map<string, RateLimitEntry>();

// Cleanup stale IP entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of tracker.entries()) {
    if (now > entry.resetAt) {
      tracker.delete(ip);
    }
  }
}, 10 * 60 * 1000);

export interface RateLimitOptions {
  limit?: number; // Max requests allowed per window (default: 3)
  windowMs?: number; // Time window in milliseconds (default: 15 minutes)
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { success: boolean; remaining: number; resetInSeconds: number } {
  const limit = options.limit ?? 3;
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // 15 mins
  const now = Date.now();

  const entry = tracker.get(identifier);

  if (!entry || now > entry.resetAt) {
    // New window for this identifier
    tracker.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      success: true,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (entry.count >= limit) {
    // Rate limit exceeded
    const resetInSeconds = Math.ceil((entry.resetAt - now) / 1000);
    return {
      success: false,
      remaining: 0,
      resetInSeconds,
    };
  }

  entry.count += 1;
  return {
    success: true,
    remaining: limit - entry.count,
    resetInSeconds: Math.ceil((entry.resetAt - now) / 1000),
  };
}
