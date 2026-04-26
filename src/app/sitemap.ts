import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/config/blog-catalog";
import { CASE_STUDIES } from "@/lib/config/case-studies-catalog";
import JOBS from "@/data/careers";
import { PORTFOLIO_PROJECTS } from "@/lib/config/portfolio-catalog";
import { SERVICES_PAGE_CONTENT, toServiceSlug } from "@/lib/config/services-catalog";
import { SOLUTION_SUB_SERVICES } from "@/lib/config/sub-services-catalog";
import { SITE_URL } from "@/lib/config/site";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",             priority: 1.0, changeFrequency: "weekly" },
  { path: "/about",        priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions",    priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog",         priority: 0.9, changeFrequency: "daily" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact",      priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio",    priority: 0.7, changeFrequency: "weekly" },
  { path: "/team",         priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers",      priority: 0.6, changeFrequency: "weekly" },
];

// City-specific landing pages for local SEO
const cityRoutes = [
  "/digital-marketing-agency-lucknow",
  "/digital-marketing-agency-delhi",
  "/digital-marketing-agency-mumbai",
  "/digital-marketing-agency-bangalore",
  "/digital-marketing-agency-hyderabad",
  "/digital-marketing-agency-pune",
  "/digital-marketing-agency-chennai",
  "/digital-marketing-agency-jaipur",
];

const buildUrl = (path: string) => new URL(path, SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: buildUrl(path),
    priority,
    changeFrequency,
  }));

  // City pages
  entries.push(
    ...cityRoutes.map((path) => ({
      url: buildUrl(path),
      priority: 0.85 as number,
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    }))
  );

  entries.push(
    ...BLOG_POSTS.map((post) => ({
      url: buildUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      priority: 0.7 as number,
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    })),
    ...CASE_STUDIES.filter((study) => study.published !== false).map((study) => ({
      url: buildUrl(`/case-studies/${study.slug}`),
      lastModified: study.completedDate ? new Date(study.completedDate) : undefined,
      priority: 0.8 as number,
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    })),
    ...PORTFOLIO_PROJECTS.map((project) => ({
      url: buildUrl(`/portfolio/${project.slug}`),
      priority: 0.6 as number,
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    })),
    ...JOBS.map((job) => ({
      url: buildUrl(`/careers/${job.slug}`),
      priority: 0.5 as number,
      changeFrequency: "weekly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    })),
    ...SERVICES_PAGE_CONTENT.services.map((service) => ({
      url: buildUrl(`/solutions/${toServiceSlug(service.title)}`),
      priority: 0.85 as number,
      changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    })),
    ...SOLUTION_SUB_SERVICES.flatMap((solution) =>
      solution.subServices.map((subService) => ({
        url: buildUrl(`/solutions/${solution.solutionSlug}/${subService.slug}`),
        priority: 0.75 as number,
        changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
      }))
    )
  );

  return entries;
}