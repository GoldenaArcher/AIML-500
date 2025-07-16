import React from 'react';
import MermaidWrapper from "@/app/_components/mermaid-wrapper";

const markdownContent = `
graph TD
  ML[Types of Machine Learning]
  SL[Supervised Learning]
  USL[Unsupervised Learning]
  RL[Reinforcement Learning]

  ML --> SL
  ML --> USL
  ML --> RL

  SL --> Regression
  SL --> Classification

  USL --> Clustering
  USL --> DimensionalityReduction
  USL --> AnomalyDetection
  USL --> AssociationLearning

  RL --> NoTypicalSubtypes
`

function Markdown() {
    return (
        <div className="flex-1 mb-12">
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Visual Taxonomy</h3>
            <MermaidWrapper>
                {markdownContent}
            </MermaidWrapper>
        </div>
    );
}

export default Markdown;