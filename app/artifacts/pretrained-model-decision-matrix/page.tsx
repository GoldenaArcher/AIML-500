import { Metadata } from "next";
import {
  HiBolt,
  HiChartBar,
  HiLanguage,
  HiScale,
  HiTableCells,
} from "react-icons/hi2";
import {
  artifactPageShellClass,
  artifactStandardCardCompactClass,
  artifactSurfacePanelCompactClass,
  artifactStandardCardClass,
  artifactSurfacePanelClass,
} from "@/app/_components/artifact-card-styles";
import { ToolBadge } from "@/app/_components/tool-badge";
import { modelRows, recommendationCards } from "./_data";

const references = [
  {
    id: "R1",
    text: "google-bert/bert-base-uncased model card",
    url: "https://huggingface.co/google-bert/bert-base-uncased",
  },
  {
    id: "R2",
    text: "distilbert/distilbert-base-uncased model card",
    url: "https://huggingface.co/distilbert/distilbert-base-uncased",
  },
  {
    id: "R2b",
    text: "DistilBERT paper",
    url: "https://arxiv.org/abs/1910.01108",
  },
  {
    id: "R3",
    text: "Keras Applications model table (MobileNetV2 and EfficientNetB0)",
    url: "https://keras.io/api/applications/",
  },
  {
    id: "R4",
    text: "Prior Labs TabPFN v2 classification model card",
    url: "https://huggingface.co/Prior-Labs/TabPFN-v2-clf",
  },
  {
    id: "R5",
    text: "TabPFN: A Transformer That Solves Small Tabular Classification Problems in a Second",
    url: "https://arxiv.org/abs/2207.01848",
  },
  {
    id: "R6",
    text: "Prior Labs model comparison documentation",
    url: "https://docs.priorlabs.ai/models",
  },
  {
    id: "R7",
    text: "AIML-501 assignment brief and rubric requirements",
  },
];

export const metadata: Metadata = {
  title: "Pre-Trained Model Decision Matrix",
  description:
    "A portfolio artifact comparing model size, benchmark quality, speed, and explainability trade-offs across NLP, vision, and tabular domains.",
};

const tierClass = {
  Compact: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200",
  Medium: "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-300/20 dark:bg-amber-500/10 dark:text-amber-200",
  Large: "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-300/20 dark:bg-rose-500/10 dark:text-rose-200",
  Fast: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200",
  Moderate: "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-300/20 dark:bg-amber-500/10 dark:text-amber-200",
  Slow: "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-300/20 dark:bg-rose-500/10 dark:text-rose-200",
  Higher: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200",
  Lower: "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-300/20 dark:bg-rose-500/10 dark:text-rose-200",
} as const;

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

function NumericRefs({ refs }: { refs: string[] }) {
  if (refs.length === 0) return null;

  return (
    <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400">
      Refs: {refs.join(", ")}
    </p>
  );
}

