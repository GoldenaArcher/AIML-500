// Shared card vocabulary for portfolio artifacts.
// Rule set:
// 1. Surface panels wrap a whole section or diagram.
// 2. Standard cards are the default repeating content blocks.
// 3. Inset cards are subordinate notes inside a larger card.
// 4. Semantic stage cards are only for diagram roles that need color coding.
// 5. Interactive reveal cards remain specialized and should not be reused for normal content.

export const artifactPageShellClass = "mx-auto max-w-[1280px] px-4 py-16 sm:px-8";

export const artifactSurfacePanelClass =
  "rounded-3xl border border-slate-300 bg-[linear-gradient(145deg,#f8fbff,#eef3f8)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(8,12,20,0.94),rgba(18,24,39,0.9))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]";

export const artifactSurfacePanelCompactClass =
  "rounded-3xl border border-slate-300 bg-[linear-gradient(145deg,#f8fbff,#eef3f8)] p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(8,12,20,0.94),rgba(18,24,39,0.9))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-6";

export const artifactStandardCardClass =
  "rounded-2xl border border-slate-300 bg-white p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]";

export const artifactStandardCardCompactClass =
  "rounded-2xl border border-slate-300 bg-white p-3 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-5";

export const artifactInsetCardClass =
  "rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-800 dark:border-white/10 dark:bg-black/20 dark:text-gray-300";

export const artifactSummaryPanelClass =
  "overflow-hidden rounded-3xl border border-cyan-300 bg-[linear-gradient(145deg,#f4faff,#eaf3fb)] shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-cyan-300/15 dark:bg-[linear-gradient(145deg,rgba(8,12,20,0.98),rgba(18,24,39,0.92))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]";

export const artifactSubsectionDividerClass =
  "border-b border-slate-300 dark:border-white/10";

export const artifactSemanticStageCardClass = {
  sky: "group rounded-2xl border border-sky-300 bg-sky-50 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-400 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)] dark:border-sky-300/20 dark:bg-sky-500/10 dark:hover:border-sky-300/35 dark:hover:shadow-[0_18px_40px_rgba(14,165,233,0.12)]",
  amber:
    "group rounded-2xl border border-amber-300 bg-amber-50 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-amber-400 hover:shadow-[0_18px_40px_rgba(245,158,11,0.10)] dark:border-amber-300/20 dark:bg-amber-500/10 dark:hover:border-amber-300/35 dark:hover:shadow-[0_18px_40px_rgba(245,158,11,0.12)]",
  emerald:
    "group rounded-2xl border border-emerald-300 bg-emerald-50 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.10)] dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:hover:border-emerald-300/35 dark:hover:shadow-[0_18px_40px_rgba(16,185,129,0.12)]",
};
