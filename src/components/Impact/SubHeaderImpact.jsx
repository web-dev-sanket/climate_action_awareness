import React from "react";
import { Link } from "react-router-dom";

const SubHeaderImpact = () => {
  return (
    <div className="text-white bold text-lg py-4 bg-lime-500">
      {" "}
      {/* Background color with dark mode */}
      <h1 className="text-4xl font-bold text-center mb-4">
        {" "}
        {/* Centered and large text */}
        Pollutions and It's Impact
      </h1>
      <nav className="max-w-4xl mx-auto">
        <ul className="flex justify-center space-x-6">
          {" "}
          {/* Centered and spaced items */}
          <li>
            <Link
              to="/impact"
              className="text-black hover:text-blue-500" // Text color with hover effect
            >
              Air
            </Link>
          </li>
          <li>
            <Link to="/landimpact" className="text-black hover:text-blue-500">
              Land
            </Link>
          </li>
          <li>
            <Link to="/waterimpact" className="text-black hover:text-blue-500">
              Water
            </Link>
          </li>
          <li>
            <Link to="/noiseimpact" className="text-black hover:text-blue-500">
              Noise
            </Link>
          </li>
          <li>
            <Link
              to="/greengaseffectimpact"
              className="text-black hover:text-blue-500"
            >
              Green Gas Effect
            </Link>
          </li>
          <li>
            <Link
              to="/globalwarmingimpact"
              className="text-black hover:text-blue-500"
            >
              Global Warming
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeaderImpact;
