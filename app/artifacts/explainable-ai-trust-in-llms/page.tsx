import { Metadata } from "next";
import {
  artifactPageShellClass,
  artifactStandardCardCompactClass,
  artifactSurfacePanelCompactClass,
  artifactStandardCardClass,
} from "@/app/_components/artifact-card-styles";
import { ToolBadge } from "@/app/_components/tool-badge";
import {
  challengeCards,
  focusCards,
  metricsCards,
  organizationCards,
} from "./_data";

const references = [
  {
    id: "R1",
    text: "OpenAI, Evaluation best practices",
    url: "https://developers.openai.com/api/docs/guides/evaluation-best-practices",
  },
  {
    id: "R2",
    text: "OpenAI, Introducing the Model Spec",
    url: "https://openai.com/index/introducing-the-model-spec/",
  },
  {
    id: "R3",
    text: "Anthropic, Constitutional AI: Harmlessness from AI Feedback",
    url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback",
  },
  {
    id: "R4",
    text: "Anthropic, Mapping the Mind of a Large Language Model",
    url: "https://www.anthropic.com/research/mapping-mind-language-model",
  },
  {
    id: "R5",
    text: "Anthropic, Tracing the thoughts of a large language model",
    url: "https://www.anthropic.com/research/tracing-thoughts-language-model",
  },
  {
    id: "R6",
    text: "Google Cloud, Gen AI evaluation service overview",
    url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview",
  },
  {
    id: "R7",
    text: "Google Cloud, Monitor models in Vertex AI",
    url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-observability",
  },
  {
    id: "R8",
    text: "Meta, Llama 3.1 model card",
    url: "https://huggingface.co/meta-llama/Llama-3.1-405B",
  },
  {
    id: "R9",
    text: "Meta, Llama 3.1 evaluation result details",
    url: "https://huggingface.co/datasets/meta-llama/Llama-3.1-405B-evals",
  },
  {
    id: "R10",
    text: "AIML-501 assignment brief and rubric requirements",
  },
];

export const metadata: Metadata = {
  title: "Explainable AI, Validation, and Trust in LLMs",
  description:
    "A portfolio artifact explaining why LLM explainability is hard, how validation metrics build trust, and what major AI labs are doing to improve transparency.",
};

