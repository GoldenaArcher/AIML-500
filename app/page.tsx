import Link from "next/link";
import Reveal from "@/app/_components/reveal";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      <Reveal effect="up" delay="200">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I&apos;m Lu Han</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
          A software engineer passionate about full-stack development, AI, and scalable systems.
        </p>
      </Reveal>

      <Reveal effect="left" delay="400">
        <section className="mt-8 sm:mt-24">
          <h2 className="text-2xl font-semibold">Professional Bio</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            I am a software engineer with 10 years of experience delivering products in both
            enterprise and startup environments. My core strengths are React frontend architecture,
            Node.js and Spring Boot backend systems, and cross-functional execution from idea to
            production. I am focused on strengthening applied AI/ML decision-making and producing
            portfolio artifacts that demonstrate practical, job-ready impact.
          </p>
        </section>
      </Reveal>

      <Reveal effect="right" delay="600">
        <section className="mt-8 sm:mt-24">
          <h2 className="text-2xl font-semibold">Personal Value Proposition</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            I help product teams and technical stakeholders turn complex AI/ML concepts into
            practical, explainable solutions and reusable learning artifacts. With 10 years of
            full-stack engineering experience, I combine technical rigor, clear communication, and
            structured problem-solving so decisions are faster and implementation is more reliable.
          </p>
        </section>
      </Reveal>

      <Reveal effect="down" delay="800">
        <section className="mt-8 sm:mt-24 mb-8 sm:mb-18">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            Browse portfolio artifacts by course on the{" "}
            <Link href="/artifacts" className="underline hover:text-teal-500">
              artifacts page
            </Link>
            .
          </p>
        </section>
      </Reveal>
    </main>
  );
}
