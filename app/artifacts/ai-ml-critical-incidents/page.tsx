import React from 'react'
import UberIncidentComponent from './_components/uber-incidents'

const AIMLCriticalIncidentsPage = () => {
    return (
        <main className="mx-auto max-w-[1280px] px-8 py-16">
            <article>
                <header>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        AI-Driven Vehicle Incidents
                    </h1>
                </header>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Introduction
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        This artifact examines two high-profile incidents involving AI-assisted driving systems: the Uber self-driving vehicle accident in Tempe, Arizona, and the Tesla Autopilot fatal crash involving an Apple engineer in California. These cases highlight the intersection of AI technology, human oversight, and ethical responsibility in autonomous driving.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Description
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Both incidents involved AI-enabled driving systems that failed to prevent fatalities. In the Uber case, the vehicle’s AI system detected the pedestrian but did not respond appropriately, compounded by a distracted safety driver. In the Tesla case, the driver relied heavily on Autopilot despite its limitations, diverting attention to a mobile device before a fatal collision.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Objective
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        The goal is to analyze how these failures occurred, identify key ethical and operational issues, and reflect on lessons that can guide safer AI integration in transportation.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                        Process
                    </h2>
                    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>
                            <strong>Initial exposure & awareness:</strong>
                            <span className='ml-2'>
                                First learned about the Uber Tempe incident from course materials and class discussions, while the Tesla Mountain View crash was something I had followed in the news when it occurred.
                            </span>
                        </li>
                        <li>
                            <strong>Information gathering:</strong>
                            <span className='ml-2'>
                                Used Google Search to locate primary and reputable secondary sources, focusing on official NTSB reports, credible news coverage, and contextual background.
                            </span>
                        </li>
                        <li>
                            <strong>Review & synthesis:</strong>
                            <span className='ml-2'>
                                Studied the NTSB investigation documents and compared the details of both cases, noting overlaps and differences in automation limits, driver behavior, and system safeguards.
                            </span>
                        </li>
                        <li>
                            <strong>Drafting & organization:</strong>
                            <span className='ml-2'>
                                Structured the findings into this artifact format, summarizing each case and highlighting key ethical issues and lessons learned.
                            </span>
                        </li>
                        <li>
                            <strong>Revision & finalization:</strong>
                            <span className='ml-2'>
                                Refined language, ensured factual accuracy, and prepared supporting visuals/links to enhance clarity.
                            </span>
                        </li>
                    </ol>
                </section>
                <section className='mb-8'>
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
                        <li>
                            <strong>NTSB accident reports database</strong>
                        </li>
                    </ul>
                </section>
                <section className='mb-8'>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Value Proposition
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        <strong className='mr-2'>Unique value:</strong>
                        A side-by-side look at two different automation contexts (test vehicle with safety driver vs. consumer ADAS) to surface common failure modes in human-AI interaction.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        <strong className='mr-2'>Relevance:</strong>
                        Offers concrete guidance for product teams: clearer terminology, stronger human-in-the-loop safeguards, better user education, and realistic branding to reduce misuse and harm.
                    </p>
                </section>
                <section className='mb-8'>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Reference
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                        <li>
                            <strong>Course Materials</strong>
                        </li>
                        <li>
                            Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian, Tempe, Arizona, March 18, 2018. National Transportation Safety Board (NTSB), Report HAR1903. Retrieved from: https://www.ntsb.gov/investigations/AccidentReports/Reports/HAR1903.pdf

                        </li>
                        <li>
                            Factual Report of Investigation – Tesla Model X Collision, Vehical and Survival Factors Factual Report, Mountain View, CA, HWY18FH011. National Transportation Safety Board (NTSB).

                        </li>
                        <li>
                            Collision Between a Sport Utility Vehicle Operating With Partial Driving Automation and a Crash Attenuator. National Transportation Safety Board (NTSB).
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Final Artifact
                    </h2>
                    <section>
                        <UberIncidentComponent />
                    </section>
                </section>
            </article>
        </main>
    )
}

export default AIMLCriticalIncidentsPage