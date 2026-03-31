export type ModelRow = {
  name: string;
  domain: string;
  size: string;
  sizeRefs: string[];
  accuracy: string;
  accuracyRefs: string[];
  speed: string;
  speedRefs: string[];
  explainability: string;
  bestFit: string;
  notes: string;
  sourceRefs: string[];
  sizeTier: "Compact" | "Medium" | "Large";
  speedTier: "Fast" | "Moderate" | "Slow";
  explainabilityTier: "Higher" | "Moderate" | "Lower";
};

export const modelRows: ModelRow[] = [
  {
    name: "BERT Base",
    domain: "NLP / language understanding",
    size: "110M parameters",
    sizeRefs: ["R1"],
    accuracy: "GLUE average 79.6",
    accuracyRefs: ["R1"],
    speed: "Baseline reference encoder",
    speedRefs: [],
    explainability: "Moderate for inspection, but still opaque internally",
    bestFit: "Accuracy-first text understanding where latency is less constrained",
    notes:
      "Strong baseline for classification and retrieval-style NLP, but heavier than distilled alternatives.",
    sourceRefs: ["R1"],
    sizeTier: "Large",
    speedTier: "Slow",
    explainabilityTier: "Moderate",
  },
  {
    name: "DistilBERT",
    domain: "NLP / language understanding",
    size: "67M parameters",
    sizeRefs: ["R2"],
    accuracy: "About 97% of BERT’s GLUE performance",
    accuracyRefs: ["R2b"],
    speed: "60% faster than BERT",
    speedRefs: ["R2b"],
    explainability: "Moderate; easier to deploy, but not inherently transparent",
    bestFit: "Faster text classification and lightweight NLP services",
    notes:
      "A strong compromise when you want BERT-like behavior with lower inference cost.",
    sourceRefs: ["R2", "R2b"],
    sizeTier: "Medium",
    speedTier: "Fast",
    explainabilityTier: "Moderate",
  },
  {
    name: "MobileNetV2",
    domain: "Computer vision / image classification",
    size: "3.5M parameters / 14 MB",
    sizeRefs: ["R3"],
    accuracy: "71.3% ImageNet top-1",
    accuracyRefs: ["R3"],
    speed: "25.9 ms per inference step (CPU)",
    speedRefs: ["R3"],
    explainability: "Moderate; compact CNN, but still feature-level rather than rule-based",
    bestFit: "Mobile or embedded vision pipelines under strict resource limits",
    notes:
      "Good when latency and memory matter more than squeezing out the last few accuracy points.",
    sourceRefs: ["R3"],
    sizeTier: "Compact",
    speedTier: "Fast",
    explainabilityTier: "Moderate",
  },
  {
    name: "EfficientNetB0",
    domain: "Computer vision / image classification",
    size: "5.3M parameters / 29 MB",
    sizeRefs: ["R3"],
    accuracy: "77.1% ImageNet top-1",
    accuracyRefs: ["R3"],
    speed: "46.0 ms per inference step (CPU)",
    speedRefs: ["R3"],
    explainability: "Moderate; accuracy improves, but CNN features still need post-hoc inspection",
    bestFit: "Vision workloads that can spend a little more compute for stronger accuracy",
    notes:
      "A stronger accuracy option than MobileNetV2, but it costs more inference time and memory.",
    sourceRefs: ["R3"],
    sizeTier: "Compact",
    speedTier: "Moderate",
    explainabilityTier: "Moderate",
  },
  {
    name: "TabPFN v2",
    domain: "Tabular data",
    size: "29 MB checkpoint / 310 MB repository footprint",
    sizeRefs: ["R4", "R6"],
    accuracy: "Competitive / SOTA on many small tabular tasks",
    accuracyRefs: ["R5", "R6"],
    speed: "Original TabPFN solved small problems in <1 second; paper reports 230× speedup vs AutoML on OpenML-CC18",
    speedRefs: ["R5"],
    explainability: "Lower than tree ensembles; performance is stronger than native interpretability",
    bestFit: "Small-to-medium tabular tasks where strong defaults and minimal tuning matter",
    notes:
      "Excellent for fast tabular baselines, but less inherently interpretable than XGBoost or Random Forest.",
    sourceRefs: ["R4", "R5", "R6"],
    sizeTier: "Large",
    speedTier: "Fast",
    explainabilityTier: "Lower",
  },
];

export const recommendationCards = [
  {
    title: "Latency-first deployment",
    recommendation: "Choose DistilBERT or MobileNetV2 when response time and footprint matter more than absolute benchmark wins.",
  },
  {
    title: "Accuracy-first NLP baseline",
    recommendation: "Choose BERT Base when you want a stable reference model and can afford more inference cost.",
  },
  {
    title: "Stronger vision baseline",
    recommendation: "Choose EfficientNetB0 over MobileNetV2 when your vision workload can afford more CPU time for better ImageNet accuracy.",
  },
  {
    title: "Fast tabular experimentation",
    recommendation: "Use TabPFN v2 for small or medium structured datasets when you need strong performance quickly and can accept lower interpretability than tree ensembles.",
  },
];
