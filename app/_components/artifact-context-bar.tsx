"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { aiml500Artifacts } from "@/app/_data/aiml-500-artifacts";
import { aiml501Artifacts } from "@/app/_data/aiml-501-artifacts";

const artifactMap = new Map(
  [...aiml500Artifacts, ...aiml501Artifacts].map((artifact) => [artifact.slug, artifact.title])
);

export default function ArtifactContextBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments.at(-1);
  const title = slug ? artifactMap.get(slug) : null;
  const artifactsHref =
    from === "aiml-500" || from === "aiml-501" ? `/artifacts?course=${from}` : "/artifacts";

  if (!title || pathname === "/artifacts") {
    return null;
  }

  return (
    <div className="sticky top-16 z-40 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/75">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-8 py-3">
        <nav className="min-w-0 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 hover:underline dark:hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <Link
            href={artifactsHref}
            className="hover:text-gray-900 hover:underline dark:hover:text-white"
          >
            Artifacts
          </Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">{title}</span>
        </nav>
      </div>
    </div>
  );
}
