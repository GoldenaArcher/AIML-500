import { Metadata } from "next";
import {
  HiBolt,
  HiCircleStack,
  HiClock,
  HiCloudArrowUp,
  HiCog6Tooth,
  HiCpuChip,
  HiMagnifyingGlass,
  HiServerStack,
} from "react-icons/hi2";
import {
  artifactInsetCardClass,
  artifactStandardCardClass,
  artifactSubsectionDividerClass,
  artifactSummaryPanelClass,
  artifactSurfacePanelClass,
} from "@/app/_components/artifact-card-styles";

type PipelineStep = {
  step: string;
  title: string;
  detail: string;
  resource: string;
  icon: React.ReactNode;
};

type ResourceCategory = {
  title: string;
  level: string;
  width: string;
  detail: string;
  impact: string;
  icon: React.ReactNode;
};

type ModelExample = {
  name: string;
  organization: string;
  status: string;
  dataset: string;
  compute: string;
  energyTime: string;
  cost: string;
  note: string;
  sourceRefs: string[];
};

const pipeline: PipelineStep[] = [
  {
    step: "01",
    title: "Collect and filter data",
    detail:
      "Large language models start with broad text-like corpora such as books, articles, code, and conversations. The goal is coverage, not a narrow labeled dataset.",
    resource: "Storage, data engineering, licensing, filtering",
    icon: <HiCircleStack className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "02",
    title: "Prepare tokens and training batches",
    detail:
      "Raw text is cleaned, deduplicated, tokenized, and packed into sequences the transformer can process efficiently across many machines.",
    resource: "Preprocessing compute, storage bandwidth, pipeline tooling",
    icon: <HiCog6Tooth className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "03",
    title: "Pretrain the transformer",
    detail:
      "The model learns next-token prediction across massive token volumes. This is the most compute-intensive stage and usually defines the base model capability.",
    resource: "Accelerator clusters, networking, GPU-hours, energy",
    icon: <HiCpuChip className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "04",
    title: "Fine-tune and align",
    detail:
      "After pretraining, teams refine the model with smaller curated datasets, human feedback, and safety-oriented post-training so output becomes more useful and controllable.",
    resource: "Specialized data, evaluators, alignment runs, iteration time",
    icon: <HiBolt className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "05",
    title: "Evaluate and harden",
    detail:
      "Quality checks, benchmark testing, and safety reviews surface weak areas before release. This stage adds people, compute, and additional turnaround time.",
    resource: "Benchmarks, red-teaming, validation compute, review cycles",
    icon: <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "06",
    title: "Deploy and serve",
    detail:
      "Once released, the model still consumes infrastructure through inference, monitoring, scaling, and ongoing updates. Deployment extends the resource story beyond training.",
    resource: "Inference GPUs, monitoring, storage, platform operations",
    icon: <HiCloudArrowUp className="h-5 w-5" aria-hidden="true" />,
  },
];

const resources: ResourceCategory[] = [
  {
    title: "Datasets",
    level: "Very High",
    width: "92%",
    detail:
      "LLMs depend on broad corpora gathered from books, articles, code, websites, and conversations. Data volume matters, but curation quality matters just as much.",
    impact: "Data quality shapes generalization, bias exposure, and downstream usefulness.",
    icon: <HiCircleStack className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Computational Power",
    level: "Extreme",
    width: "100%",
    detail:
      "Pretraining relies on large accelerator clusters and fast interconnects because the model repeatedly updates billions of parameters across enormous token counts.",
    impact: "Compute is usually the biggest direct driver of training scale and infrastructure complexity.",
    icon: <HiCpuChip className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Energy Consumption",
    level: "High",
    width: "84%",
    detail:
      "Energy use follows sustained accelerator runtime, networking, and cooling. Public numbers are often sparse, but long training runs imply substantial electricity demand.",
    impact: "Energy affects operating cost, sustainability discussion, and datacenter planning.",
    icon: <HiBolt className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Time Required",
    level: "High",
    width: "80%",
    detail:
      "Training is not just one long run. Pretraining, post-training, evaluation, and safety work together stretch timelines into many weeks or months.",
    impact: "Time affects iteration speed, opportunity cost, and release cadence.",
    icon: <HiClock className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Cost",
    level: "Compounding",
    width: "88%",
    detail:
      "Total cost combines hardware access, storage, networking, energy, engineering labor, evaluation, and post-release serving. Public dollar totals are rarely disclosed.",
    impact: "Cost grows from the interaction of all other resource categories rather than one line item.",
    icon: <HiServerStack className="h-5 w-5" aria-hidden="true" />,
  },
];

