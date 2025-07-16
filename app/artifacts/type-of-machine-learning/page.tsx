import React from 'react';

import { Metadata } from 'next';
import Markdown from './_components/markdown-section';
import StepComparison from './_components/step-comparison';

export const metadata: Metadata = {
    title: 'Types of Machine Learning',
    description: 'An overview of the three main types of machine learning: supervised, unsupervised, and reinforcement learning.'
};

function TypeOfMLPage() {
    return (
        <main className="mx-auto max-w-[1280px] px-8 py-16">
            <article>
                <header>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        Types of Machine Learning
                    </h1>
                </header>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Introduction
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        This artifact introduces the three major types of machine learning - supervised, unsupervised, and reinforcement learning—outlining their mechanisms, differences, and real-world applications.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Description
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Machine learning is a subfield of artificial intelligence (AI) that focuses on developing algorithms that can learn from data. This project explains the core distinctions among supervised, unsupervised, and reinforcement learning, using visual aids and practical examples from the provided resource.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Objective
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        To help learners understand the different learning paradigms in machine learning and how they apply to various real-world tasks such as prediction, clustering, and decision-making.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Process
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Research and review foundational literature on machine learning types.</li>
                        <li>Extract key definitions and examples from the resource (Types of Machine Learning PDF).</li>
                        <li>Visualize the differences using a structured flowchart.</li>
                        <li>Integrate graphical illustrations.</li>
                        <li>Organize the artifact into clearly labeled educational sections.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Tools/Technologies Used
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Types of Machine Learning PDF (source material)</li>
                        <li>Markdown for documentation</li>
                        <li>Mermaid.js for flowchart visualization</li>
                        <li>React for interactive components</li>
                        <li>Next.js for web framework</li>
                        <li>Tailwind CSS for styling</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Value Proposition
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        This artifact delivers an accessible overview of ML types, combining conceptual clarity and visual learning aids. It helps learners distinguish among the three learning approaches, making it a valuable resource for beginners and educators alike.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        References
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>"Types of Machine Learning" PDF</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Artifact Summary
                    </h2>
                    <div className='flex flex-col space-y-4'>
                        <Markdown />
                        <StepComparison />
                    </div>
                </section>
            </article>
        </main>
    );
}

export default TypeOfMLPage;