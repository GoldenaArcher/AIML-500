import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import TableWrapper from '@/app/_components/table-wrapper'

type StepRow = {
    step:  string
    supervised: string
    unsupervised: string
    reinforcement: string
}

const data: StepRow[] = [
  {
    step: "1",
    supervised: "Collect labeled data",
    unsupervised: "Gather unlabeled data",
    reinforcement: "Define agent and environment"
  },
  {
    step: "2",
    supervised: "Preprocess (normalize, encode labels)",
    unsupervised: "Scale features, remove noise",
    reinforcement: "Define reward function"
  },
  {
    step: "3",
    supervised: "Choose regression/classification algorithm",
    unsupervised: "Choose clustering/dimensionality reduction",
    reinforcement: "Initialize agent policy"
  },
  {
    step: "4",
    supervised: "Train model on labeled data",
    unsupervised: "Fit model to discover patterns",
    reinforcement: "Agent explores environment"
  },
  {
    step: "5",
    supervised: "Evaluate on test set",
    unsupervised: "Evaluate with internal metrics (e.g. Silhouette score)",
    reinforcement: "Update policy based on reward"
  },
  {
    step: "6",
    supervised: "Use model to predict outcomes",
    unsupervised: "Apply clusters or features to tasks",
    reinforcement: "Deploy agent in real-world environment"
  }
];

const columns: ColumnDef<StepRow>[] = [
    {
        header: "Step",
        accessorKey: "step"
    },
    {
        header: "Supervised Learning",
        accessorKey: "supervised"
    },
    {
        header: "Unsupervised Learning",
        accessorKey: "unsupervised"
    },
    {
        header: "Reinforcement Learning",
        accessorKey: "reinforcement"
    }
];

export default function StepComparison() {
    return (
        <div className="flex-1">
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Workflow Comparison</h3>
            <TableWrapper data={data} columns={columns} />
        </div>
    )
}