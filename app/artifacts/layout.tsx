import ArtifactBreadcrumb from "@/app/_components/artifact-breadcrumb";

export default function ArtifactsLayout({
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
