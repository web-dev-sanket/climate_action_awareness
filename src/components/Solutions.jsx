// src/components/Solutions.js
import React from 'react';
import image6 from '../Assets/image6.png'
import image7 from '../Assets/image7.png'
import image8 from '../Assets/image8.png'


const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Climate Action Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image6} alt="Renewable Energy" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Renewable Energy</h2>
          <p className="text-gray-700">
            Transitioning to renewable energy sources like solar, wind, and hydro can significantly reduce carbon emissions and combat climate change.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image7} alt="Energy Efficiency" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Energy Efficiency</h2>
          <p className="text-gray-700">
            Improving energy efficiency in buildings, transportation, and industry can lower energy consumption and greenhouse gas emissions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2">
          <img src={image8} alt="Sustainable Living" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Sustainable Living</h2>
          <p className="text-gray-700">
            Adopting sustainable practices in daily life, such as reducing waste, recycling, and supporting eco-friendly products, helps reduce environmental impact.
          </p>
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Learn more about the impacts of climate change and ongoing efforts to address them on our <a href="/impact" className="text-blue-600 underline">Impact</a> page.
        </p>
      </footer>
    </div>
  );
}

export default Solutions;