const modelExamples: ModelExample[] = [
  {
    name: "GPT-4",
    organization: "OpenAI",
    status: "Partially disclosed",
    dataset: "OpenAI has not publicly disclosed the full training dataset size or composition.",
    compute:
      "OpenAI states GPT-4 was trained on Azure AI supercomputers, but does not publish the full pretraining compute budget or parameter count.",
    energyTime:
      "Exact energy use and core training duration are not public. OpenAI does report spending six months making GPT-4 safer and more aligned before launch.",
    cost:
      "Stanford AI Index 2025, using Epoch AI estimates, puts GPT-4 training cost at around $79 million. This is an estimate, not an official OpenAI disclosure.",
    note:
      "GPT-4 is a strong example of a frontier model with major public impact but limited infrastructure transparency.",
    sourceRefs: ["R4", "R7", "R8"],
  },
  {
    name: "Claude 3.7 Sonnet",
    organization: "Anthropic",
    status: "Estimate-heavy",
    dataset:
      "Anthropic does not publish a detailed dataset size breakdown or token count for this model.",
    compute:
      "Anthropic does not disclose GPU count, cluster size, or total training compute in public model documentation.",
    energyTime:
      "Public documentation does not provide training energy figures or end-to-end training duration.",
    cost:
      "There is no official training cost figure. Epoch AI cites Anthropic-linked comments suggesting Claude 3.7 Sonnet cost a few tens of millions of dollars to train, so this should be treated as a rough estimate rather than a confirmed total.",
    note:
      "Claude is still useful in the comparison because it shows what happens when public model visibility relies more on indirect estimates than on formal disclosures.",
    sourceRefs: ["R5", "R8"],
  },
  {
    name: "Llama 3.1 405B",
    organization: "Meta",
    status: "Most transparent of the three",
    dataset:
      "Meta reports pretraining on more than 15 trillion tokens, giving a clearer public signal of data scale than most proprietary frontier models.",
    compute:
      "Meta reports using more than 16,000 H100 GPUs and about 39.3 million GPU-hours for Llama 3.1 405B pretraining.",
    energyTime:
      "Meta discloses large compute-hours, which strongly implies substantial energy demand and a long-running distributed training effort, even though a direct energy total is not foregrounded.",
    cost:
      "Stanford AI Index 2025, using Epoch AI estimates, puts Llama 3.1 405B training cost at about $170 million. This is an estimate, not a direct Meta cost disclosure.",
    note:
      "Llama provides the most concrete public infrastructure numbers in this comparison, which makes it a useful anchor for scale discussions.",
    sourceRefs: ["R6", "R7", "R8"],
  },
];

const references = [
  {
    id: "R1",
    text: "YouTube: How Large Language Models Work",
    url: "https://www.youtube.com/watch?v=5sLYAQS9sWQ&t=1s",
  },
  {
    id: "R2",
    text: "YouTube: What is ChatGPT?",
    url: "https://www.youtube.com/watch?v=OGmDr8TLtTo",
  },
  {
    id: "R3",
    text: "Stephen Wolfram, What is ChatGPT doing and why does it work?",
    url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/",
  },
  {
    id: "R4",
    text: "OpenAI, GPT-4",
    url: "https://openai.com/index/gpt-4/",
  },
  {
    id: "R5",
    text: "Anthropic, Claude 3.7 Sonnet and Claude Code",
    url: "https://www.anthropic.com/news/claude-3-7-sonnet",
  },
  {
    id: "R6",
    text: "Meta, Introducing Llama 3.1: Our most capable models to date",
    url: "https://ai.meta.com/blog/meta-llama-3-1/",
  },
  {
    id: "R7",
    text: "Stanford HAI, AI Index Report 2025",
    url: "https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf",
  },
  {
    id: "R8",
    text: "Epoch AI, frontier-model training cost and compute estimates",
    url: "https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models",
  },
  {
    id: "R9",
    text: "AIML-501 assignment brief and rubric requirements",
  },
];

