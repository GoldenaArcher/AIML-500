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
    <div className="sticky top-16 z-40">
      <div className="mx-auto max-w-[1280px] px-4 py-2 sm:px-8 sm:py-3">
        <nav className="inline-flex min-w-0 max-w-full items-center rounded-lg bg-white/70 px-3 py-1.5 text-sm text-slate-700 backdrop-blur-md dark:bg-black/25 dark:text-gray-400 sm:text-[15px]">
          <Link href="/" className="hover:text-slate-950 hover:underline dark:hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-slate-500 dark:text-gray-500">/</span>
          <Link
            href={artifactsHref}
            className="hover:text-slate-950 hover:underline dark:hover:text-white"
          >
            Artifacts
          </Link>
          <span className="mx-2 text-slate-500 dark:text-gray-500">/</span>
          <span className="max-w-[10rem] truncate font-medium text-slate-950 dark:text-gray-100 sm:max-w-[18rem]">
            {title}
          </span>
        </nav>
      </div>
    </div>
  );
}
