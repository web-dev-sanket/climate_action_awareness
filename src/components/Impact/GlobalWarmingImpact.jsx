// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/GlobalWarming.jpg";
import image4 from "../../Assets/GlobalWarming-Affect.png";
import image5 from "../../Assets/GlobalWarming-Stat.jpg";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderImpact />
      <br></br>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Global Warming: A Global Crisis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className=" font-semibold mb-4 text-4xl">
            Why Global Warming Matters
          </h2>
          <p className="text-gray-700 text-3xl">
            Global warming refers to the long-term increase in Earth's average
            surface temperature due to rising levels of greenhouse gases. This
            phenomenon leads to melting ice caps, rising sea levels, and extreme
            weather events, which can have devastating effects on ecosystems,
            agriculture, and human societies.
          </p>
        </div>
        <div className=" image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Global Warming"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg">
            Global warming is the long-term warming of the planet's overall
            temperature. Though this warming trend has been going on for a long
            time, its pace has significantly increased in the last hundred years
            due to the burning of fossil fuels. As the human population has
            increased, so has the volume of fossil fuels burned.
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
          <h2 className="text-4xl font-semibold mb-4">
            How Global Warming Affects Us
          </h2>
          <p className="text-gray-700 text-3xl">
            Global warming impacts include more frequent and severe heatwaves,
            rising sea levels causing flooding, and disruptions to weather
            patterns. These changes can lead to food and water shortages,
            increased health risks, and displacement of populations due to
            extreme weather events.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-3xl">
            Since the late 19th century, global temperatures have risen by
            approximately 1.2°C (2.2°F), with significant increases in the last
            few decades. The past decade has been the warmest on record, leading
            to accelerated ice melt and rising sea levels.
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
          For more information on solutions to global warming, visit our{" "}
          <a href="/globalwarmingsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
