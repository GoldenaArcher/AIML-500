import { Metadata } from "next";

type LearningType = "Supervised" | "Unsupervised" | "Reinforcement Learning";
type Domain = "Tabular Data" | "Computer Vision" | "NLP" | "Generative AI";

type Algorithm = {
  name: string;
  learningType: LearningType;
  domains: Domain[];
  useCase: string;
  explanation: string;
  sourceRefs: string[];
};

const algorithms: Algorithm[] = [
  {
    name: "Linear Regression",
    learningType: "Supervised",
    domains: ["Tabular Data"],
    useCase: "House price prediction and demand forecasting",
    explanation: "Fits a linear relationship between input features and a numeric target.",
    sourceRefs: ["R3"],
  },
  {
    name: "Logistic Regression",
    learningType: "Supervised",
    domains: ["Tabular Data", "NLP"],
    useCase: "Spam detection and churn risk classification",
    explanation: "Estimates class probability using a logistic function over weighted features.",
    sourceRefs: ["R3"],
  },
  {
    name: "Random Forest",
    learningType: "Supervised",
    domains: ["Tabular Data"],
    useCase: "Credit risk and fraud detection",
    explanation: "Aggregates predictions from many decision trees to improve stability and accuracy.",
    sourceRefs: ["R3"],
  },
  {
    name: "Support Vector Machine (SVM)",
    learningType: "Supervised",
    domains: ["Tabular Data", "Computer Vision"],
    useCase: "Document classification and image category detection",
    explanation: "Finds a maximum-margin boundary separating classes in feature space.",
    sourceRefs: ["R3"],
  },
  {
    name: "Convolutional Neural Network (CNN)",
    learningType: "Supervised",
    domains: ["Computer Vision"],
    useCase: "Image classification and defect detection",
    explanation: "Uses convolution filters to learn hierarchical spatial features from images.",
    sourceRefs: ["R3", "R7"],
  },
  {
    name: "K-Means Clustering",
    learningType: "Unsupervised",
    domains: ["Tabular Data"],
    useCase: "Customer segmentation",
    explanation: "Partitions data into k groups by minimizing within-cluster distance to centroids.",
    sourceRefs: ["R3"],
  },
  {
    name: "Principal Component Analysis (PCA)",
    learningType: "Unsupervised",
    domains: ["Tabular Data", "Computer Vision"],
    useCase: "Dimensionality reduction and feature compression",
    explanation: "Transforms features into lower-dimensional components that preserve most variance.",
    sourceRefs: ["R3"],
  },
  {
    name: "Transformer",
    learningType: "Supervised",
    domains: ["NLP", "Generative AI"],
    useCase: "Translation, summarization, and instruction-following models",
    explanation: "Uses self-attention to model long-range context across tokens.",
    sourceRefs: ["R5"],
  },
  {
    name: "Generative Adversarial Network (GAN)",
    learningType: "Unsupervised",
    domains: ["Computer Vision", "Generative AI"],
    useCase: "Synthetic image generation and style transfer",
    explanation:
      "Trains a generator and discriminator in competition to produce realistic synthetic samples.",
    sourceRefs: ["R4"],
  },
  {
    name: "Q-Learning",
    learningType: "Reinforcement Learning",
    domains: ["Tabular Data", "Generative AI"],
    useCase: "Game agents and optimization policies",
    explanation:
      "Learns state-action values through trial-and-error rewards to maximize long-term return.",
    sourceRefs: ["R6"],
  },
];

