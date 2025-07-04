import Link from "next/link";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      {/* Top: Intro */}
      <Reveal effect="up" delay={"200"}>
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm&nbsp;Lu Han</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
          A software engineer passionate about full-stack development, AI and
          scalable systems.
        </p>
      </Reveal>

      {/* Left: Value Prop */}
      <Reveal effect="left" delay={"400"}>
        <section className="mt-8 sm:mt-24">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            With 9 years of professional experience across enterprise and
            startup environments, I specialize in building scalable frontends
            with React and robust backend services with Node.js and Spring Boot.
            I'm currently focused on creating AI-assisted tools and exploring
            cloud-native architecture.
          </p>
        </section>
      </Reveal>

      {/* Right: Selected Work */}
      <Reveal effect="right" delay={"600"}>
        <section className="mt-8 sm:mt-24">
          <h2 className="text-2xl font-semibold">What I bring</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            Bridging modern frontend experiences with robust backend
            design &mdash; delivering products that scale and
            delight.
          </p>
        </section>
      </Reveal>

      {/* Bottom: Professional Bio */}
      <Reveal effect="down" delay={"800"}>
        <section className="mt-8 sm:mt-24 mb:8 sm:mb-18">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[100%] sm:max-w-[720px]">
            Visit the&nbsp;
            <Link href="/artifacts" className="underline hover:text-teal-500">
              artifacts
            </Link>
            &nbsp;page for detailed case studies.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
