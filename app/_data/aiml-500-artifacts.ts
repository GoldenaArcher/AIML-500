import { ArtifactEntry } from "./portfolio-types";

export const aiml500Artifacts: ArtifactEntry[] = [
  {
    slug: "ai-timeline",
    title: "AI Timeline",
    description: "A historical overview of key AI milestones.",
    introduction:
      "This artifact summarizes major milestones that shaped AI from early foundational research to modern generative systems.",
    objective:
      "Build a clear chronological understanding of AI evolution and its practical impact.",
    process: [
      "Researched milestone events across historical periods.",
      "Collaborated with team members to divide and validate timeline segments.",
      "Structured findings into a visual timeline format.",
    ],
    tools: ["Google Search", "Microsoft Teams", "VS Code", "Mermaid.js"],
    valueProposition:
      "Presents AI history in a concise, learner-friendly timeline that supports fast orientation.",
    uniqueValue:
      "Combines technical milestones and context in one visual narrative.",
    relevance:
      "Useful for new AI learners and course discussions that require historical framing.",
    references: ["Course materials", "Public historical AI references"],
  },
  {
    slug: "type-of-machine-learning",
    title: "Types of Machine Learning",
    description: "An overview of supervised, unsupervised, and reinforcement learning.",
    introduction:
      "This artifact explains the three major learning paradigms and compares how each is applied.",
    objective:
      "Help learners distinguish machine learning paradigms and choose appropriate approaches.",
    process: [
      "Reviewed foundational ML references.",
      "Extracted definitions, examples, and workflows.",
      "Built visual comparisons and tables for clarity.",
    ],
    tools: ["Markdown", "Mermaid.js", "React", "Next.js", "Tailwind CSS"],
    valueProposition:
      "Converts abstract ML categories into practical comparisons.",
    uniqueValue:
      "Pairs conceptual explanation with side-by-side workflow views.",
    relevance:
      "Supports introductory AI/ML coursework and onboarding discussions.",
    references: ["Types of Machine Learning PDF", "Course materials"],
  },
  {
    slug: "effective-communication-in-collaborative-learning",
    title: "Effective Communication in Collaborative Learning",
    description: "A communication-focused artifact for explaining neural networks.",
    introduction:
      "This artifact demonstrates how communication design can make deep learning concepts more accessible.",
    objective:
      "Apply audience-aware communication techniques to technical AI content.",
    process: [
      "Defined audience and scope for explanation.",
      "Drafted plain-language content and selected visuals.",
      "Refined structure for readability and retention.",
    ],
    tools: ["Google Search", "Course materials", "VS Code", "ChatGPT"],
    valueProposition:
      "Shows that clarity and structure materially improve technical understanding.",
    uniqueValue:
      "Bridges deep learning concepts with communication best practices.",
    relevance:
      "Directly transferable to presentations, documentation, and cross-functional collaboration.",
    references: ["Course materials"],
  },
  {
    slug: "data-challenges",
    title: "Data Challenges",
    description: "A structured map of common AI/ML data challenges and mitigations.",
    introduction:
      "This artifact catalogs high-impact data risks across availability, quality, governance, and runtime integration.",
    objective:
      "Provide a practical framework for identifying and mitigating data issues in AI pipelines.",
    process: [
      "Identified recurring challenge categories from course and industry context.",
      "Organized challenge-impact-solution relationships.",
      "Built an interactive tree for exploration.",
    ],
    tools: ["Google Search", "Course materials", "VS Code", "D3.js"],
    valueProposition:
      "Transforms fragmented data-risk topics into a reusable decision aid.",
    uniqueValue:
      "Presents 14 challenges in one navigable knowledge structure.",
    relevance:
      "Useful for designing reliable, ethical AI workflows in real projects.",
    references: ["Course materials"],
  },
  {
    slug: "ai-ml-critical-incidents",
    title: "AI/ML Critical Incidents",
    description: "A case analysis of high-profile AI-assisted driving failures.",
    introduction:
      "This artifact compares two fatal incidents to evaluate human-AI safety failures and accountability gaps.",
    objective:
      "Identify actionable safety, governance, and communication lessons for AI-enabled transportation.",
    process: [
      "Collected incident records and official reports.",
      "Compared root causes across human, system, and policy factors.",
      "Synthesized lessons into product and governance recommendations.",
    ],
    tools: ["Google Search", "NTSB reports", "VS Code", "ChatGPT"],
    valueProposition:
      "Links incident analysis to concrete safeguards teams can implement.",
    uniqueValue:
      "Side-by-side evaluation of two automation contexts reveals shared failure modes.",
    relevance:
      "Highly relevant for responsible AI deployment and public-safety critical domains.",
    references: ["NTSB reports", "Course materials"],
  },
];
