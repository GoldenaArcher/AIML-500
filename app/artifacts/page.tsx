import { aiml500Artifacts } from "@/app/_data/aiml-500-artifacts";
import { aiml501Artifacts } from "@/app/_data/aiml-501-artifacts";
import { courseConfigs } from "@/app/_data/course-config";
import ArtifactsHubClient from "./_components/artifacts-hub-client";

export default function ArtifactsHubPage() {
  const artifacts = [...aiml501Artifacts, ...aiml500Artifacts].map((artifact) => {
    const courseLabel = courseConfigs[artifact.courseId].label;
    return {
      ...artifact,
      courseLabel,
      href: `/artifacts/${artifact.slug}`,
    };
  });

  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Artifacts</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Browse AIML-500 and AIML-501 artifacts.
      </p>
      <ArtifactsHubClient artifacts={artifacts} />
    </main>
  );
}
