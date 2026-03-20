import { Metadata } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { modelExamples, pipeline, resources } from "../_data";

export const metadata: Metadata = {
  title: "LLM Training Graphic",
  description:
    "Export-friendly infographic view for the LLM training process and infrastructure artifact.",
};

export default function LLMTrainingGraphicPage() {
  return (
    <main className="bg-[#0a0a0a] px-6 py-10 text-white">
      <article className="mx-auto w-full max-w-[1400px] rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,#0f172a,#111827_55%,#0b1120)] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
        <header className="border-b border-white/10 pb-8">
          <Link
            href="/artifacts/llm-training-infrastructure"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-300/30 hover:text-white"
          >
            <HiArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Artifact
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            AIML-501 Infographic
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight">
            LLM Training Process and Infrastructure
          </h1>
          <p className="mt-5 max-w-5xl text-lg leading-8 text-gray-300">
            A summary graphic showing how large language models move from raw text collection to
            deployed systems, and why data, compute, energy, time, and cost all compound along the
            way.
          </p>
        </header>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Training Pipeline</h2>
            <p className="text-sm text-gray-400">From data collection to deployment</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pipeline.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-200">
                      Step {item.step}
                    </span>
                    <span className="text-cyan-200">{item.icon}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{item.detail}</p>
                <p className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-200">
                  <span className="font-semibold text-white">Main pressure:</span> {item.resource}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Primary Resources</h2>
              <p className="text-sm text-gray-400">Why scale turns into cost</p>
            </div>
            <div className="grid gap-4">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-200">{resource.icon}</span>
                      <h3 className="text-xl font-semibold">{resource.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                      {resource.level}
                    </span>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-white/10">
                    <div
                      className="h-3 rounded-full bg-[linear-gradient(90deg,#22d3ee,#38bdf8,#f59e0b)]"
                      style={{ width: resource.width }}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-300">{resource.detail}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-200">
                    <span className="font-semibold text-white">Why it matters:</span>{" "}
                    {resource.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Model Examples</h2>
              <p className="text-sm text-gray-400">Public data is uneven</p>
            </div>
            <div className="grid gap-4">
              {modelExamples.map((model) => (
                <div
                  key={model.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        {model.organization}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{model.name}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                      {model.status}
                    </span>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                    <div>
                      <dt className="font-semibold text-white">Dataset</dt>
                      <dd>{model.dataset}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-white">Compute</dt>
                      <dd>{model.compute}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-white">Cost</dt>
                      <dd>{model.cost}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-300/15 bg-[linear-gradient(145deg,rgba(8,12,20,0.98),rgba(18,24,39,0.92))] p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Key Takeaways</p>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
              Pretraining is the heaviest compute stage, but it is not the full cost story.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
              Energy and time rise with long distributed runs, evaluation loops, and deployment.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
              Public transparency varies sharply across GPT-4, Claude, and Llama.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
              Training cost should be read as a system-level outcome, not a single number.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
