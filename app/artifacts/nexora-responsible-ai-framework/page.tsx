import { Metadata } from "next";
import {
  HiArrowDownTray,
  HiChartBar,
  HiCheckCircle,
  HiCog6Tooth,
  HiDocumentText,
  HiEye,
  HiLockClosed,
  HiScale,
  HiShieldCheck,
  HiUsers,
} from "react-icons/hi2";
import {
  artifactPageShellClass,
  artifactStandardCardCompactClass,
  artifactSurfacePanelCompactClass,
} from "@/app/_components/artifact-card-styles";
import { ToolBadge } from "@/app/_components/tool-badge";

export const metadata: Metadata = {
  title: "Nexora Systems Responsible AI Framework",
  description:
    "An image-led AIML-510 portfolio artifact presenting a Responsible AI operating model for an enterprise SaaS/data integration company.",
};

const assetBase = process.env.NODE_ENV === "production" ? "/AIML-500" : "";
const assetPath = (path: string) => `${assetBase}${path}`;

const slideTitles = [
  "Nexora Systems Responsible AI Framework",
  "Company Context and AI Use Cases",
  "Ethical Principles Statement",
  "Governance Structure and Oversight",
  "Key Roles and Responsibilities",
  "12-Month RAI Accountability Timeline",
  "Employee RAI Training Program",
  "Effective RAI Metrics and Scorecard",
  "AI Development Lifecycle With RAI Actions",
  "Transparency and Explainability Risk Evaluation",
  "Data Bias Evaluation and Mitigation",
  "Data Privacy, Protection, and Compliance",
  "Customer Monitoring, Training, and Education",
  "Long-Term Impact Review",
  "Best Practices and Operating Rules",
  "Prioritized RAI References",
];

const slides = slideTitles.map((title, index) => {
  const number = index + 1;

  return {
    number,
    title,
    src: assetPath(`/artifacts/aiml-510/slides/slide_${String(number).padStart(2, "0")}.png`),
  };
});

const featuredSlides = [3, 4, 8, 9, 12, 13].map((number) => slides[number - 1]);

const tools = ["PowerPoint", "Image generation workflow", "Next.js", "React", "TypeScript", "Tailwind CSS"];

const overviewCards = [
  {
    title: "Background",
    label: "Context",
    icon: <HiDocumentText className="h-5 w-5" aria-hidden="true" />,
    text: "Nexora Systems is a fictional 300-person enterprise SaaS and data integration company serving fintech, healthcare, and logistics customers. Its AI use cases touch sensitive production workflows, so responsible deployment affects uptime, privacy, trust, and regulated operations.",
  },
  {
    title: "Value Proposition",
    label: "Operating Model",
    icon: <HiShieldCheck className="h-5 w-5" aria-hidden="true" />,
    text: "The framework turns Responsible AI into an operating model with owners, review gates, evidence, scorecards, monitoring, rollback paths, customer education, and retirement planning instead of leaving ethics as broad intent.",
  },
  {
    title: "Target Audience",
    label: "Stakeholders",
    icon: <HiUsers className="h-5 w-5" aria-hidden="true" />,
    text: "The artifact is aimed at executives, product leaders, engineering teams, governance stakeholders, privacy/security reviewers, procurement leads, and customer-facing teams that need shared RAI rules.",
  },
  {
    title: "Vision",
    label: "Outcome",
    icon: <HiEye className="h-5 w-5" aria-hidden="true" />,
    text: "Nexora's AI should make enterprise integration safer, clearer, and more reliable while preserving human accountability, customer control, privacy boundaries, and long-term user empowerment.",
  },
];

const frameworkPillars = [
  "Ethical principles with measurable operating evidence",
  "Governance ownership from CTO accountability to squad-level artifacts",
  "Explainability rules based on autonomy, customer impact, and challenge rights",
  "Bias, privacy, security, IP, and compliance controls by use case",
  "Lifecycle sustainment through monitoring, incident response, retraining, and retirement",
  "Customer education that reduces overreliance instead of only promoting features",
];

