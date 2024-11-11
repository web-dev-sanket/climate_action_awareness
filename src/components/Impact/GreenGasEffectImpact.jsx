// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/GreenGasEffect-Pollution.png";
import image4 from "../../Assets/GreenGasEffect-Affect.png";
import image5 from "../../Assets/GreenGasEffect-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderImpact />
      <br></br>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Green Gas Effect Pollution: A Global Crisis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Green Gas Effect Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            The greenhouse gas effect is a natural process where certain gases
            in the Earth’s atmosphere trap heat, keeping the planet warm.
            However, human activities have increased the concentration of
            greenhouse gases, leading to global warming and climate change. This
            disruption can cause extreme weather events, rising sea levels, and
            impacts on ecosystems.
          </p>
        </div>
        <div className=" image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="GreenGasEffect Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg">
            The greenhouse effect is the process through which heat is trapped
            near Earth's surface by substances known as 'greenhouse gases.'
            Imagine these gases as a cozy blanket enveloping our planet, helping
            to maintain a warmer temperature than it would have otherwise.
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Pollution Statistics"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            How Green Gas Effect Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Increased greenhouse gases lead to higher global temperatures, which
            can result in more frequent and severe weather events, such as
            heatwaves, droughts, and floods. These changes can affect
            agriculture, water resources, and human health, contributing to the
            displacement of communities and loss of biodiversity.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            The concentration of CO2 in the atmosphere has increased by over 40%
            since the pre-industrial era, contributing to a global temperature
            rise of approximately 1.2°C (2.2°F). This warming has led to more
            frequent and intense extreme weather events
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Statistics Chart</h2>
          <img
            src={image5}
            alt="Statistics Chart"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          For more information on solutions to green-gas-effect pollution, visit
          our{" "}
          <a href="/greengaseffectsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