const groups: LearningType[] = ["Supervised", "Unsupervised", "Reinforcement Learning"];
const references = [
  {
    id: "R1",
    text: "YouTube: Unraveling the Differences Between AI, ML, DL, and GenAI",
    url: "https://www.youtube.com/watch?v=lp_BTL_yADU",
  },
  {
    id: "R2",
    text: "AIML-501 assignment brief and rubric requirements",
  },
  {
    id: "R3",
    text: "Scikit-learn User Guide (Supervised/Unsupervised algorithms)",
    url: "https://scikit-learn.org/stable/user_guide.html",
  },
  {
    id: "R4",
    text: "Goodfellow et al. (2014), Generative Adversarial Nets",
    url: "https://arxiv.org/abs/1406.2661",
  },
  {
    id: "R5",
    text: "Vaswani et al. (2017), Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
  },
  {
    id: "R6",
    text: "Mnih et al. (2015), Human-level control through deep reinforcement learning",
    url: "https://www.nature.com/articles/nature14236",
  },
  {
    id: "R7",
    text: "LeCun, Bengio, Hinton (2015), Deep learning review",
    url: "https://www.nature.com/articles/nature14539",
  },
];

export const metadata: Metadata = {
  title: "Machine Learning Algorithm Framework",
  description:
    "A visual framework classifying 10 machine learning algorithms by type, domain, use case, and mechanism.",
};

export default function MLAlgorithmFrameworkPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      <article>
        <header>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            Machine Learning Algorithm Framework
          </h1>
        </header>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Introduction</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This artifact presents a structured visual framework of 10 machine learning algorithms to
            clarify where each method fits across supervised, unsupervised, and reinforcement learning.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Description</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The framework maps each algorithm to relevant application domains (Tabular Data, Computer
            Vision, NLP, Generative AI), provides a real-world use case, and includes a short
            mechanism summary for quick understanding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Objective</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Build a reusable reference that helps learners and practitioners choose suitable algorithms
            based on learning type, data modality, and problem objective.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Process</h2>
          <ol className="list-decimal space-y-2 pl-6 text-gray-600 dark:text-gray-400">
            <li>Reviewed assignment requirements and AI/ML/DL/GenAI conceptual boundaries.</li>
            <li>Selected 10 commonly used algorithms spanning major learning paradigms.</li>
            <li>Classified each algorithm by learning type, domain, and practical use case.</li>
            <li>Drafted concise mechanism explanations focused on decision-making value.</li>
            <li>Composed a visual grouping plus a detailed comparison matrix for readability.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Visual Framework
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-gray-100">{group}</h3>
                <ul className="space-y-2">
                  {algorithms
                    .filter((item) => item.learningType === group)
                    .map((item) => (
                      <li key={item.name} className="rounded-lg border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5">
                        <p className="font-medium text-slate-900 dark:text-gray-100">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">{item.useCase}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-gray-400">Sources: {item.sourceRefs.join(", ")}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Algorithm Classification Matrix
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-transparent">
            <table className="w-full min-w-[1100px] border-collapse">
              <thead className="bg-slate-100 dark:bg-white/10">
                <tr className="text-left text-sm text-slate-700 dark:text-gray-200">
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Domains</th>
                  <th className="px-4 py-3">Example Use Case</th>
                  <th className="px-4 py-3">How It Works</th>
                  <th className="px-4 py-3">Source</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((item) => (
                  <tr key={item.name} className="border-t border-slate-200 align-top text-sm dark:border-white/10">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-gray-100">{item.name}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{item.learningType}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{item.domains.join(", ")}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{item.useCase}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{item.explanation}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{item.sourceRefs.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Tools/Technologies Used
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
            <li>Next.js and React for artifact structure and rendering</li>
            <li>TypeScript for strongly typed algorithm classification</li>
            <li>Tailwind CSS for visual styling and layout</li>
            <li>VS Code for authoring and editing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Value Proposition
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            For instructors, peers, and early-career practitioners, this artifact reduces ambiguity in
            algorithm selection by connecting model families to specific domain tasks and expected
            outputs in one decision-ready reference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Unique Value</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Instead of listing algorithms in isolation, this framework compares type, domain fit,
            use-case patterns, and operating logic together, enabling faster and more defensible model
            choices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Relevance</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The framework is directly reusable in AIML coursework, interview preparation, and project
            discovery sessions where teams need a practical starting point before deeper modeling and
            experimentation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">References</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
            {references.map((ref) => (
              <li key={ref.id}>
                [{ref.id}] {ref.text}
                {ref.url ? `: ${ref.url}` : ""}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
