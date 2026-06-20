import { CourseConfig } from "./portfolio-types";

export const courseConfigs: Record<CourseConfig["id"], CourseConfig> = {
  "aiml-500": {
    id: "aiml-500",
    label: "AIML-500",
    title: "AIML-500 Professional Portfolio",
    description: "Artifacts and coursework from AIML-500.",
    bio: "With 10 years of professional experience across enterprise and startup environments, I specialize in scalable frontend and backend systems while expanding applied AI/ML skills.",
    valueProposition:
      "I bridge software engineering rigor with AI learning outcomes, turning complex topics into practical, reusable artifacts.",
    badgeClassName:
      "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-300/25 dark:bg-amber-400/10 dark:text-amber-200",
  },
  "aiml-501": {
    id: "aiml-501",
    label: "AIML-501",
    title: "AIML-501 Professional Portfolio",
    description: "Artifacts and coursework from AIML-501.",
    bio: "I apply software engineering discipline and AI literacy to produce explainable, reusable learning artifacts for real-world ML decision-making.",
    valueProposition:
      "I translate complex AI/ML concepts into structured frameworks that help stakeholders choose practical, responsible solutions faster.",
    badgeClassName:
      "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-500/10 dark:text-cyan-200",
  },
  "aiml-510": {
    id: "aiml-510",
    label: "AIML-510",
    title: "AIML-510 Professional Portfolio",
    description: "Artifacts and coursework from AIML-510.",
    bio: "I apply responsible AI thinking to practical product and governance problems, connecting ethics, implementation controls, and customer trust.",
    valueProposition:
      "I turn Responsible AI principles into operating models that product and engineering teams can actually use.",
    badgeClassName:
      "border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-300/20 dark:bg-indigo-500/10 dark:text-indigo-200",
  },
};
