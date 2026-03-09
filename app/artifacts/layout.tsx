import { Suspense } from "react";
import ArtifactBreadcrumb from "@/app/_components/artifact-breadcrumb";
import FloatingArtifactsBackLink from "@/app/_components/floating-artifacts-back-link";

export default function ArtifactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <ArtifactBreadcrumb />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingArtifactsBackLink />
      </Suspense>
      {children}
    </>
  );
}
