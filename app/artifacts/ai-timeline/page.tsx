import React from 'react';
import MermaidWrapper from "@/app/_components/mermaidWrapper";

const timelineDiagram =
    `
    flowchart TD
        %% Stage 1
        subgraph Stage1["Stage 1: Early AI History (1950s–1970s)"]
            A1950["1950: Turing proposes the Turing Test"]
            A1956["1956: Term 'AI' coined at Dartmouth Conference"]
            A1958["1958: Lisp created by John McCarthy"]
            A1961["1961: Unimate, first industrial robot"]
            A1966["1966: ELIZA simulates human therapist"]
            A1970["1970: SHRDLU demonstrates language understanding"]
            A1950 --> A1956 --> A1958 --> A1961 --> A1966 --> A1970
        end

        %% Stage 2
        subgraph Stage2["Stage 2: AI Winters (1974–1990)"]
            B1974["1974: First AI Winter begins"]
            B1980["1980: Rise of Expert Systems (e.g., XCON)"]
            B1987["1987: Second AI Winter due to Expert Systems collapse"]
            B1990["1990: Machine learning methods gain popularity (KNN, SVM, etc.)"]
            A1970 --> B1974 --> B1980 --> B1987 --> B1990
        end

        %% Stage 3
        subgraph Stage3["Stage 3: Rise of ML & Statistical AI (1990s–2010s)"]
            C1997["1997: Deep Blue defeats Kasparov"]
            C1998["1998: LeNet for handwriting recognition"]
            C2006["2006: Deep learning proposed by Hinton"]
            C2011["2011: Watson wins Jeopardy!"]
            C2012["2012: AlexNet wins ImageNet"]
            B1990 --> C1997 --> C1998 --> C2006 --> C2011 --> C2012
        end

        %% Stage 4
        subgraph Stage4["Stage 4: Deep Learning & Cloud Era (2012–Now)"]
            D2014["2014: GANs proposed by Goodfellow"]
            D2015["2015: Deep Q-Network by DeepMind"]
            D2016["2016: AlphaGo defeats Lee Sedol"]
            D2018["2018: Google releases BERT"]
            D2019["2019: OpenAI releases GPT-2"]
            D2020["2020: GPT-3 + AI commercialization"]
            D2022["2022: ChatGPT released"]
            D2023["2023: Multi-modal AI matures"]
            C2012 --> D2014 --> D2015 --> D2016 --> D2018 --> D2019 --> D2020 --> D2022 --> D2023
        end
    `

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
                        <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Timeline Details</h3>
                            <div className='flex flex-col'>
                                {/* Chun Kit Kwong */}
                                <div className="mb-4 p-5 bg-white dark:bg-neutral-900 shadow-md border border-gray-200 dark:border-neutral-700 rounded-xl">
                                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
                                        Stage 1: The Dawn and Golden Stage (1950s – Early 1970s)
                                    </h4>
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">By Chun Kit Kwong</p>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                        <li>1950 – Alan Turing proposes the Turing Test</li>
                                        <li>1956 – Term "AI" coined at Dartmouth Conference</li>
                                        <li>1958 – John McCarthy creates Lisp</li>
                                        <li>1961 – Unimate, first industrial robot deployed</li>
                                        <li>1966 – ELIZA simulates a human therapist</li>
                                        <li>1970 – SHRDLU processes natural language commands</li>
                                    </ul>
                                </div>

                                {/* Neng Xiong */}
                                <div className="mb-4 p-5 bg-white dark:bg-neutral-900 shadow-md border border-gray-200 dark:border-neutral-700 rounded-xl">
                                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
                                        Stage 2: The First and Second AI Winters (1974–1990)
                                    </h4>
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">By Neng Xiong</p>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                        <li>1974 – First AI winter due to stagnation</li>
                                        <li>1980 – Rise of Expert Systems (e.g., XCON)</li>
                                        <li>1987 – Second AI winter triggered by collapse of Expert Systems</li>
                                        <li>1990 – Shift toward machine learning methods (KNN, SVM, Decision Trees)</li>
                                    </ul>
                                </div>

                                {/* Tingting Wang */}
                                <div className="mb-4 p-5 bg-white dark:bg-neutral-900 shadow-md border border-gray-200 dark:border-neutral-700 rounded-xl">
                                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
                                        Stage 3: Rise of Machine Learning and Statistical AI (1990s–2010s)
                                    </h4>
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">By Tingting Wang</p>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                        <li>1997 – Deep Blue defeats Garry Kasparov</li>
                                        <li>1998 – LeNet CNN for handwriting recognition (Yann LeCun)</li>
                                        <li>2006 – Geoffrey Hinton popularizes deep learning</li>
                                        <li>2011 – IBM Watson wins Jeopardy!</li>
                                        <li>2012 – AlexNet wins ImageNet competition</li>
                                    </ul>
                                </div>

                                {/* Lu Han */}
                                <div className="mb-4 p-5 bg-white dark:bg-neutral-900 shadow-md border border-gray-200 dark:border-neutral-700 rounded-xl">
                                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
                                        Stage 4: Deep Learning and Cloud Computing Era (2012–Present)
                                    </h4>
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">By Lu Han</p>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                        <li>2014 – GANs proposed by Ian Goodfellow</li>
                                        <li>2015 – Deep Q-Networks by DeepMind</li>
                                        <li>2016 – AlphaGo defeats Lee Sedol</li>
                                        <li>2018 – Google releases BERT</li>
                                        <li>2019 – OpenAI releases GPT-2</li>
                                        <li>2020 – GPT-3 & AI commercialization via cloud</li>
                                        <li>2022 – ChatGPT released, LLMs enter public awareness</li>
                                        <li>2023 – Multimodal AI (text + image + audio) matures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Timeline Diagrams</h3>
                            <MermaidWrapper>
                                {timelineDiagram}
                            </MermaidWrapper>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default AITimelinePage;