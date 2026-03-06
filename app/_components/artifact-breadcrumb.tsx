import Link from "next/link";

export default function ArtifactBreadcrumb() {
  return (
    <div className="mx-auto max-w-[1280px] px-8 pt-8">
      <nav className="text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/artifacts" className="hover:underline">
          Artifacts
        </Link>
      </nav>
    </div>
  );
}
