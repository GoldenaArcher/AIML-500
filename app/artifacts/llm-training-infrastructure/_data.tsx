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

export type PipelineStep = {
  step: string;
  title: string;
  detail: string;
  resource: string;
  icon: React.ReactNode;
};

export type ResourceCategory = {
  title: string;
  level: string;
  width: string;
  detail: string;
  impact: string;
  icon: React.ReactNode;
};

export type ModelExample = {
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

export const pipeline: PipelineStep[] = [
  {
    step: "01",
    title: "Collect and filter data",
    detail:
      "Large language models start with broad text-like corpora such as books, articles, code, and conversations.",
    resource: "Storage, data engineering, licensing, filtering",
    icon: <HiCircleStack className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "02",
    title: "Prepare tokens and training batches",
    detail:
      "Raw text is cleaned, deduplicated, tokenized, and packed into sequences the transformer can process efficiently.",
    resource: "Preprocessing compute, storage bandwidth, pipeline tooling",
    icon: <HiCog6Tooth className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "03",
    title: "Pretrain the transformer",
    detail:
      "The model learns next-token prediction across massive token volumes. This is the heaviest compute stage.",
    resource: "Accelerator clusters, networking, GPU-hours, energy",
    icon: <HiCpuChip className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "04",
    title: "Fine-tune and align",
    detail:
      "Teams refine the base model with curated data, human feedback, and post-training for usefulness and safety.",
    resource: "Specialized data, evaluators, alignment runs, iteration time",
    icon: <HiBolt className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "05",
    title: "Evaluate and harden",
    detail:
      "Benchmarking, red-teaming, and review cycles surface weak areas before release.",
    resource: "Benchmarks, red-teaming, validation compute, review cycles",
    icon: <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />,
  },
  {
    step: "06",
    title: "Deploy and serve",
    detail:
      "After release, inference, monitoring, and scaling continue the infrastructure burden beyond training.",
    resource: "Inference GPUs, monitoring, storage, platform operations",
    icon: <HiCloudArrowUp className="h-5 w-5" aria-hidden="true" />,
  },
];

export const resources: ResourceCategory[] = [
  {
    title: "Datasets",
    level: "Very High",
    width: "92%",
    detail:
      "Broad corpora from books, articles, code, websites, and conversations.",
    impact: "Data quality shapes generalization, bias exposure, and downstream usefulness.",
    icon: <HiCircleStack className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Computational Power",
    level: "Extreme",
    width: "100%",
    detail:
      "Pretraining relies on large accelerator clusters and high-speed interconnects.",
    impact: "Compute is usually the biggest direct driver of training scale and infrastructure complexity.",
    icon: <HiCpuChip className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Energy Consumption",
    level: "High",
    width: "84%",
    detail:
      "Long-running accelerator workloads and cooling demand substantial electricity.",
    impact: "Energy affects operating cost, sustainability discussion, and datacenter planning.",
    icon: <HiBolt className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Time Required",
    level: "High",
    width: "80%",
    detail:
      "Pretraining, post-training, evaluation, and deployment all extend timelines.",
    impact: "Time affects iteration speed, opportunity cost, and release cadence.",
    icon: <HiClock className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Cost",
    level: "Compounding",
    width: "88%",
    detail:
      "Cost combines hardware, storage, networking, energy, labor, and serving.",
    impact: "Cost grows from the interaction of all other resource categories rather than one line item.",
    icon: <HiServerStack className="h-5 w-5" aria-hidden="true" />,
  },
];

export const modelExamples: ModelExample[] = [
  {
    name: "GPT-4",
    organization: "OpenAI",
    status: "Partially disclosed",
    dataset: "Training dataset size and composition not publicly disclosed.",
    compute: "Trained on Azure AI supercomputers, but full compute budget is not public.",
    energyTime: "Energy use and full training duration are not public.",
    cost: "Estimated around $79M via Stanford AI Index / Epoch AI, not an official disclosure.",
    note: "High impact model with limited infrastructure transparency.",
    sourceRefs: ["R4", "R7", "R8"],
  },
  {
    name: "Claude 3.7 Sonnet",
    organization: "Anthropic",
    status: "Estimate-heavy",
    dataset: "Detailed dataset scale and composition not publicly disclosed.",
    compute: "Public documentation does not disclose GPU count or total compute.",
    energyTime: "Training energy and end-to-end duration are not publicly disclosed.",
    cost: "Rough estimate in the few tens of millions, not a confirmed total.",
    note: "Useful example of a frontier model with sparse public infrastructure detail.",
    sourceRefs: ["R5", "R8"],
  },
  {
    name: "Llama 3.1 405B",
    organization: "Meta",
    status: "Most transparent",
    dataset: "Meta reports more than 15T pretraining tokens.",
    compute: "Meta reports 16,000+ H100 GPUs and about 39.3M GPU-hours.",
    energyTime: "Large compute-hours imply substantial energy demand and long training runtime.",
    cost: "Estimated around $170M via Stanford AI Index / Epoch AI, not a direct Meta disclosure.",
    note: "Best public anchor here for training scale discussion.",
    sourceRefs: ["R6", "R7", "R8"],
  },
];

