import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/config/blog-catalog";
import { CASE_STUDIES } from "@/lib/config/case-studies-catalog";
import JOBS from "@/data/careers";
import { PORTFOLIO_PROJECTS } from "@/lib/config/portfolio-catalog";
import { SERVICES_PAGE_CONTENT, toServiceSlug } from "@/lib/config/services-catalog";
import { SOLUTION_SUB_SERVICES } from "@/lib/config/sub-services-catalog";
import { SITE_URL } from "@/lib/config/site";

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/case-studies",
  "/careers",
  "/contact",
  "/portfolio",
  "/solutions",
  "/team",
];

const buildUrl = (path: string) => new URL(path, SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: buildUrl(path),
  }));

  entries.push(
    ...BLOG_POSTS.map((post) => ({
      url: buildUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
    })),
    ...CASE_STUDIES.filter((study) => study.published !== false).map((study) => ({
      url: buildUrl(`/case-studies/${study.slug}`),
      lastModified: study.completedDate ? new Date(study.completedDate) : undefined,
    })),
    ...PORTFOLIO_PROJECTS.map((project) => ({
      url: buildUrl(`/portfolio/${project.slug}`),
    })),
    ...JOBS.map((job) => ({
      url: buildUrl(`/careers/${job.slug}`),
    })),
    ...SERVICES_PAGE_CONTENT.services.map((service) => ({
      url: buildUrl(`/solutions/${toServiceSlug(service.title)}`),
    })),
    ...SOLUTION_SUB_SERVICES.flatMap((solution) =>
      solution.subServices.map((subService) => ({
        url: buildUrl(`/solutions/${solution.solutionSlug}/${subService.slug}`),
      }))
    )
  );

  return entries;
}