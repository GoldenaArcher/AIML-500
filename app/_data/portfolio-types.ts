export type CourseId = "aiml-500" | "aiml-501";

export type ArtifactEntry = {
  courseId: CourseId;
  slug: string;
  title: string;
  description: string;
  introduction: string;
  objective: string;
  process: string[];
  tools: string[];
  valueProposition: string;
  uniqueValue: string;
  relevance: string;
  references: string[];
};

export type CourseConfig = {
  id: CourseId;
  label: string;
  title: string;
  description: string;
  bio: string;
  valueProposition: string;
  badgeClassName: string;
};
