// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/Air-Pollution.png";
import image4 from "../../Assets/Air-Affect.png";
import image5 from "../../Assets/Air-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderImpact />
      <br></br>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Air Pollution: A Global Crisis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Air Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            Air pollution is a critical issue because it has severe consequences
            for both the environment and human health. Pollutants such as
            particulate matter (PM2.5 and PM10), nitrogen oxides, and sulfur
            dioxide can lead to respiratory problems, cardiovascular diseases,
            and premature death. Additionally, air pollution contributes to
            global warming and climate change, impacting ecosystems and weather
            patterns. Addressing air pollution is essential for improving public
            health and preserving the planet's natural systems.
          </p>
        </div>
        <div className=" image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Air Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg">
            Air pollution is a significant environmental issue affecting the
            health of millions. It contributes to respiratory diseases, heart
            problems, and environmental degradation.
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
            How Air Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Air pollution adversely affects human health in several ways.
            Short-term exposure can cause eye irritation, coughing, and
            shortness of breath, while long-term exposure is linked to chronic
            respiratory diseases, heart conditions, and lung cancer. Children,
            the elderly, and individuals with pre-existing health conditions are
            particularly vulnerable. Moreover, air pollution can diminish
            overall quality of life by affecting cognitive function and
            increasing the risk of chronic diseases.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            Air pollution is a major global health concern. According to the
            World Health Organization, air pollution causes approximately 7
            million premature deaths each year. In urban areas, about 91% of
            people breathe air that exceeds WHO guidelines for pollutants. This
            underscores the urgent need for effective air quality management and
            policy interventions to reduce emissions and protect public health.
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
          For more information on solutions to air pollution, visit our{" "}
          <a href="/solutions" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