const topicSections = [
  {
    title: "Ethical Principles and Company Context",
    source: "Assignments 1.3 and 1.4",
    icon: <HiScale className="h-5 w-5" aria-hidden="true" />,
    text: "The first project artifacts define Nexora, its AI use cases, and the ethical principle set that drives the final framework: reliability, privacy, explainability, accountability, fairness, lifecycle governance, authenticity, and empowerment.",
  },
  {
    title: "Transparency and Explainability",
    source: "Assignment 2.4",
    icon: <HiEye className="h-5 w-5" aria-hidden="true" />,
    text: "The transparency work becomes a risk-tiered explanation model: basic disclosure for low-risk drafting, stronger rationale and confidence signals for operational recommendations, and appeal paths for customer-impacting decisions.",
  },
  {
    title: "Bias Evaluation and Mitigation",
    source: "Assignment 3.4",
    icon: <HiChartBar className="h-5 w-5" aria-hidden="true" />,
    text: "The bias work pushes the final framework beyond aggregate accuracy by requiring subgroup review, threshold analysis, stakeholder checks, rollback criteria, and post-release drift monitoring.",
  },
  {
    title: "Privacy, Security, IP, and Compliance",
    source: "Assignment 4.4",
    icon: <HiLockClosed className="h-5 w-5" aria-hidden="true" />,
    text: "The data governance work supplies the final controls for minimization, tenant isolation, retention, access logging, vendor restrictions, AI Act classification, GDPR duties, and U.S. sector or state obligations.",
  },
  {
    title: "Lifecycle Sustainment and Customer Education",
    source: "Assignment 5.4",
    icon: <HiCog6Tooth className="h-5 w-5" aria-hidden="true" />,
    text: "The lifecycle work anchors the final deck's sustainment plan: model cards, monitoring thresholds, incident workflow, retraining criteria, retirement planning, feature cards, admin guidance, and customer notices.",
  },
];

const finalDeckHref = assetPath(
  "/artifacts/aiml-510/supporting-materials/nexora-responsible-ai-framework-final.pptx"
);

const requiredDownloads = [
  {
    title: "Final 6.5 Framework Deck",
    label: "Final artifact",
    href: finalDeckHref,
  },
  {
    title: "1.3 Ethical Principles Case Study",
    label: "Ethics foundation",
    href: assetPath("/artifacts/aiml-510/supporting-materials/1-3-ai-ethical-principles-case-study.pptx"),
  },
  {
    title: "1.4 RAI Framework Project Introduction",
    label: "Company context",
    href: assetPath("/artifacts/aiml-510/supporting-materials/1-4-rai-framework-project-introduction.pptx"),
  },
  {
    title: "2.4 Transparency and Explainability Design",
    label: "Explainability",
    href: assetPath("/artifacts/aiml-510/supporting-materials/2-4-transparency-explainability-design.pptx"),
  },
  {
    title: "3.4 Bias Evaluation and Mitigation",
    label: "Bias controls",
    href: assetPath("/artifacts/aiml-510/supporting-materials/3-4-bias-evaluation-mitigation.pptx"),
  },
  {
    title: "4.4 Privacy, Security, IP, and Compliance",
    label: "Governance controls",
    href: assetPath("/artifacts/aiml-510/supporting-materials/4-4-privacy-security-ip-compliance.pptx"),
  },
  {
    title: "5.4 AI Lifecycle Sustainment",
    label: "Lifecycle",
    href: assetPath("/artifacts/aiml-510/supporting-materials/5-4-ai-lifecycle-sustainment.pptx"),
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-gray-100">{title}</h2>
      {children}
    </section>
  );
}

