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
        SOLUTION for Green Gas Effect
      </h1>
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Individuals Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Reduce Energy Consumption: Use energy-efficient appliances, turn
              off lights and electronics when not in use, and insulate homes to
              conserve energy.
            </li>
            <li>
              Use Renewable Energy: Support and invest in renewable energy
              sources, such as solar or wind power.
            </li>
            <li>
              Drive Less: Use public transportation, carpool, or switch to
              electric vehicles to reduce greenhouse gas emissions.
            </li>
            <li>
              Support Carbon Offset Programs: Invest in programs that offset
              carbon emissions through activities like reforestation.
            </li>
            <li>
              Adopt Sustainable Practices: Reduce waste, recycle, and make
              eco-friendly choices in daily life.
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
              Adopt Low-Carbon Technologies: Invest in and implement
              technologies that reduce greenhouse gas emissions.
            </li>
            <li>
              Improve Energy Efficiency: Optimize energy use in operations and
              facilities to lower carbon footprints.
            </li>
            <li>
              Commit to Sustainability Goals: Set and achieve targets for
              reducing greenhouse gas emissions and enhancing environmental
              stewardship.
            </li>
            <li>
              Engage in Carbon Offsetting: Participate in or support carbon
              offset projects to compensate for unavoidable emissions.
            </li>
            <li>
              Promote Sustainable Practices: Encourage and implement sustainable
              practices throughout the supply chain and product lifecycle.
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
              Set Emission Reduction Targets: Establish and enforce targets for
              reducing greenhouse gas emissions at national and local levels.
            </li>
            <li>
              Promote Renewable Energy: Provide incentives for renewable energy
              adoption and invest in clean energy infrastructure.
            </li>
            <li>
              Implement Carbon Pricing: Introduce mechanisms like carbon taxes
              or cap-and-trade systems to incentivize emission reductions.
            </li>
            <li>
              Support Climate Research: Fund research on climate change
              mitigation and adaptation strategies.
            </li>
            <li>
              Create Public Policies: Develop and enforce policies that promote
              energy efficiency and reduce carbon footprints.
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
