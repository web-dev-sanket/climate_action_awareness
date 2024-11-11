// src/components/Home.js
import React from "react";
import "./Components.css";
import image1 from "../Assets/img 1.png"; // Replace with actual image paths
import image2 from "../Assets/img 2.jpeg"; // Replace with actual image paths

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">
        Climate Action Awareness
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className=" image-hover-effect bg-gray-200 p-4 rounded-lg">
          <img
            src={image1}
            alt="Climate Action"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text">
            Climate is important because it affects many aspects of life,
            including food, transportation, clothing, and travel. It also has a
            major impact on health, livelihoods, and the future. Climate is the
            long-term pattern of weather conditions in a specific area.
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Importance</h2>
          <p>
            Climate Action Awareness" is vital in educating people about the
            causes and consequences of climate change, motivating them to adopt
            sustainable behaviors, and advocating for effective environmental
            policies. It helps individuals understand the urgency of reducing
            carbon emissions, conserving resources, and supporting renewable
            energy. By raising awareness, we create a collective movement toward
            mitigating climate change, protecting ecosystems, and ensuring a
            healthier planet for future generations. Awareness drives action,
            from personal lifestyle changes to influencing governmental
            decisions, making it a critical component in the global effort to
            combat the climate crisis.
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg col-span-2">
          <h2 className="text-xl font-semibold">
            Sustainable Development Needed
          </h2>
          <p>
            Sustainable development is crucial for balancing economic growth,
            environmental protection, and social equity to ensure a healthy
            planet for future generations. It involves meeting the needs of the
            present without compromising the ability of future generations to
            meet their own needs. By promoting sustainable practices—such as
            using renewable energy, reducing waste, and conserving natural
            resources—we can mitigate environmental damage, address climate
            change, and support long-term economic stability. Sustainable
            development is essential for preserving ecosystems, reducing
            poverty, and ensuring a fair distribution of resources, making it a
            key strategy for achieving global well-being.{" "}
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img
            src={image2}
            alt="Role of Environment"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Role of Environment in Our Life
          </h2>
          <p>
            The environment is crucial for our health, providing clean air,
            water, and fertile soil essential for life. It regulates climate
            through natural systems like forests and oceans, which help balance
            carbon dioxide levels and weather patterns. Biodiversity within the
            environment supports ecosystem stability, resilience, and essential
            services. Economically, industries such as agriculture, tourism, and
            fishing rely on a healthy environment. Cultural and recreational
            activities also benefit from natural landscapes, contributing to our
            quality of life and well-being. In essence, the environment sustains
            and enriches every aspect of human existence.{" "}
          </p>
        </div>
      </div>
      <footer className="text-center mt-6">
        <p>
          Conclusion: Climate change poses a significant threat to our planet.
          It's crucial to take collective action to mitigate its impacts and
          promote sustainable practices. For more information on how climate
          change impacts our world, visit our{" "}
          <a href="/impact" className="text-blue-500 hover:underline">
            Impact page
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
