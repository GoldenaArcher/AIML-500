import TableWrapper from '@/app/_components/table-wrapper';
import React from 'react';

const columns = [
  { header: "Category", accessorKey: "category" },
  { header: "Supervised Learning", accessorKey: "supervised" },
  { header: "Unsupervised Learning", accessorKey: "unsupervised" },
  { header: "Reinforcement Learning", accessorKey: "reinforcement" },
];

const data = [
  {
    category: "Basic Definition",
    supervised: "Learn from labeled data",
    unsupervised: "Learn from unlabeled data",
    reinforcement: "Learn by interacting with environment"
  },
  {
    category: "Real-World Applications",
    supervised: "Spam detection, house price prediction",
    unsupervised: "Customer segmentation, anomaly detection",
    reinforcement: "Autonomous driving, game playing"
  },
  {
    category: "Common Algorithms",
    supervised: "Linear Regression, SVM, Random Forest",
    unsupervised: "K-Means, PCA, DBSCAN",
    reinforcement: "Q-Learning, Deep Q Network (DQN), PPO"
  }
];

function BasicComparison() {
    return (
        <div className="flex-1">
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Basic Comparison</h3>
            <TableWrapper data={data} columns={columns} />
        </div>
    );
}

export default BasicComparison;