import { clsx } from "clsx";
import { HiCodeBracketSquare } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { artifactStandardCardClass } from "@/app/_components/artifact-card-styles";

const iconMap = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "TensorFlow Playground": SiTensorflow,
  "VS Code": VscVscode,
} as const;

type ToolBadgeProps = {
  tool: string;
  className?: string;
};

export function ToolBadge({ tool, className }: ToolBadgeProps) {
  const Icon = iconMap[tool as keyof typeof iconMap] ?? HiCodeBracketSquare;

  return (
    <div className={clsx(artifactStandardCardClass, className)}>
      <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-300">
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-sm font-semibold text-slate-900 dark:text-gray-100">{tool}</p>
      </div>
    </div>
  );
}
