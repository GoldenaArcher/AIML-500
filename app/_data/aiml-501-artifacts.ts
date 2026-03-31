import { ArtifactEntry } from "./portfolio-types";

export const aiml501Artifacts: ArtifactEntry[] = [
  {
    courseId: "aiml-501",
    slug: "pretrained-model-decision-matrix",
    title: "Pre-Trained Model Decision Matrix",
    description:
      "A cross-domain comparison of NLP, vision, and tabular models using size, accuracy, speed, and explainability trade-offs.",
    introduction:
      "This artifact compares widely used model families across NLP, computer vision, and tabular data to show how size, benchmark quality, and runtime signals shape real deployment decisions.",
    objective:
      "Build a clear decision matrix that helps mixed audiences compare pre-trained models by model size, benchmark performance, speed, and practical integration trade-offs.",
    process: [
      "Selected four-plus widely used models with published signals for size, benchmark performance, and speed.",
      "Used model cards, papers, and official application tables where available.",
      "Separated absolute benchmark values from relative speed signals so the matrix would stay honest across domains.",
      "Added explainability and integration notes because raw performance alone is not enough for model choice.",
      "Organized the artifact into methodology, decision matrix, trade-off analysis, recommendations, and conclusion.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"],
    valueProposition:
      "Gives learners and teams a practical way to compare model families without reducing every decision to accuracy alone.",
    uniqueValue:
      "Combines domain-specific benchmark data with deployment-oriented factors such as speed, memory, and explainability in one matrix.",
    relevance:
      "Useful for coursework, stakeholder communication, and early model selection when teams need a fast but defensible comparison across domains.",
    references: [
      "BERT base model card",
      "DistilBERT model card",
      "DistilBERT paper",
      "Keras Applications model table",
      "Prior Labs TabPFN v2 model card",
      "TabPFN paper",
      "Prior Labs model comparison documentation",
      "AIML-501 assignment brief and rubric requirements",
    ],
  },
  {
    courseId: "aiml-501",
    slug: "explainable-ai-trust-in-llms",
    title: "Explainable AI, Validation, and Trust in LLMs",
    description:
      "An infographic-style artifact showing why LLM explainability is hard, how validation builds trust, and what major AI labs are doing to improve transparency.",
    introduction:
      "This artifact separates the trust problem into three connected layers: explainability, validation, and organizational safety practices across GPT, Claude, Gemini, and Llama.",
    objective:
      "Create a clear visual explanation of why LLM decisions are difficult to interpret, which techniques improve transparency, and how validation metrics support reliability and accountability.",
    process: [
      "Reviewed assignment guidance on opacity, post-hoc explanations, data bias, visualization, and chain-of-thought reasoning.",
      "Researched official documentation and research from OpenAI, Anthropic, Google, and Meta.",
      "Organized the page around four blocks: what explainable AI is, why LLM explainability is hard, how validation works, and what leading labs are doing.",
      "Separated interpretability methods from validation metrics so the trust story stayed accurate instead of collapsing everything into one category.",
      "Added a combined explanatory-document-plus-reflection submission file.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"],
    valueProposition:
      "Helps mixed audiences understand that trust in generative AI depends on both model transparency efforts and measurable validation practices.",
    uniqueValue:
      "Frames explainability, validation, and industry safeguards as complementary layers rather than treating them as interchangeable buzzwords.",
    relevance:
      "Useful for students, product teams, and non-specialist stakeholders who need a realistic view of what current LLM transparency can and cannot provide.",
    references: [
      "OpenAI evaluation best practices",
      "OpenAI Model Spec",
      "Anthropic Constitutional AI",
      "Anthropic Mapping the Mind of a Large Language Model",
      "Anthropic Tracing the thoughts of a large language model",
      "Google Vertex AI Gen AI evaluation service",
      "Google Vertex AI model observability",
      "Meta Llama 3.1 model card",
      "Meta Llama 3.1 evaluation result details",
      "AIML-501 assignment brief and rubric requirements",
    ],
  },
  {
    courseId: "aiml-501",
    slug: "llm-training-infrastructure",
    title: "LLM Training Process and Infrastructure",
    description:
      "An infographic-style explanation of how large language models are trained, what resources they consume, and where public disclosure still falls short.",
    introduction:
      "This artifact breaks LLM development into a visual training pipeline and connects each stage to the datasets, compute, energy, time, and cost pressures behind it.",
    objective:
      "Create a portfolio-ready visual explanation of generative AI training that is accessible to mixed audiences and grounded in publicly available model information.",
    process: [
      "Reviewed the assigned videos and article to capture the core training concepts behind large language models.",
      "Mapped the full lifecycle from data collection through deployment into a visual pipeline.",
      "Organized the major resource categories around dataset scale, compute, energy, time, and cost.",
      "Compared GPT-4, Claude, and Llama using only publicly available training-resource signals.",
      "Built the page as an infographic with an explanatory document section for design rationale and key considerations.",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VS Code"],
    valueProposition:
      "Turns an abstract topic into a decision-ready visual that helps learners and technical stakeholders see where LLM cost and complexity actually come from.",
    uniqueValue:
      "Shows both the training pipeline and the public-disclosure gaps around frontier models instead of presenting model names without infrastructure context.",
    relevance:
      "Useful for students, technical teams, and non-specialist stakeholders who need a practical picture of what it takes to train and ship generative AI systems.",
    references: [
      "How Large Language Models Work (YouTube)",
      "What is ChatGPT? (YouTube)",
      "Stephen Wolfram, What is ChatGPT doing and why does it work?",
      "OpenAI GPT-4",
      "Anthropic Claude 3.7 Sonnet",
      "Meta Llama 3.1",
      "Stanford HAI AI Index Report 2025",
      "Epoch AI frontier-model cost estimates",
    ],
  },
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
