import { Suspense } from "react";
import ArtifactContextBar from "@/app/_components/artifact-context-bar";
import FloatingArtifactsBackLink from "@/app/_components/floating-artifacts-back-link";

export default function ArtifactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <ArtifactContextBar />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingArtifactsBackLink />
      </Suspense>
      {children}
    </>
  );
}
