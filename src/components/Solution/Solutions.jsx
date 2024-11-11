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
        SOLUTION for Air Pollution
      </h1>
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Individuals Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Reduce Car Usage: Opt for public transportation, carpool, bike, or
              walk when possible to lower emissions.
            </li>
            <li>
              Conserve Energy: Use energy-efficient appliances and light bulbs,
              and reduce energy consumption to lower pollution from power
              plants.
            </li>
            <li>
              Avoid Burning Trash: Recycle and dispose of waste properly instead
              of burning it, which can release harmful pollutants.
            </li>
            <li>
              Plant Trees: Trees absorb CO2 and provide oxygen, improving air
              quality.
            </li>
            <li>
              Support Clean Energy: Advocate for and use renewable energy
              sources like solar or wind.
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
              Adopt Cleaner Technologies: Invest in and implement technologies
              that reduce emissions and improve energy efficiency.
            </li>
            <li>
              Reduce Waste: Minimize waste production and implement recycling
              programs to decrease the impact on air quality.
            </li>
            <li>
              Corporate Responsibility: Develop and adhere to sustainability
              policies that prioritize environmental protection and reduction of
              emissions.
            </li>
            <li>
              Support Environmental Initiatives: Participate in and fund
              research and initiatives aimed at combating air pollution.
            </li>
            <li>
              Transparent Reporting: Regularly report on emissions and
              environmental impact to ensure accountability and continuous
              improvement.
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
              Implement Regulations: Enforce stricter emissions standards for
              industries and vehicles to reduce air pollutants.
            </li>
            <li>
              Promote Public Transit: Invest in and encourage the use of public
              transportation to decrease the number of vehicles on the road.
            </li>
            <li>
              Support Clean Energy: Invest in renewable energy projects and
              provide incentives for clean energy adoption.
            </li>
            <li>
              Monitor Air Quality: Establish and maintain air quality monitoring
              systems to track pollution levels and enforce compliance.
            </li>
            <li>
              Raise Awareness: Launch public awareness campaigns about the
              health impacts of air pollution and ways to reduce it.
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
