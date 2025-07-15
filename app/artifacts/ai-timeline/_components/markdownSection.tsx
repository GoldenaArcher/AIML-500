import MermaidWrapper from '@/app/_components/mermaidWrapper';
import React from 'react';

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

function MarkdownSection() {
    return (
        <div className='flex-1'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Timeline Diagrams</h3>
            <MermaidWrapper>
                {timelineDiagram}
            </MermaidWrapper>
        </div>

    );
}

export default MarkdownSection;