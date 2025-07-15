import React from 'react';
import MermaidWrapper from "@/app/_components/mermaidWrapper";

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
        <MermaidWrapper>
            {markdownContent}
        </MermaidWrapper>
    );
}

export default Markdown;