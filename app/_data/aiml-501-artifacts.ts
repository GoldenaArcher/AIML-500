import { ArtifactEntry } from "./portfolio-types";

export const aiml501Artifacts: ArtifactEntry[] = [
  {
    courseId: "aiml-501",
    slug: "neural-network-components",
    title: "Neural Network Components",
    description:
      "A visual explanation of neural network components using TensorFlow Playground experiments.",
    introduction:
      "This artifact explains core neural network components through a set of visual experiments that show how architecture and activation choices change model behavior.",
    objective:
      "Build a portfolio-ready visual presentation that explains neural network structure and connects theory to observed Playground results.",
    process: [
      "Ran multiple TensorFlow Playground experiments on the circle dataset.",
      "Compared shallow and deep networks as well as different activation functions.",
      "Captured screenshots that showed both weak and strong model behavior.",
      "Mapped experiment results back to layers, neurons, weights, activation functions, loss, and optimization.",
      "Organized the artifact into diagram, explanation, experiment, and summary sections.",
    ],
    tools: ["TensorFlow Playground", "Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"],
    valueProposition:
      "Makes neural network components easier to understand by pairing clear definitions with visible changes in training output.",
    uniqueValue:
      "Connects each component to an actual experiment instead of presenting neural network terminology as standalone theory.",
    relevance:
      "Useful for learners who need a practical and visual introduction to neural networks and classification behavior.",
    references: [
      "TensorFlow Playground",
      "AIML-501 course instructions and rubric",
    ],
  },
  {
    courseId: "aiml-501",
    slug: "ml-algorithm-framework",
    title: "Machine Learning Algorithm Framework",
    description:
      "A visual framework of core ML algorithms mapped by learning type, domain, and use case.",
    introduction:
      "This artifact organizes essential machine learning algorithms into a practical visual reference for selecting methods by problem type and domain.",
    objective:
      "Create a clear and reusable algorithm map covering at least 8-10 methods across tabular, computer vision, NLP, and generative AI contexts.",
    process: [
      "Reviewed AI/ML/DL/GenAI positioning and assignment constraints.",
      "Selected a balanced set of 10 high-impact algorithms.",
      "Mapped each algorithm to learning type, domain, and representative use cases.",
      "Designed a visual framework and comparison matrix for fast lookup.",
      "Refined wording to keep explanations concise and audience-friendly.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"],
    valueProposition:
      "Provides a decision-oriented reference that helps learners and teams quickly narrow algorithm choices by data modality and business goal.",
    uniqueValue:
      "Combines learning paradigm, domain mapping, use cases, and mechanics in one compact framework instead of isolated algorithm notes.",
    relevance:
      "Supports coursework, interview preparation, and early-stage solution design in applied AI/ML projects.",
    references: [
      "Unraveling the Differences Between AI, ML, DL, and GenAI (YouTube: https://www.youtube.com/watch?v=lp_BTL_yADU)",
      "AIML-501 course instructions and rubric",
      "Scikit-learn User Guide",
      "Goodfellow et al. (2014), Generative Adversarial Nets",
      "Vaswani et al. (2017), Attention Is All You Need",
      "Mnih et al. (2015), Human-level control through deep reinforcement learning",
      "LeCun, Bengio, Hinton (2015), Deep learning review",
    ],
  },
];
