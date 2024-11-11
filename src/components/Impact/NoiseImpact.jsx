// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/Noise-Pollution.jpeg";
import image4 from "../../Assets/Noise-Affect.jpg";
import image5 from "../../Assets/Noise-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderImpact />
      <br></br>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Noise Pollution: A Global Crisis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Noise Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            Noise pollution is the excessive or harmful levels of noise in the
            environment that can negatively impact human health and wildlife.
            Constant exposure to high noise levels can lead to hearing loss,
            stress, sleep disturbances, and other health issues. It also
            disrupts communication and the natural behavior of animals.
          </p>
        </div>
        <div className=" image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Noise Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg">
            The World Health Organization (WHO) defines noise above 65 decibels
            (dB) as noise pollution. To be precise, noise becomes harmful when
            it exceeds 75 decibels (dB) and is painful above 120 dB
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
            How Noise Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Noise pollution can cause long-term health effects such as
            hypertension, heart disease, and decreased cognitive function. It
            also affects quality of life by interfering with sleep,
            communication, and relaxation. For wildlife, noise pollution can
            disrupt mating calls, navigation, and feeding patterns.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            The World Health Organization reports that around 40% of the
            European population is exposed to noise levels that may have harmful
            effects on health, including sleep disturbance and cardiovascular
            issues.
            <br></br>
            <br></br>
            The World Health Organization (WHO) defines noise above 65 decibels
            (dB) as noise pollution. To be precise, noise becomes harmful when
            it exceeds 75 decibels (dB) and is painful above 120 dB.
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
          For more information on solutions to noise pollution, visit our{" "}
          <a href="/noisesolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
