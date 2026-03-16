import Image from "next/image";
import { Metadata } from "next";
import ComponentCard from "./_components/component-card";

import linearActivation4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/linear-activation-4-layers.png";
import sigmoidActivation4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/sigmoid-activation-4-layers.png";
import reluActivation4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/relu-activation-4-layers.png";
import tanhActivation4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/tanh-activation-4-layers.png";
import tanhActivation3Layers from "@/app/_assets/aiml-501/neuralnetwork-components/tanh-activation-3-layers.png";
import tanhActivation2Layers from "@/app/_assets/aiml-501/neuralnetwork-components/tanh-activation-2-layers.png";
import tanhActivation1Layer from "@/app/_assets/aiml-501/neuralnetwork-components/tanh-activation-1-layer.png";
import highEpochTanh4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/high-epoch-tanh-4-layers.png";
import noise5Tanh4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/noise-5-tanh-4-layers.png";
import xorDatasetTanh4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/xor-dataset-tanh-4-layers.png";
import x1SquaredFeatureTanh4Layers from "@/app/_assets/aiml-501/neuralnetwork-components/x1-squared-feature-tanh-4-layers.png";

const experiments = [
  {
    title: "1 Hidden Layer: Too Simple For Circle Data",
    image: tanhActivation1Layer,
    note: "A single hidden neuron produced an almost linear boundary and could not separate the circle dataset well.",
    takeaway: "Too few neurons or layers limits the network's ability to model nonlinear patterns.",
  },
  {
    title: "2 Hidden Layers: Slight Improvement, Still Limited",
    image: tanhActivation2Layers,
    note: "Adding another hidden layer helped a little, but the boundary was still too simple to wrap around the center cluster.",
    takeaway: "A deeper network can improve results, but very small hidden layers still underfit nonlinear data.",
  },
  {
    title: "3 Hidden Layers: Better Pattern Learning",
    image: tanhActivation3Layers,
    note: "With more layers and a few more neurons, the model started forming a clearer nonlinear region around the center class.",
    takeaway: "Increasing depth gave the network more capacity to learn the circular structure.",
  },
  {
    title: "4 Hidden Layers With Tanh: Strong Fit",
    image: tanhActivation4Layers,
    note: "The deeper tanh network formed a closed region around the center class and sharply reduced loss.",
    takeaway: "More layers and neurons gave the model enough capacity to learn the circular decision boundary well.",
  },
  {
    title: "4 Hidden Layers With ReLU: Also Strong",
    image: reluActivation4Layers,
    note: "With the same deeper architecture, ReLU also reached a very low loss and learned a slightly more angular boundary.",
    takeaway: "Activation functions affect training behavior and the shape of the final boundary even when the architecture stays fixed.",
  },
  {
    title: "Sigmoid Activation Struggled",
    image: sigmoidActivation4Layers,
    note: "Using sigmoid with a deeper network still produced a weak output and higher loss.",
    takeaway: "Sigmoid can struggle on deeper networks because it did not separate this nonlinear pattern effectively in this experiment.",
  },
  {
    title: "Linear Activation Was Too Weak",
    image: linearActivation4Layers,
    note: "Linear activation kept the network close to a simple linear transformation, which was not enough for circle classification.",
    takeaway: "A nonlinear problem needs nonlinear activations to create a useful boundary.",
  },
];

