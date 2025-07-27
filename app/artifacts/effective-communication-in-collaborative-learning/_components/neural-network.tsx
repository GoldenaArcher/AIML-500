import React from 'react'
import layerImg from '@/app/_assets/deep-learning-diagram.png'
import Image from 'next/image'


const NeuralNetwork = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Neural Network Architecture
      </h3>
      <Image src={layerImg} alt="Neural Network Diagram" className="w-full h-auto" />
    </div>
  )
}

export default NeuralNetwork