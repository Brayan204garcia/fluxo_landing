import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllServiceSlugs } from "@/config/services";
import { getAllCitySlugs } from "@/config/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const serviceSlugs = getAllServiceSlugs();
  const citySlugs = getAllCitySlugs();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/servicios/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...citySlugs.map((slug) => ({
      url: `${baseUrl}/ciudad/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