export default function PretrainedModelDecisionMatrixPage() {
  const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"];
  const overviewDomains = [
    {
      label: "NLP",
      title: "Language understanding",
      detail: "BERT Base and DistilBERT trade accuracy against latency and deployment footprint.",
      models: "BERT Base -> DistilBERT",
      icon: <HiLanguage className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />,
      accent: "text-cyan-700 dark:text-cyan-200",
      badgeClass:
        "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-500/10 dark:text-cyan-200",
    },
    {
      label: "Vision",
      title: "Image classification",
      detail: "MobileNetV2 favors edge constraints, while EfficientNetB0 spends more compute for better benchmark quality.",
      models: "MobileNetV2 -> EfficientNetB0",
      icon: <HiChartBar className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />,
      accent: "text-emerald-700 dark:text-emerald-200",
      badgeClass:
        "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200",
    },
    {
      label: "Tabular",
      title: "Structured data defaults",
      detail: "TabPFN v2 is optimized for strong small-table performance, but not for maximum interpretability.",
      models: "TabPFN v2",
      icon: <HiTableCells className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />,
      accent: "text-amber-700 dark:text-amber-200",
      badgeClass:
        "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-300/20 dark:bg-amber-500/10 dark:text-amber-200",
    },
  ];

  const overviewTradeoffs = [
    {
      title: "Smaller models win on deployment ease",
      detail: "Compact models reduce memory pressure, startup time, and infrastructure cost.",
      icon: <HiBolt className="h-5 w-5" aria-hidden="true" />,
      level: "Speed",
      signal: "High priority when latency, memory, or cost constraints are strict.",
    },
    {
      title: "Higher accuracy often costs more latency",
      detail: "Benchmark gains usually come with larger checkpoints or slower inference paths.",
      icon: <HiScale className="h-5 w-5" aria-hidden="true" />,
      level: "Trade-off",
      signal: "Strong trade-off in production systems where quality and responsiveness both matter.",
    },
    {
      title: "Explainability remains domain-dependent",
      detail: "Tabular choices often preserve more operational clarity than frontier neural pipelines.",
      icon: <HiTableCells className="h-5 w-5" aria-hidden="true" />,
      level: "Interpretability",
      signal: "Moderate to high priority when auditability or operational trust is required.",
    },
  ];

  return (
    <main className={artifactPageShellClass}>
      <article>
        <header>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            Pre-Trained Model Decision Matrix
          </h1>
          <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-gray-300">
            A cross-domain comparison of NLP, computer vision, and tabular models that shows how
            size, accuracy, speed, and explainability trade off in real deployment decisions.
          </p>
        </header>

        <section className="mb-10 mt-8 grid gap-5 xl:grid-cols-[1fr_1fr]">
          <HighlightPanel
            title="Introduction"
            eyebrow="Artifact Focus"
            accent="text-cyan-700 dark:text-cyan-200"
          >
            <p>
              Model selection is not just about picking the most accurate checkpoint. Teams need to
              balance model size, benchmark quality, latency, integration effort, and explainability
              based on the domain and deployment environment.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Description"
            eyebrow="Design Choice"
            accent="text-amber-700 dark:text-amber-200"
          >
            <p>
              I organized this artifact as a decision matrix so readers can compare NLP, vision, and
              tabular models in one place. The layout keeps benchmark signals, deployment trade-offs,
              and explainability concerns together instead of scattering them across separate notes.
            </p>
          </HighlightPanel>
        </section>

        <section className="mb-10 grid gap-5 xl:grid-cols-[1fr_1fr]">
          <HighlightPanel
            title="Objective"
            eyebrow="Outcome"
            accent="text-emerald-700 dark:text-emerald-200"
          >
            <p>
              Create a portfolio-ready comparison that helps mixed audiences evaluate pre-trained
              models by size, benchmark quality, speed, and explainability instead of defaulting to
              one headline metric.
            </p>
          </HighlightPanel>

          <HighlightPanel
            title="Process"
            eyebrow="Build Steps"
            accent="text-violet-700 dark:text-violet-200"
          >
            <ol className="list-decimal space-y-2 pl-5">
              <li>Selected widely used models with published signals for size, benchmark performance, and speed.</li>
              <li>Used model cards, papers, and official application tables where available.</li>
              <li>Separated absolute benchmark values from relative speed signals so the comparison stayed honest across domains.</li>
              <li>Added explainability and deployment notes because raw performance alone is not enough for model choice.</li>
              <li>Organized the artifact into matrix criteria, recommendations, and conclusion so it works as both a portfolio piece and a practical reference.</li>
            </ol>
          </HighlightPanel>
        </section>

        <Section title="Model Fit Overview">
          <div className={artifactSurfacePanelCompactClass}>
            <div className="grid gap-6 xl:grid-cols-[1.12fr_1fr]">
              <div className={`${artifactSurfacePanelCompactClass} border-cyan-300/30 bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.12),transparent_55%)] dark:border-cyan-300/15`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
                      Domain Map
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-gray-100 sm:text-2xl">
                      Where each model family fits
                    </h3>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-gray-300 sm:text-right">
                    A quick visual read before the full decision matrix below.
                  </p>
                </div>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {overviewDomains.map((item, index) => (
                    <div key={item.label} className="relative sm:pl-16">
                      {index < overviewDomains.length - 1 ? (
                        <div className="absolute left-[1.18rem] top-9 h-[calc(100%+0.75rem)] w-px bg-gradient-to-b from-cyan-400/80 to-cyan-200/10 dark:from-cyan-300/80 dark:to-cyan-300/5 sm:left-[1.55rem] sm:top-10" />
                      ) : null}
                      <div className="flex items-start gap-3 sm:block">
                        <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white ${item.accent} shadow-sm dark:border-white/10 dark:bg-white/5 sm:absolute sm:left-0 sm:top-1 sm:mt-0 sm:h-12 sm:w-12`}>
                          {item.icon}
                        </div>
                        <div className={`${artifactStandardCardCompactClass} min-w-0 flex-1 border-slate-300/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5`}>
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                            <span className={`w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${item.badgeClass}`}>
                              {item.label}
                            </span>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-gray-100">
                              {item.title}
                            </h4>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-300 sm:leading-7">
                            {item.detail}
                          </p>
                          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-gray-200">
                            {item.models}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${artifactSurfacePanelCompactClass} border-violet-300/30 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.10),transparent_58%)] dark:border-violet-300/15`}>
                <p className="text-xs uppercase tracking-[0.28em] text-violet-700 dark:text-violet-200">
                  Tradeoff Lens
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-gray-100 sm:text-2xl">
                  What teams usually optimize for
                </h3>
                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {overviewTradeoffs.map((item) => (
                    <div key={item.title} className={`${artifactStandardCardCompactClass} border-slate-300/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5`}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                        <div className="flex items-center gap-3 text-violet-700 dark:text-violet-200">
                          <span>{item.icon}</span>
                          <p className="text-base font-semibold text-slate-900 dark:text-gray-100">
                            {item.title}
                          </p>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:hidden">
                          {item.level}
                        </p>
                        <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-300 sm:inline-flex">
                          {item.level}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-300 sm:leading-7">
                        {item.detail}
                      </p>
                      <div className="mt-3 border-t border-slate-300/80 pt-3 dark:border-white/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Selection Signal
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">
                          {item.signal}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="How to Read the Matrix">
          <div className="grid gap-5 lg:grid-cols-4">
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Size
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                Size captures either parameter count or official package footprint. Smaller models
                usually deploy more easily on constrained hardware.
              </p>
            </div>
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Accuracy
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                Accuracy is reported using each model family’s published benchmark signal. It shows
                quality, but only within the benchmark context used by that source.
              </p>
            </div>
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Speed
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                Speed uses published latency or relative runtime claims. These numbers are useful
                for trade-off decisions, but they are not a universal cross-hardware ranking.
              </p>
            </div>
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Explainability
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                Explainability reflects how easy a model is to inspect, justify, and operationalize.
                High raw performance does not automatically mean high transparency.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Decision Matrix">
          <div className={artifactSurfacePanelCompactClass}>
            <div className="hidden gap-4 border-b border-slate-300 px-5 pb-4 text-left text-xs uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:text-gray-500 lg:grid lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1.4fr]">
              <div>Model</div>
              <div>Domain</div>
              <div>Size</div>
              <div>Accuracy</div>
              <div>Speed</div>
              <div>Explainability</div>
              <div>Best Fit</div>
            </div>
            <div className="mt-4 space-y-4">
              {modelRows.map((row) => (
                <div
                  key={row.name}
                  className={`${artifactStandardCardCompactClass} rounded-2xl hover:translate-y-0 hover:scale-100 hover:border-slate-300 dark:hover:border-white/10 dark:hover:shadow-none`}
                >
                  <div className="space-y-4 lg:hidden">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                        {row.domain}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-gray-100">
                        {row.name}
                      </h3>
                      <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-gray-300">
                        {row.notes}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-300/80 bg-white/70 p-3 dark:border-white/10 dark:bg-black/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Size
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">{row.size}</p>
                        <NumericRefs refs={row.sizeRefs} />
                        <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.sizeTier]}`}>
                          {row.sizeTier}
                        </span>
                      </div>

                      <div className="rounded-xl border border-slate-300/80 bg-white/70 p-3 dark:border-white/10 dark:bg-black/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Accuracy
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">{row.accuracy}</p>
                        <NumericRefs refs={row.accuracyRefs} />
                      </div>

                      <div className="rounded-xl border border-slate-300/80 bg-white/70 p-3 dark:border-white/10 dark:bg-black/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Speed
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">{row.speed}</p>
                        <NumericRefs refs={row.speedRefs} />
                        <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.speedTier]}`}>
                          {row.speedTier}
                        </span>
                      </div>

                      <div className="rounded-xl border border-slate-300/80 bg-white/70 p-3 dark:border-white/10 dark:bg-black/10">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Explainability
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">{row.explainability}</p>
                        <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.explainabilityTier]}`}>
                          {row.explainabilityTier}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-slate-300/80 pt-3 dark:border-white/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Best Fit
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-gray-200">{row.bestFit}</p>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-400">
                      Sources: {row.sourceRefs.join(", ")}
                    </p>
                  </div>

                  <div className="hidden gap-4 lg:grid lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1.4fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                        {row.domain}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-gray-100">
                        {row.name}
                      </h3>
                      <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-gray-300">
                        {row.notes}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-400">
                        Sources: {row.sourceRefs.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.domain}</p>
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.size}</p>
                      <NumericRefs refs={row.sizeRefs} />
                      <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.sizeTier]}`}>
                        {row.sizeTier}
                      </span>
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.accuracy}</p>
                      <NumericRefs refs={row.accuracyRefs} />
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.speed}</p>
                      <NumericRefs refs={row.speedRefs} />
                      <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.speedTier]}`}>
                        {row.speedTier}
                      </span>
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.explainability}</p>
                      <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tierClass[row.explainabilityTier]}`}>
                        {row.explainabilityTier}
                      </span>
                    </div>
                    <div>
                      <p className="mt-1.5 break-words text-sm leading-6 text-slate-700 dark:text-gray-200">{row.bestFit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-slate-300 pt-5 dark:border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                Matrix Note
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-gray-200">
                Benchmark and speed values come from different papers and hardware conditions, so they
                should be read as published decision signals, not as perfectly apples-to-apples runtime guarantees.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Analysis and Recommendations">
          <div className="grid gap-5 lg:grid-cols-2">
            {recommendationCards.map((card) => (
              <div key={card.title} className={artifactStandardCardClass}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                  Recommendation
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {card.recommendation}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                NLP
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                DistilBERT is the better default when service latency matters. BERT Base is stronger
                as a reference encoder when accuracy matters more than throughput.
              </p>
            </div>
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Vision
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                MobileNetV2 wins on lightweight deployment. EfficientNetB0 is the better choice when
                a vision pipeline can spend more inference time for better accuracy.
              </p>
            </div>
            <div className={artifactStandardCardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                Tabular
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                TabPFN v2 is attractive for fast, strong baselines, but teams that need clearer
                feature-level reasoning may still prefer traditional tree ensembles in production.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Conclusion">
          <p>
            The main lesson from this comparison is that no single model wins every decision. Smaller
            and faster models often integrate more easily, while larger or more specialized models
            can deliver better accuracy at the cost of latency, memory, or explainability. A useful
            model choice depends on matching the model’s strengths to the actual deployment context.
          </p>
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
            This artifact gives learners and teams a practical comparison tool for model selection
            by showing that deployment trade-offs depend on more than benchmark wins.
          </p>
        </Section>

        <Section title="Unique Value">
          <p>
            Instead of staying inside one domain, this matrix compares NLP, vision, and tabular
            model choices together so trade-offs become easier to reason about across real projects.
          </p>
        </Section>

        <Section title="Relevance">
          <p>
            The artifact is relevant for coursework, project planning, and stakeholder communication
            because it turns scattered model facts into a single decision-oriented view.
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
