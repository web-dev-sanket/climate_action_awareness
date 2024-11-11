// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/Land-Pollution.png";
import image4 from "../../Assets/Land-Affect.png";
import image5 from "../../Assets/Land-Stat.jpg";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderImpact />
      <br></br>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Land Pollution: A Global Crisis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Land Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            Land pollution occurs when harmful substances are dumped or spread
            on the ground, degrading the quality of the soil and harming
            ecosystems. This can lead to contamination of food supplies,
            destruction of habitats, and negative effects on human health.
            Proper waste management and prevention of hazardous material release
            are crucial to protecting land resources and ensuring a healthy
            environment.
          </p>
        </div>
        <div className=" image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Land Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg">
            The degradation of the earth's land surfaces, both above and below
            ground level, is referred to as land pollution. The accumulation of
            solid and liquid waste products, which contaminate groundwater and
            soil, is the cause. The greater the permeability of the soil, the
            greater the risk of land contamination.
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
            How Land Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Land pollution can lead to serious health issues, including
            respiratory problems and cancer, due to the ingestion or inhalation
            of contaminated soil and water. It also affects agricultural
            productivity by degrading soil quality, which can result in reduced
            crop yields and food insecurity. Additionally, polluted land can
            harm wildlife and disrupt natural habitats.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            According to the United Nations Environment Programme, over 2
            billion tons of waste are generated globally each year, with a
            significant portion ending up in landfills and causing pollution.
            Land pollution also impacts 70% of the world’s agricultural land,
            threatening food production and biodiversity.
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
          For more information on solutions to land pollution, visit our{" "}
          <a href="/landsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
