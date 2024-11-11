import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Import the custom CSS file

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <SubHeaderSolution />
      <br />
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Noise Pollution
      </h1>
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Individuals Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Use Noise-Cancelling Devices: Employ earplugs or noise-cancelling
              headphones in noisy environments.
            </li>
            <li>
              Maintain Quiet at Home: Keep noise levels down, especially during
              nighttime hours, to avoid disturbing neighbors.
            </li>
            <li>
              Support Noise Abatement Efforts: Advocate for and participate in
              community efforts to reduce noise pollution.
            </li>
            <li>
              Choose Quiet Appliances: Opt for quieter home appliances and
              vehicles to minimize noise.
            </li>
            <li>
              Be Aware of Noise Levels: Monitor and manage personal noise
              output, such as keeping music and conversations at moderate
              levels.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Individual"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <br />
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Industries and Corporations Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Implement Noise Control Technologies: Invest in and use
              technologies that reduce noise emissions from machinery and
              operations.
            </li>
            <li>
              Design Quieter Products: Develop products with noise-reduction
              features to minimize environmental impact.
            </li>
            <li>
              Maintain Equipment: Regularly maintain and repair machinery to
              reduce noise from wear and tear.
            </li>
            <li>
              Engage in CSR Activities: Support initiatives aimed at reducing
              noise pollution and improving community well-being.
            </li>
            <li>
              Adhere to Noise Standards: Follow industry standards and
              regulations to ensure compliance with noise control requirements.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Company"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <br></br>
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Governments Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Enforce Noise Regulations: Implement and enforce laws to control
              noise levels from industrial, commercial, and residential sources.
            </li>
            <li>
              Promote Urban Planning: Design urban areas with noise reduction in
              mind, such as incorporating green spaces and sound barriers.
            </li>
            <li>
              Monitor Noise Pollution: Establish systems for measuring and
              tracking noise levels in various areas.
            </li>
            <li>
              Educate the Public: Raise awareness about the effects of noise
              pollution and strategies to mitigate it.
            </li>
            <li>
              Support Quiet Zones: Create designated quiet zones in public
              areas, such as parks and residential neighborhoods.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image5}
            alt="Government"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Learn more about the impacts of climate change and ongoing efforts to
          address them on our{" "}
          <a href="/impact" className="text-blue-600 underline">
            Impact
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
