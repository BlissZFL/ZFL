import type { MetadataRoute } from "next";
import { allSystemsList } from "./systems/systems-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://zerofrictionlab.com";
  const lastModified = new Date();

  const systemUrls: MetadataRoute.Sitemap = allSystemsList.map((system) => ({
    url: `${baseUrl}/systems/${system.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...systemUrls,
  ];
}
