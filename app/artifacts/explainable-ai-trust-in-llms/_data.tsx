import {
  HiAcademicCap,
  HiBeaker,
  HiChartBar,
  HiCheckBadge,
  HiExclamationTriangle,
  HiEye,
  HiMagnifyingGlass,
  HiShieldCheck,
  HiSparkles,
  HiTableCells,
} from "react-icons/hi2";

export type FocusCard = {
  eyebrow: string;
  title: string;
  detail: string;
  icon: React.ReactNode;
};

export type ChallengeCard = {
  eyebrow: string;
  title: string;
  detail: string;
  whyItMatters: string;
  icon: React.ReactNode;
};

export type MetricsCard = {
  eyebrow: string;
  title: string;
  detail: string;
  examples: string;
  icon: React.ReactNode;
};

export type OrganizationCard = {
  organization: string;
  modelFamily: string;
  focus: string;
  effort: string;
  limit: string;
  sourceRefs: string[];
};

export const focusCards: FocusCard[] = [
  {
    eyebrow: "Definition",
    title: "What Explainable AI Means",
    detail:
      "Explainable AI is the effort to make model behavior more understandable to humans through interpretable signals, clearer documentation, and better evaluation.",
    icon: <HiEye className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Importance",
    title: "Why transparency matters",
    detail:
      "Without visibility into how a model behaves, it is harder to detect bias, assess failure modes, justify deployment decisions, and earn user trust.",
    icon: <HiShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Current Reality",
    title: "What Tools Reveal",
    detail:
      "Today’s methods improve visibility, but they do not fully open the black box. Most organizations combine partial interpretability with strong validation and monitoring.",
    icon: <HiSparkles className="h-5 w-5" aria-hidden="true" />,
  },
];

export const challengeCards: ChallengeCard[] = [
  {
    eyebrow: "Black Box",
    title: "Distributed black-box behavior",
    detail:
      "LLM outputs emerge from non-linear interactions across huge parameter spaces, not from one transparent rule or one traceable module.",
    whyItMatters:
      "That makes it difficult to point to a single internal reason for a response and increases the gap between behavior and human explanation.",
    icon: <HiExclamationTriangle className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Post-Hoc Gap",
    title: "Post-hoc explanations are incomplete",
    detail:
      "A model can produce a polished explanation after the fact even when that explanation does not faithfully describe its internal process.",
    whyItMatters:
      "Trust can erode when the system sounds confident and transparent but its stated reasoning is only loosely connected to what actually happened internally.",
    icon: <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Data Quality",
    title: "Data quality and bias carry forward",
    detail:
      "Training corpora contain noise, blind spots, stereotypes, and uneven representation, and those patterns can reappear in outputs and intermediate behavior.",
    whyItMatters:
      "Even strong validation must account for the fact that flawed data can shape both the model’s answers and the explanations offered for them.",
    icon: <HiTableCells className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Accountability",
    title: "Regulation demands evidence",
    detail:
      "High-stakes use cases increasingly require documentation, testing evidence, and clear accountability for model performance and risk management.",
    whyItMatters:
      "Organizations need more than a good demo. They need repeatable proof that the system behaves reliably under expected and adversarial conditions.",
    icon: <HiCheckBadge className="h-5 w-5" aria-hidden="true" />,
  },
];

export const metricsCards: MetricsCard[] = [
  {
    eyebrow: "Benchmarks",
    title: "Benchmark and task evals",
    detail:
      "Structured evaluations test whether a model meets target behaviors across factuality, instruction following, reasoning, safety, and domain tasks.",
    examples:
      "Examples: benchmark suites, gold-label test sets, domain-specific eval datasets, pass/fail rubrics.",
    icon: <HiAcademicCap className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Human Review",
    title: "Human review and rubric scoring",
    detail:
      "Human or model-based judges assess qualities that are hard to score deterministically, such as relevance, helpfulness, coherence, and harmfulness.",
    examples:
      "Examples: pairwise preference tests, rubric-based scoring, review cycles for edge cases and policy-sensitive prompts.",
    icon: <HiBeaker className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Monitoring",
    title: "Production monitoring",
    detail:
      "Trust is not settled at launch. Teams monitor latency, failure rates, refusal quality, traffic patterns, and other operational signals in production.",
    examples:
      "Examples: observability dashboards, incident review, drift checks, endpoint health metrics, escalation thresholds.",
    icon: <HiChartBar className="h-5 w-5" aria-hidden="true" />,
  },
  {
    eyebrow: "Robustness",
    title: "Safety and robustness testing",
    detail:
      "Red-teaming and adversarial evaluation probe jailbreak resistance, harmful output risk, hallucination patterns, and failure behavior under pressure.",
    examples:
      "Examples: red-team prompts, harmfulness tests, robustness sweeps, regression checks before model updates.",
    icon: <HiShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
];

export const organizationCards: OrganizationCard[] = [
  {
    organization: "OpenAI",
    modelFamily: "GPT",
    focus: "Model behavior specification plus evaluation loops",
    effort:
      "OpenAI documents desired behavior through the Model Spec and emphasizes structured evals as a way to turn fuzzy goals into measurable system quality.",
    limit:
      "This improves accountability and regression testing, but it does not make the internal model fully interpretable.",
    sourceRefs: ["R1", "R2"],
  },
  {
    organization: "Anthropic",
    modelFamily: "Claude",
    focus: "Constitutional training and mechanistic interpretability",
    effort:
      "Anthropic combines Constitutional AI with interpretability research such as dictionary-learning features and circuit tracing to study what Claude is representing and when chain-of-thought is faithful or misleading.",
    limit:
      "Anthropic’s own research still shows that opening the black box is partial and expensive, not a solved problem.",
    sourceRefs: ["R3", "R4", "R5"],
  },
  {
    organization: "Google",
    modelFamily: "Gemini",
    focus: "Evaluation services and operational observability",
    effort:
      "Google provides rubric-based and computation-based evaluation in Vertex AI, along with model observability dashboards for Gemini and managed endpoints.",
    limit:
      "These tools improve trust through measurement and monitoring, but they are primarily validation infrastructure rather than deep mechanistic explanation.",
    sourceRefs: ["R6", "R7"],
  },
  {
    organization: "Meta",
    modelFamily: "Llama",
    focus: "Model cards, open evaluation details, and benchmark transparency",
    effort:
      "Meta’s Llama 3.1 releases provide public model-card details and evaluation result datasets that make benchmark and prompt-level testing more inspectable than many frontier closed models.",
    limit:
      "Open reporting improves external scrutiny, but benchmark transparency still does not fully reveal why the model made a specific decision.",
    sourceRefs: ["R8", "R9"],
  },
];
