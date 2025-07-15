import React from 'react';
import MarkdownSection from './_components/markdownSection';
import TimelineDetailsSection from './_components/timelineDetailsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Timeline',
    description: 'A comprehensive timeline documenting the evolution of artificial intelligence.'
};

const AITimelinePage = () => {
    return (
        <main className="mx-auto max-w-[1280px] px-8 py-16">
            <article>
                <header>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        AI Timeline
                    </h1>
                </header>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Introduction
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        AI has rapidly evolved from early theories to transforming entire industries — this timeline captures the journey in one glance.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Description
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This AI timeline was created by a team of four students as part of a group assignment for our AI course. The goal was to visually document the evolution of AI in a way that's both accessible and informative.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        We split the project into historical segments and explored how foundational ideas, technologies, and social impact unfolded over time. The result is a timeline that reflects our research collaboration and shared understanding of AI’s growth.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Objective
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Our objective is to understand AI’s evolution by identifying key milestones, analyzing their historical context, and reflecting on how AI has shaped the modern world. The project also helped us build collaboration, research, and digital presentation skills.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Process
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Our group followed a straightforward process. We first divided the timeline into key historical phases of AI and assigned each member to research a specific period or topic. Everyone searched online for relevant breakthroughs and milestones.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        After collecting our findings, we uploaded and organized them in Microsoft Teams. We then used <code>Mermaid.js</code> to create a clean and readable timeline visualization, keeping the implementation simple while focusing on clarity.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Tools/Technologies Used
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>
                            <strong>Google Search</strong> – Used to research historical milestones, terminology, and foundational concepts in AI.
                        </li>
                        <li>
                            <strong>Microsoft Teams</strong> – Used as the primary collaboration platform to share drafts, divide sections, and consolidate content from all team members.
                        </li>
                        <li>
                            <strong>VS Code + Markdown</strong> – Used for lightweight implementation and formatting of the timeline structure before rendering.
                        </li>
                        <li>
                            <strong>Mermaid.js</strong> – A markdown-based diagram tool used to render the timeline visually with minimal setup.
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Value Proposition
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This timeline offers a simple and accessible way to understand the evolution of Artificial Intelligence. By presenting historical milestones in a clear chronological structure, it helps learners quickly grasp how key ideas and technologies have developed over time.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Rather than overwhelming viewers with technical complexity, this project focuses on clarity and structure—making it suitable for classroom use, peer learning, or anyone new to the field of AI. Its collaborative nature also highlights how group work can simplify complex topics through thoughtful division of tasks.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Final Artifact
                    </h2>
                    <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
                        <TimelineDetailsSection />
                        <MarkdownSection />
                    </div>
                </section>
            </article>
        </main>
    );
};

export default AITimelinePage;