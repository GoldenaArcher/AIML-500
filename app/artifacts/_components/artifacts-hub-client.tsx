"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CourseId } from "@/app/_data/portfolio-types";

type ArtifactCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
  courseId: CourseId;
  courseLabel: string;
  courseBadgeClassName: string;
};

type ArtifactsHubClientProps = {
  artifacts: ArtifactCard[];
};

const filterOptions: Array<{ label: string; value: "all" | CourseId }> = [
  { label: "All", value: "all" },
  { label: "AIML-500", value: "aiml-500" },
  { label: "AIML-501", value: "aiml-501" },
];

export default function ArtifactsHubClient({ artifacts }: ArtifactsHubClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course");
  const activeFilter =
    selectedCourse === "aiml-500" || selectedCourse === "aiml-501" ? selectedCourse : "all";

  const visibleArtifacts = useMemo(
    () =>
      artifacts.filter((artifact) => activeFilter === "all" || artifact.courseId === activeFilter),
    [activeFilter, artifacts]
  );

  const updateFilter = (value: "all" | CourseId) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("course");
    } else {
      params.set("course", value);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => updateFilter(option.value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-slate-400 bg-slate-200 text-slate-900 shadow-sm dark:border-white/20 dark:bg-white dark:text-black"
                  : "border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleArtifacts.map(({ slug, title, description, href, courseId, courseLabel, courseBadgeClassName }) => {
          const artifactHref =
            activeFilter === "all" ? href : `${href}?from=${courseId}`;

          return (
          <li key={`${courseLabel}-${slug}`}>
            <Link
              href={artifactHref}
              className="block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <span
                className={`inline-block rounded-full border px-2 py-1 text-xs font-medium ${courseBadgeClassName}`}
              >
                {courseLabel}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </Link>
          </li>
        )})}
      </ul>
    </>
  );
}
