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
                  ? "border-white/20 bg-white text-black"
                  : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleArtifacts.map(({ slug, title, description, href, courseId, courseLabel }) => {
          const artifactHref =
            activeFilter === "all" ? href : `${href}?from=${courseId}`;

          return (
          <li key={`${courseLabel}-${slug}`}>
            <Link
              href={artifactHref}
              className="block h-full rounded-xl bg-white p-6 shadow transition duration-200 hover:bg-neutral-100 hover:shadow-lg dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <span className="inline-block rounded-full bg-black/5 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300">
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
