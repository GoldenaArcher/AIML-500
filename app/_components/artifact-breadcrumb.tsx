"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArtifactBreadcrumb() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const artifactsHref =
    from === "aiml-500" || from === "aiml-501" ? `/artifacts?course=${from}` : "/artifacts";

  return (
    <div className="mx-auto max-w-[1280px] px-8 pt-8">
      <nav className="text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={artifactsHref} className="hover:underline">
          Artifacts
        </Link>
      </nav>
    </div>
  );
}