const variations = [
  {
    title: "Noise Variation",
    image: noise5Tanh4Layers,
    note: "With higher noise, the circle classes became less clean and the boundary had to tolerate more overlap and uncertainty.",
    takeaway: "Increasing noise made the task harder and reduced how sharply the model could separate the classes.",
  },
  {
    title: "Dataset Variation",
    image: xorDatasetTanh4Layers,
    note: "Switching to a different dataset changed the geometry of the problem, and the decision boundary adapted to match the new class layout.",
    takeaway: "The dataset type directly changes what kind of boundary the network needs to learn.",
  },
  {
    title: "Feature Variation",
    image: x1SquaredFeatureTanh4Layers,
    note: "Adding the x1 squared feature changed how the model represented the circle data and gave it another nonlinear signal to work with.",
    takeaway: "Feature selection can materially change the learned boundary even when the architecture stays the same.",
  },
  {
    title: "Training Time Variation",
    image: highEpochTanh4Layers,
    note: "With many more epochs, the network had more time to keep reducing loss and refining the learned boundary.",
    takeaway: "Training longer improved fit, but it also made the boundary more intricate, which shows that training time can change model complexity as well as performance.",
  },
];

const references = [
  {
    id: "R1",
    text: "TensorFlow Playground",
    url: "https://playground.tensorflow.org/",
  },
  {
    id: "R2",
    text: "AIML-501 assignment brief and rubric requirements",
  },
];

export const metadata: Metadata = {
  title: "Neural Network Components",
  description:
    "A visual portfolio artifact explaining neural network components through TensorFlow Playground experiments.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </section>
  );
}

export default function NeuralNetworkComponentsPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 py-16">
      <article>
        <header>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            Neural Network Components
          </h1>
        </header>

        <Section title="Introduction">
          <p>
            This artifact uses TensorFlow Playground experiments to explain the main parts of a
            neural network and show how architecture and activation choices change model behavior on
            a classification task.
          </p>
        </Section>

        <Section title="Description">
          <p>
            I used the circle dataset in TensorFlow Playground and compared several network
            configurations, including shallow and deep architectures, different activation
            functions, longer training time, higher noise, a different dataset, and a changed input
            feature. The screenshots show how the model's decision boundary, training loss, and test
            loss changed as the network became more or less capable of learning a nonlinear pattern.
          </p>
        </Section>

        <Section title="Objective">
          <p>
            Create a visual explanation of neural network components by showing how data moves
            through layers and how design choices such as neurons, activations, and optimization
            affect training performance and model output.
          </p>
        </Section>

        <Section title="Process">
          <ol className="list-decimal space-y-2 pl-6">
            <li>Used TensorFlow Playground to train multiple models on the circle classification dataset.</li>
            <li>Changed hidden layers, neuron counts, and activation functions one variable at a time.</li>
            <li>Tested additional variations by training longer, increasing noise, switching datasets, and adding an engineered feature.</li>
            <li>Captured screenshots of weak and strong model configurations for comparison.</li>
            <li>Mapped the Playground behavior back to core neural network components.</li>
            <li>Organized the artifact into component explanations, experiment results, and summary insights.</li>
          </ol>
        </Section>

        <Section title="Neural Network Structure">
          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(145deg,#fbfdff,#f5f7fb)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(8,12,20,0.94),rgba(18,24,39,0.9))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1fr)] lg:items-stretch">
              <div className="group rounded-2xl border border-sky-200 bg-sky-50/80 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-300 hover:shadow-[0_18px_40px_rgba(14,165,233,0.10)] dark:border-sky-300/20 dark:bg-sky-500/10 dark:hover:border-sky-300/35 dark:hover:shadow-[0_18px_40px_rgba(14,165,233,0.12)]">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-700/80 dark:text-sky-200/80">Input Layer</p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-gray-300">
                  Raw features such as <code>x1</code> and <code>x2</code> enter the network here.
                </p>
              </div>

              <div className="hidden items-center justify-center text-xl text-slate-400 dark:text-gray-500 lg:flex">→</div>

              <div className="group rounded-2xl border border-amber-200 bg-amber-50/80 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-amber-300 hover:shadow-[0_18px_40px_rgba(245,158,11,0.10)] dark:border-amber-300/20 dark:bg-amber-500/10 dark:hover:border-amber-300/35 dark:hover:shadow-[0_18px_40px_rgba(245,158,11,0.12)]">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-200/80">Hidden Layers</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-amber-900 dark:text-amber-100">
                  <span className="rounded-full border border-amber-300 bg-white/80 px-3 py-1 dark:border-amber-200/15 dark:bg-black/20">Layer 1</span>
                  <span className="text-amber-500/70 dark:text-amber-200/60">→</span>
                  <span className="rounded-full border border-amber-300 bg-white/80 px-3 py-1 dark:border-amber-200/15 dark:bg-black/20">Layer 2</span>
                  <span className="text-amber-500/70 dark:text-amber-200/60">→</span>
                  <span className="rounded-full border border-amber-300 bg-white/80 px-3 py-1 dark:border-amber-200/15 dark:bg-black/20">Layer 3</span>
                  <span className="text-amber-500/70 dark:text-amber-200/60">→</span>
                  <span className="rounded-full border border-amber-300 bg-white/80 px-3 py-1 dark:border-amber-200/15 dark:bg-black/20">Layer n</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-gray-300">
                  <li>Learns early feature combinations.</li>
                  <li>Builds more abstract nonlinear patterns.</li>
                  <li>Improves capacity when the task is more complex.</li>
                </ul>
              </div>

              <div className="hidden items-center justify-center text-xl text-slate-400 dark:text-gray-500 lg:flex">→</div>

              <div className="group rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300 hover:shadow-[0_18px_40px_rgba(16,185,129,0.10)] dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:hover:border-emerald-300/35 dark:hover:shadow-[0_18px_40px_rgba(16,185,129,0.12)]">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700/80 dark:text-emerald-200/80">Output Layer</p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-gray-300">
                  Produces the final class prediction and decision boundary.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-gray-400">
              This left-to-right flow mirrors how data moves through the network: inputs enter
              first, hidden layers transform the signal step by step, and the output layer turns
              that learned representation into a prediction.
            </p>
          </div>
        </Section>

        <Section title="Component Explanations">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ComponentCard
              title="Layers"
              text="Layers organize how information moves through the network. Input layers receive features, hidden layers transform them, and the output layer produces a prediction."
            />
            <ComponentCard
              title="Neurons"
              text="Neurons are the small computation units inside each layer. Increasing neuron count gives the model more capacity to represent complex patterns."
            />
            <ComponentCard
              title="Weights"
              text="Weights control how strongly one neuron influences the next. Training adjusts these weights to reduce error and improve the decision boundary."
            />
            <ComponentCard
              title="Activation Functions"
              text="Activation functions introduce nonlinearity. In my experiments, tanh and ReLU handled the circle dataset much better than sigmoid or linear activation."
            />
            <ComponentCard
              title="Loss Functions"
              text="Loss functions measure how wrong the model is during training. In this classification task, the Playground reports training and test loss so I could see whether the network was improving as it learned to separate the classes."
            />
            <ComponentCard
              title="Optimization Algorithms"
              text="Optimization algorithms update the weights during training. In the Playground this happens through backpropagation and gradient descent, which repeatedly adjust the network over many epochs to reduce loss."
            />
          </div>
        </Section>

        <Section title="Experiment Results">
          <div className="grid gap-8 lg:grid-cols-2">
            {experiments.map((experiment) => (
              <figure
                key={experiment.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-300/60 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="border-b border-slate-200 px-6 py-4 dark:border-white/10">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100">{experiment.title}</h3>
                </div>
                <div className="p-4">
                  <Image
                    src={experiment.image}
                    alt={experiment.title}
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10"
                    placeholder="blur"
                  />
                  <figcaption className="mt-4 space-y-2 text-sm text-slate-700 dark:text-gray-300">
                    <p>{experiment.note}</p>
                    <p className="text-slate-500 dark:text-gray-400">{experiment.takeaway}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Section>

        <Section title="Additional Playground Variations">
          <div className="grid gap-8 lg:grid-cols-2">
            {variations.map((variation) => (
              <figure
                key={variation.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-300/60 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="border-b border-slate-200 px-6 py-4 dark:border-white/10">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100">{variation.title}</h3>
                </div>
                <div className="p-4">
                  <Image
                    src={variation.image}
                    alt={variation.title}
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10"
                    placeholder="blur"
                  />
                  <figcaption className="mt-4 space-y-2 text-sm text-slate-700 dark:text-gray-300">
                    <p>{variation.note}</p>
                    <p className="text-slate-500 dark:text-gray-400">{variation.takeaway}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Section>

        <Section title="Summary and Key Insights">
          <div className="overflow-hidden rounded-3xl border border-cyan-200 bg-[linear-gradient(145deg,#f7fbff,#eef4fb)] shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-cyan-300/15 dark:bg-[linear-gradient(145deg,rgba(8,12,20,0.98),rgba(18,24,39,0.92))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <div className="border-b border-slate-200 px-6 py-5 dark:border-white/10">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-700/70 dark:text-cyan-200/70">Summary Slide</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Why Visualization Matters</h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 dark:text-gray-300">
                Seeing the decision boundary, loss curves, and network structure at the same time
                made the role of each neural network component much easier to understand. The
                Playground was most useful when I changed one variable at a time and compared the
                results directly.
              </p>
            </div>
            <div className="border-b border-slate-200 px-6 py-5 dark:border-white/10">
              <div className="flex flex-col gap-4 text-sm text-slate-700 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
                <div className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-center dark:border-sky-300/20 dark:bg-sky-500/10">Inputs</div>
                <div className="text-center text-slate-400 dark:text-gray-500">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </div>
                <div className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-center dark:border-amber-300/20 dark:bg-amber-500/10">Hidden Layers</div>
                <div className="text-center text-slate-400 dark:text-gray-500">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </div>
                <div className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-center dark:border-fuchsia-300/20 dark:bg-fuchsia-500/10">Decision Boundary</div>
                <div className="text-center text-slate-400 dark:text-gray-500">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </div>
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-center dark:border-emerald-300/20 dark:bg-emerald-500/10">Prediction</div>
              </div>
            </div>
            <div className="px-6 py-6">
              <ul className="list-disc space-y-2 pl-6 text-slate-700 dark:text-gray-300">
                <li>Shallow networks underfit the circle dataset because they cannot build a strong nonlinear boundary.</li>
                <li>Progressively adding more layers improved the model's ability to separate the inner and outer classes.</li>
                <li>Activation choice mattered: tanh and ReLU worked much better than sigmoid and linear in this experiment.</li>
                <li>Training time, noise, dataset type, and feature selection all changed the shape and difficulty of the learning problem.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Tools/Technologies Used">
          <ul className="list-disc space-y-2 pl-6">
            <li>TensorFlow Playground for neural network experiments and screenshots</li>
            <li>Next.js and React for the portfolio artifact page</li>
            <li>TypeScript and Tailwind CSS for implementation and styling</li>
            <li>VS Code for authoring and editing</li>
          </ul>
        </Section>

        <Section title="Value Proposition">
          <p>
            This artifact turns abstract neural network terminology into a visual and experiment-based
            explanation. It helps learners connect architecture choices to actual model behavior
            rather than memorizing definitions in isolation.
          </p>
        </Section>

        <Section title="Unique Value">
          <p>
            Instead of explaining neural network components only at a conceptual level, this page
            ties each component to real Playground outputs, including underfitting cases, stronger
            architectures, activation comparisons, and changes in training time, noise, dataset, and features.
          </p>
        </Section>

        <Section title="Relevance">
          <p>
            The artifact is useful for AI/ML beginners, classroom discussion, and interview review
            because it shows how neural network structure directly affects performance on a nonlinear
            classification problem.
          </p>
        </Section>

        <Section title="References">
          <ul className="list-disc space-y-2 pl-6">
            {references.map((reference) => (
              <li key={reference.id}>
                [{reference.id}] {reference.text}
                {reference.url ? `: ${reference.url}` : ""}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
