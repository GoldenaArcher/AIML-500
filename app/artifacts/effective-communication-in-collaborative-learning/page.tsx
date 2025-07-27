import React from 'react'
import NeuralNetwork from './_components/neural-network'

const EffectiveCommunicationPage = () => {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      <article>
        <header>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Effective Communicationg in Collaborative Learning
          </h1>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This artifact demonstrates how effective communication strategies were applied to explain a complex deep learning concept — neural networks — in a structured and accessible format.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Description
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Rather than showcasing communication theory or methods, this artifact is the <i>result of applying those techniques</i>. It is a designed explanation of neural networks within deep learning, crafted for clarity, approachability, and pedagogical value.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The structure intentionally uses visual elements, clear sectioning, and simplified language to communicate a technical subject to non-expert audiences. It reflects how thoughtful communication design can transform complex knowledge into something both digestible and engaging.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Objective
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The goal of this artifact is to demonstrate how communication strategies—especially visual structuring and audience-aware language—can be applied to real-world technical content. Specifically, it aims to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Translate abstract or complex concepts into accessible explanations for diverse audiences</li>
            <li>Showcase how structured layout improves knowledge retention</li>
            <li>Provide a concrete example of how communication design impacts learning</li>
            <li>Highlight the value of clarity and empathy when presenting technical topics</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The creation of this artifact followed a deliberate and audience-focused process, consisting of the following key steps:Our group followed a straightforward process. We first divided the timeline into key historical phases of AI and assigned each member to research a specific period or topic. Everyone searched online for relevant breakthroughs and milestones.
          </p>
          <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <strong>Topic Selection:</strong>
              <p className="ml-4">
                The process began with selecting a focused and communicable topic. A clearly defined topic provides a thematic anchor and helps ensure cohesion throughout the content.
              </p>
            </li>
            <li>
              <strong>Discussion:</strong>
              <p className="ml-4">
                Identifying the target audience guided the tone, structure, and depth of explanation. Since the content was intended for a general audience, technical jargon was minimized, and conceptual clarity was prioritized over disciplinary precision.
                </p>
            </li>
            <li>
              <strong>Drafting:</strong> 
              <p className="ml-4">
                Relevant background information was gathered from credible sources to ensure conceptual accuracy. The simplification of complex ideas was carried out carefully to avoid distortion or bias.
              </p>
            </li>
            <li>
              <strong>Feedback:</strong> 
              <p className="ml-4">
                Visual aids — such as simplified diagrams and layered structures — were integrated to complement textual explanations and enhance understanding through dual coding.
              </p>
            </li>
            <li>
              <strong>Finalization:</strong> 
              <p className="ml-4">
                The textual and visual elements were assembled into a coherent, accessible format. Emphasis was placed on clarity, information hierarchy, and visual readability to maximize cognitive uptake.
              </p>
            </li>
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tools/Technologies Used
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <strong>Google Search</strong>
            </li>
            <li>
              <strong>Course Material</strong>
            </li>
            <li>
              <strong>VS Code</strong>
            </li>
            <li>
              <strong>ChatGPT</strong>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Value Proposition
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This artifact demonstrates how complex technical content—such as neural networks in deep learning—can be made accessible and engaging through intentional communication strategies. Its unique value lies in <strong> bridging the gap between abstract technical domains and general comprehension </strong>, using structured narration and visual scaffolding to promote clarity without oversimplification.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Furthermore, the relevance of this work extends beyond the topic itself. In both academic and professional settings, individuals are constantly required to <strong>communicate abstract ideas effectively</strong>, whether through reports, presentations, or cross-functional discussions. By applying and showcasing core communication principles in a technical context, this artifact serves as a transferable model for enhancing clarity and audience engagement across a wide range of domains.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Final Artifact
          </h2>
          <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
            <NeuralNetwork />
          </div>
        </section>
      </article>
    </main>
  )
}

export default EffectiveCommunicationPage