function HighlightPanel({
  title,
  children,
  accent,
  eyebrow,
}: {
  title: string;
  children: React.ReactNode;
  accent: string;
  eyebrow: string;
}) {
  return (
    <div className={artifactStandardCardCompactClass}>
      <p className={`text-xs uppercase tracking-[0.28em] ${accent}`}>{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-gray-100">{title}</h2>
      <div className="mt-4 text-slate-700 dark:text-gray-300">{children}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-gray-100">{title}</h2>
      <div className="text-slate-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

export default function ExplainableAITrustInLLMsPage() {
  const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"];

  return (
    <main className={artifactPageShellClass}>
      <article>
        <header>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            Explainable AI, Validation, and Trust in LLMs
          </h1>
          <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-gray-300">
            A visual explanation of why large language models remain difficult to interpret, how
            validation metrics support trust, and what leading AI organizations are doing to make
            their systems more understandable and accountable.
          </p>
        </header>

        <section className="mb-10 mt-8 grid gap-5 xl:grid-cols-[1fr_1fr]">
          <HighlightPanel
            title="Introduction"
            eyebrow="Artifact Focus"
            accent="text-cyan-700 dark:text-cyan-200"
          >
            <p>
              This artifact explains why trust in generative AI depends on more than a model
              sounding confident. It separates explainability, validation, and organizational
              safeguards so the trust problem can be understood more realistically.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Description"
            eyebrow="Design Choice"
            accent="text-amber-700 dark:text-amber-200"
          >
            <p>
              I organized this page as an infographic-style artifact so readers can move from the
              definition of explainable AI to the major challenges, then into validation metrics,
              and finally into concrete efforts from OpenAI, Anthropic, Google, and Meta.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Objective"
            eyebrow="Outcome"
            accent="text-emerald-700 dark:text-emerald-200"
          >
            <p>
              Create a clear portfolio-ready visual that explains why transparency in LLMs is
              difficult, how validation improves accountability, and which current techniques are
              most relevant for building trust in deployed AI systems.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Process"
            eyebrow="Build Steps"
            accent="text-violet-700 dark:text-violet-200"
          >
            <ol className="list-decimal space-y-2 pl-6">
              <li>Reviewed the assignment guidance on opacity, post-hoc explanations, bias, and trust.</li>
              <li>Researched current official material from OpenAI, Anthropic, Google, and Meta.</li>
              <li>Separated interpretability methods from validation and monitoring practices.</li>
              <li>Mapped the page into four visual blocks: importance, challenges, validation, and current solutions.</li>
              <li>Added a combined explanatory-document-plus-reflection file for submission support.</li>
            </ol>
          </HighlightPanel>
        </section>

        <Section title="Explainable AI and Why It Matters">
          <div className="grid gap-5 lg:grid-cols-3">
            {focusCards.map((card) => (
              <div key={card.title} className={artifactStandardCardCompactClass}>
                <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-200">
                  {card.icon}
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {card.eyebrow}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Challenges in Explainability">
          <div className="grid gap-5 lg:grid-cols-2">
            {challengeCards.map((card) => (
              <div key={card.title} className={artifactStandardCardCompactClass}>
                <div className="flex items-center gap-3 text-amber-700 dark:text-amber-200">
                  {card.icon}
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {card.eyebrow}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {card.detail}
                </p>
                <div className="mt-4 border-t border-slate-300 pt-4 dark:border-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                    Why This Matters
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-gray-200">
                    {card.whyItMatters}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Validation and Performance Metrics">
          <div className={artifactSurfacePanelCompactClass}>
            <div className="grid gap-5 lg:grid-cols-2">
              {metricsCards.map((card) => (
                <div key={card.title} className={artifactStandardCardCompactClass}>
                  <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-200">
                    {card.icon}
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                      {card.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                    {card.detail}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-gray-200">
                    <span className="font-semibold text-slate-900 dark:text-gray-100">
                      Common examples:
                    </span>{" "}
                    {card.examples}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-slate-300 pt-5 dark:border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                Trust Takeaway
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-gray-200">
                Explainability helps people understand the system, but validation is what tests
                whether the system actually behaves reliably enough to deserve trust.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Current Solutions and Industry Techniques">
          <div className="grid gap-5 lg:grid-cols-2">
            {organizationCards.map((card) => (
              <div key={card.organization} className={artifactStandardCardCompactClass}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">
                  {card.organization}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {card.modelFamily}
                </h3>
                <div className="mt-4 border-t border-slate-300 pt-4 dark:border-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-gray-200">
                    {card.focus}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {card.effort}
                </p>
                <div className="mt-4 border-t border-slate-300 pt-4 dark:border-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                    Current Limit
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-gray-200">
                    {card.limit}
                  </p>
                </div>
                <p className="mt-5 border-t border-slate-300 pt-4 text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:border-white/10 dark:text-slate-400">
                  Sources: {card.sourceRefs.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tools and Technologies Used">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">
            {tools.map((tool) => (
              <ToolBadge key={tool} tool={tool} />
            ))}
          </div>
        </Section>

        <Section title="Value Proposition">
          <p>
            For instructors, peers, and non-specialist stakeholders, this artifact clarifies that
            explainability is only one part of trustworthy AI. Validation, metrics, monitoring, and
            organizational safeguards are equally important when judging whether a model is
            reliable enough to use.
          </p>
        </Section>

        <Section title="Unique Value">
          <p>
            Instead of treating explainability as a single feature, this page shows the current
            landscape as a layered trust problem: partial interpretability, stronger evaluation, and
            organization-specific safety practices.
          </p>
        </Section>

        <Section title="Relevance">
          <p>
            This artifact is relevant for learners and teams evaluating generative AI because it
            makes clear why “the model explained itself” is not enough. Trust depends on evidence,
            measurement, and continuous oversight.
          </p>
        </Section>

        <Section title="References">
          <ul className="space-y-3 text-sm leading-7 text-slate-700 dark:text-gray-300">
            {references.map((reference) => (
              <li key={reference.id}>
                <span className="font-semibold text-slate-900 dark:text-gray-100">
                  [{reference.id}]
                </span>{" "}
                {reference.url ? (
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-700 underline decoration-cyan-400/60 underline-offset-4 transition hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                  >
                    {reference.text}
                  </a>
                ) : (
                  reference.text
                )}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