function SlideImage({ slide, priority = false }: { slide: (typeof slides)[number]; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-neutral-900">
      <img
        src={slide.src}
        alt={`Slide ${slide.number}: ${slide.title}`}
        loading={priority ? "eager" : "lazy"}
        className="aspect-[1672/941] w-full bg-slate-100 object-cover dark:bg-neutral-800"
      />
      <figcaption className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:text-gray-300">
        <span className="font-semibold text-slate-900 dark:text-white">
          Slide {slide.number}.
        </span>{" "}
        {slide.title}
      </figcaption>
    </figure>
  );
}

export default function NexoraResponsibleAIFrameworkPage() {
  return (
    <main className={artifactPageShellClass}>
      <article>
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-800 dark:border-indigo-300/20 dark:bg-indigo-500/10 dark:text-indigo-200">
              AIML-510
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              Responsible AI
            </span>
          </div>
          <h1 className="max-w-5xl text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Nexora Systems Responsible AI Framework
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-gray-300">
            An image-led final framework deck that integrates AIML-510 course work into a practical
            Responsible AI operating model for a fictional enterprise SaaS and data integration
            company.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <ToolBadge key={tool} tool={tool} />
            ))}
          </div>
        </header>

        <section className="mb-12 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <SlideImage slide={slides[0]} priority />
          <div className={artifactSurfacePanelCompactClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 dark:text-indigo-200">
              Framework Claim
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Responsible AI has to become operating evidence.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-gray-300">
              The framework treats AI risk as something teams manage through ownership, review
              gates, training, monitoring, and customer-facing accountability. The final artifact is
              intentionally visual so the operating model is easier to scan than a policy document.
            </p>
            <div className="mt-6 space-y-3">
              {frameworkPillars.slice(0, 3).map((pillar) => (
                <div key={pillar} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-gray-300">
                  <HiCheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-600 dark:text-emerald-300" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
            <a
              href={finalDeckHref}
              download
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:bg-gray-200"
            >
              <HiArrowDownTray className="h-4 w-4" aria-hidden="true" />
              Download Final Deck
            </a>
          </div>
        </section>

        <Section title="Portfolio Context">
          <div className="grid gap-5 md:grid-cols-2">
            {overviewCards.map((card) => (
              <div key={card.title} className={artifactStandardCardCompactClass}>
                <div className="flex items-center gap-3 text-indigo-700 dark:text-indigo-200">
                  {card.icon}
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {card.label}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key Framework Views">
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredSlides.map((slide, index) => (
              <SlideImage key={slide.number} slide={slide} priority={index === 0} />
            ))}
          </div>
        </Section>

        <Section title="Source-to-Framework Map">
          <div className={artifactSurfacePanelCompactClass}>
            <p className="max-w-4xl text-sm leading-7 text-slate-600 dark:text-gray-300">
              This map explains how the key course materials feed the final framework. The required
              upload files are available in the compact download list below.
            </p>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {topicSections.map((topic) => (
              <div key={topic.title} className={artifactStandardCardCompactClass}>
                <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-200">
                  {topic.icon}
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {topic.source}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-gray-100">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Required Uploads">
          <div className={artifactSurfacePanelCompactClass}>
            <div className="divide-y divide-slate-200 dark:divide-white/10">
              {requiredDownloads.map((download) => (
                <a
                  key={download.title}
                  href={download.href}
                  download
                  className="group flex items-center justify-between gap-4 py-4 text-sm first:pt-0 last:pb-0"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-slate-900 group-hover:text-cyan-700 dark:text-gray-100 dark:group-hover:text-cyan-200">
                      {download.title}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                      {download.label} · PPTX
                    </span>
                  </span>
                  <HiArrowDownTray className="h-5 w-5 flex-none text-slate-400 group-hover:text-cyan-700 dark:text-slate-500 dark:group-hover:text-cyan-200" />
                </a>
              ))}
            </div>
          </div>
        </Section>
      </article>
    </main>
  );
}
