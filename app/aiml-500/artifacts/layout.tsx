import ArtifactBreadcrumb from "@/app/_components/artifact-breadcrumb";

export default function AIML500ArtifactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArtifactBreadcrumb />
      {children}
    </>
  );
}
