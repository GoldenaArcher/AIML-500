import React from "react";
import Link from "next/link";
import {artifactMeta} from "@/app/_data/artifactMeta";

const page = () => {
    return (
        <main className="mx-auto max-w-5xl px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Artifacts
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artifactMeta.map(({ slug, title, description }) => (
                    <li key={slug}>
                        <Link
                            href={`/artifacts/${slug}`}
                            className="block p-6 bg-white dark:bg-neutral-800 rounded-xl shadow hover:shadow-lg transition duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {title}
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
  );
};

export default page;
