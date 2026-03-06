import Link from "next/link";
import { aiml500Artifacts } from "@/app/_data/aiml-500-artifacts";
import { aiml501Artifacts } from "@/app/_data/aiml-501-artifacts";
import { courseConfigs } from "@/app/_data/course-config";

export default function ArtifactsHubPage() {
  const artifacts = [...aiml501Artifacts, ...aiml500Artifacts].map((artifact) => {
    const courseLabel = courseConfigs[artifact.courseId].label;
    return {
      ...artifact,
      courseLabel,
      href: `/artifacts/${artifact.slug}?from=${artifact.courseId}`,
    };
  });

  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Artifacts</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Browse AIML-500 and AIML-501 artifacts.
      </p>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {artifacts.map(({ slug, title, description, href, courseLabel }) => (
          <li key={`${courseLabel}-${slug}`}>
            <Link
              href={href}
              className="block h-full p-6 bg-white dark:bg-neutral-800 rounded-xl shadow hover:shadow-lg transition duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <span className="inline-block rounded-full text-xs font-medium px-2 py-1 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                {courseLabel}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