export const metadata: Metadata = {
  title: "LLM Training Process and Infrastructure",
  description:
    "An infographic-style portfolio artifact explaining how large language models are trained and what resources drive their scale, cost, and deployment complexity.",
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
    <div className={artifactStandardCardClass}>
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

export default function LLMTrainingInfrastructurePage() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      <article>
        <header>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            LLM Training Process and Infrastructure
          </h1>
          <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-gray-300">
            A visual walkthrough of how large language models move from raw text collection to
            deployed systems, and what that process demands in data, compute, energy, time, and
            cost.
          </p>
        </header>

        <section className="mb-10 mt-8 grid gap-5 xl:grid-cols-[1fr_1fr]">
          <HighlightPanel
            title="Introduction"
            eyebrow="Artifact Focus"
            accent="text-cyan-700 dark:text-cyan-200"
          >
            <p>
              This artifact explains how generative AI large language models move from broad text
              collection to deployed systems, and it highlights the main infrastructure pressures
              behind that process.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Description"
            eyebrow="Design Choice"
            accent="text-amber-700 dark:text-amber-200"
          >
            <p>
              I organized this artifact as an infographic-style page so the training lifecycle and
              its resource requirements can be read together. The visual sections show the major
              training steps, the resource categories that drive scale and cost, and a model
              comparison that makes public disclosure gaps explicit instead of guessing at hidden
              numbers.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Objective"
            eyebrow="Outcome"
            accent="text-emerald-700 dark:text-emerald-200"
          >
            <p>
              Create a clear, portfolio-ready visual explanation of how LLMs are trained, what
              infrastructure they depend on, and why datasets, compute, energy, time, and cost all
              matter when organizations build generative AI systems.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Process"
            eyebrow="Build Steps"
            accent="text-violet-700 dark:text-violet-200"
          >
            <ol className="list-decimal space-y-2 pl-6">
              <li>Reviewed the assigned videos and article to extract the core training concepts behind large language models.</li>
              <li>Mapped the lifecycle from data collection through deployment into a single visual flow.</li>
              <li>Grouped the main resource categories by dataset scale, compute, energy, time, and cost.</li>
              <li>Researched GPT-4, Claude 3.7 Sonnet, and Llama using public model documentation and official announcements.</li>
              <li>Marked undisclosed training details directly instead of filling gaps with unsupported precision.</li>
              <li>Added a short explanatory document section to summarize the message and design rationale.</li>
            </ol>
          </HighlightPanel>
        </section>

        <Section title="Training Pipeline">
          <div className={artifactSurfacePanelClass}>
            <div className="grid gap-4 xl:grid-cols-3">
              {pipeline.map((item) => (
                <div
                  key={item.step}
                  className={artifactStandardCardClass}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-500/10 dark:text-cyan-200">
                        Step {item.step}
                      </span>
                      <span className="text-cyan-700 dark:text-cyan-200">{item.icon}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-gray-500">
                      Pipeline
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                    {item.detail}
                  </p>
                  <div className={`mt-4 ${artifactInsetCardClass}`}>
                    <span className="font-semibold text-slate-900 dark:text-gray-100">
                      Main resource pressure:
                    </span>{" "}
                    {item.resource}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Primary Resource Categories">
          <div className="grid gap-5 lg:grid-cols-2">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className={artifactStandardCardClass}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-700 dark:text-cyan-200">{resource.icon}</span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100">
                      {resource.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-300">
                    {resource.level}
                  </span>
                </div>
                <div className="mt-4 h-3 rounded-full bg-slate-100 dark:bg-white/10">
                  <div
                    className="h-3 rounded-full bg-[linear-gradient(90deg,#0891b2,#38bdf8,#f59e0b)]"
                    style={{ width: resource.width }}
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {resource.detail}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-gray-200">
                  <span className="font-semibold text-slate-900 dark:text-gray-100">Why it matters:</span>{" "}
                  {resource.impact}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Why Cost Grows">
          <div className={artifactSurfacePanelClass}>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                "More tokens to process",
                "More accelerator-hours",
                "More evaluation and alignment loops",
                "More serving infrastructure after launch",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-black/20 dark:text-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-gray-300">
              In practice, training cost is cumulative. Larger datasets require more preprocessing
              and storage, larger models demand more compute, longer runs increase energy and GPU
              time, and post-training plus deployment extend that cost curve beyond pretraining.
            </p>
          </div>
        </Section>

        <Section title="Model Examples and Disclosure Gaps">
          <p className="mb-5">
            The table below is intentionally uneven. That unevenness is part of the lesson:
            widely-used frontier models do not all disclose the same level of training detail.
          </p>

          <div className="grid gap-5 xl:grid-cols-3">
            {modelExamples.map((model) => (
              <div
                key={model.name}
                className={artifactStandardCardClass}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400 dark:text-gray-500">
                      {model.organization}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-gray-100">
                      {model.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      model.status === "Most transparent of the three"
                        ? "border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200"
                        : model.status === "Partially disclosed"
                          ? "border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-300/20 dark:bg-amber-500/10 dark:text-amber-200"
                          : "border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-300/20 dark:bg-rose-500/10 dark:text-rose-200"
                    }`}
                  >
                  {model.status}
                  </span>
                </div>

                <dl className="mt-5 space-y-3 text-sm leading-7">
                  <div>
                    <dt className="font-semibold text-slate-900 dark:text-gray-100">Dataset</dt>
                    <dd className="text-slate-600 dark:text-gray-300">{model.dataset}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900 dark:text-gray-100">Compute</dt>
                    <dd className="text-slate-600 dark:text-gray-300">{model.compute}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900 dark:text-gray-100">Energy / Time</dt>
                    <dd className="text-slate-600 dark:text-gray-300">{model.energyTime}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900 dark:text-gray-100">Training Cost</dt>
                    <dd className="text-slate-600 dark:text-gray-300">{model.cost}</dd>
                  </div>
                </dl>

                <p className={`mt-4 ${artifactInsetCardClass} dark:text-gray-200`}>
                  {model.note}
                </p>
                <p className="mt-3 text-xs text-slate-500 dark:text-gray-400">
                  Sources: {model.sourceRefs.join(", ")}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-gray-300">
            The dollar figures above are estimated training costs where public sources allow it.
            They are useful for scale comparison, but they should not be read as audited company
            spend totals.
          </p>
        </Section>

        <Section title="Summary and Key Insights">
          <div className={artifactSummaryPanelClass}>
            <div className={`${artifactSubsectionDividerClass} px-6 py-6`}>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
                Summary Slide
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-gray-100">
                Why Infrastructure Matters
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 dark:text-gray-300">
                Large language models are not just clever text generators. They are the output of a
                long pipeline that combines massive datasets, expensive compute, extended training
                time, safety work, and production infrastructure. Understanding that pipeline makes
                model capability, cost, and disclosure gaps much easier to interpret.
              </p>
            </div>

            <div className={`grid gap-0 md:grid-cols-4 ${artifactSubsectionDividerClass}`}>
              {["Data Collection", "Pretraining", "Alignment", "Deployment"].map((item, index) => (
                <div key={item} className="px-6 py-6">
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center font-medium text-slate-800 shadow-sm dark:border-white/10 dark:bg-black/20 dark:text-gray-100">
                    {item}
                  </div>
                  {index < 3 ? (
                    <div className="mt-4 text-center text-2xl text-slate-300 dark:text-gray-600 md:hidden">
                      ↓
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="px-6 py-6">
              <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-700 dark:text-gray-300">
                <li>Pretraining is the heaviest compute stage, but it is not the full cost story.</li>
                <li>Energy use and total cost rise from long distributed runs, not just model size alone.</li>
                <li>Post-training, evaluation, and deployment extend both timeline and infrastructure burden.</li>
                <li>Public transparency varies sharply across frontier models, so disclosure gaps matter when comparing them.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Explanatory Document">
          <div className={artifactSurfacePanelClass}>
            <p className="leading-8 text-slate-700 dark:text-gray-300">
              The main point of this artifact is that LLM training should be understood as a system,
              not just a model architecture. The assigned resources explain that large language
              models learn from broad text corpora and next-token prediction, but the infrastructure
              view adds another layer: each stage in the pipeline introduces different resource
              pressures and cost drivers.
            </p>
            <p className="mt-4 leading-8 text-slate-700 dark:text-gray-300">
              I designed the page as a sequence rather than a long essay because this topic becomes
              easier to follow when the reader can move from process, to resources, to real model
              examples. I also kept the GPT-4, Claude, and Llama comparison intentionally honest by
              showing where official disclosures stop. That design choice matters because hidden
              infrastructure details are part of the real generative AI landscape.
            </p>
          </div>
        </Section>

        <Section title="Tools/Technologies Used">
          <ul className="list-disc space-y-2 pl-6">
            <li>Next.js and React for artifact structure and presentation</li>
            <li>TypeScript for structured content and comparison data</li>
            <li>Tailwind CSS for infographic-style layout and responsive design</li>
            <li>VS Code for research notes, drafting, and implementation</li>
          </ul>
        </Section>

        <Section title="Value Proposition">
          <p>
            This artifact gives learners and technical stakeholders a practical way to connect model
            capability with the infrastructure needed to produce it, which makes LLM scale and cost
            easier to reason about.
          </p>
        </Section>

        <Section title="Unique Value">
          <p>
            Instead of describing generative AI only at the concept level, this page ties the
            training pipeline to concrete resource categories and then shows how public model
            disclosures differ across GPT-4, Claude, and Llama.
          </p>
        </Section>

        <Section title="Relevance">
          <p>
            The artifact is relevant for coursework, stakeholder communication, and early technical
            planning because it explains why LLM development decisions depend on data strategy,
            hardware capacity, training time, and transparency constraints.
          </p>
        </Section>

        <Section title="References">
          <ul className="list-disc space-y-2 pl-6">
            {references.map((reference) => (
              <li key={reference.id}>
                [{reference.id}]{" "}
                {reference.url ? (
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300"
                  >
                    {reference.text}
                  </a>
                ) : (
                  <span>{reference.text}</span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
