import React from "react";
import layerImg from "@/app/_assets/deep-learning-diagram.png";
import Image from "next/image";

const NeuralNetwork = () => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        What Are Neural Networks and Why They Matter in Deep Learning
      </h3>

      <section className="mb-4">
        <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
          Neural Networks: The Foundation of Deep Learning
        </h4>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          A neural network is a computer system inspired by the way the human
          brain works. It’s made up of layers of tiny processing units (called
          "neurons") that are connected to each other. Each of these units takes
          in information, processes it, and passes it along to the next layer.
        </p>
        <p className="text-gray-500 dark:text-gray-400 pl-6">
          <span className="mr-2">💡</span>
          Think of it like a team of decision-makers. Each person (neuron) adds
          a bit of insight and passes their opinion forward.
        </p>
      </section>
      <section className="mb-4">
        <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
          What is Deep Learning?
        </h4>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          <strong> Deep learning </strong> is a subfield of machine learning
          that uses <strong> neural networks with many layers </strong>. The
          "deep" refers to the fact that there are multiple layers—each one
          learning increasingly abstract features of the input data.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">For example:</p>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
          <li>Layer 1 learns edges</li>
          <li>Layer 2 learns shapes</li>
          <li>Layer 3 learns objects (like eyes or wheels)</li>
          <li>Final layer makes the decision ("This is a cat!")</li>
        </ul>
        <Image
          src={layerImg}
          alt="Neural Network Diagram"
          className="w-full h-auto max-w-xl"
        />
      </section>
      <section className="mb-4">
        <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
          Why Are Neural Networks Essential to Deep Learning?
        </h4>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Neural networks are the foundation of deep learning. The more layers
          you stack, the more powerful the system becomes in recognizing
          patterns.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Without neural networks, deep learning wouldn’t exist.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Neural networks allow systems to:
        </p>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
          <li>Recognize speech</li>
          <li>Translate languages</li>
          <li>Detect objects in images</li>
          <li>Play games (like Go or Chess)</li>
        </ul>
      </section>
      <section className="mb-4">
        <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
          Summary
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Neural networks are the core structure behind deep learning. By
          stacking layers of neurons, we create systems that can see, hear, and
          even speak.
        </p>
      </section>
    </section>
  );
};

export default NeuralNetwork;
