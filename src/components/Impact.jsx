// src/components/Impact.js
import React from 'react';
import image3 from '../Assets/image3.png'
import image4 from '../Assets/image4.png'
import image5 from '../Assets/image5.png'

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Air Pollution: A Global Crisis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Why Air Pollution Matters</h2>
          <p className="text-gray-700">
            Air pollution is a significant environmental issue affecting the health of millions. It contributes to respiratory diseases, heart problems, and environmental degradation.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Air Pollution" className="w-full h-auto rounded-lg" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Pollution Statistics" className="w-full h-auto rounded-lg" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">How Air Pollution Affects Us</h2>
          <p className="text-gray-700">
            Exposure to polluted air can lead to severe health problems. It decreases life expectancy and impacts the quality of life by causing chronic illnesses.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700">
            Over 7 million people die each year due to air pollution. Urban areas are especially affected, with particulate matter significantly exceeding safe levels.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Statistics Chart</h2>
          <img src={image5} alt="Statistics Chart" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-gray-600">For more information on solutions to air pollution, visit our <a href="/solutions" className="text-blue-600 underline">Solutions</a> page.</p>
      </footer>
    </div>
  );
}

export default Impact;
