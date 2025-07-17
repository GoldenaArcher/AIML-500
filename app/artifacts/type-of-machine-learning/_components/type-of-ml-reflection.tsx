import React from 'react';

function TypeOfMlReflection() {
    return (
        <div className="flex-1">
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Reflection on Types of Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Through this project and related exercises, I gained a clearer understanding of the difference between supervised and unsupervised learning - especially how the presence of labeled data shapes the training process. Identifying real-world examples like spam email detection (supervised) and customer segmentation (unsupervised) helped solidify this distinction. However, I also began to realize how messy these categories can get in practice, especially when deep learning is involved.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
                I had initially assumed deep learning was a category on its own, but working through the material showed me it’s more of a modeling technique used across all types - including reinforcement learning. It was sometimes hard to separate these ideas, since many modern applications, like game AI or autonomous vehicles, blend deep neural networks with feedback-based learning. This reflection made me more aware of how machine learning frameworks overlap and pushed me to move beyond memorizing terms toward understanding how these concepts work together in real systems.
            </p>
        </div>
    );
}

export default TypeOfMlReflection;