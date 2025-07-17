import React from 'react';

function TimelineDetailsSection() {
    return (
        <div className='mb-12'>
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
    );
}

export default TimelineDetailsSection;