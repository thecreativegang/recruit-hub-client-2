import React from "react";
import "./Agency.css";
import { FaRocket } from "react-icons/fa";

const Agency = () => {
  return (
    <section>
      <div className="px-8">
        {/* Agency header  */}
        <div className="flex justify-center">
          <div className="text-center mb-10">
            <h3 className="section-title font-semibold text-[#5956e9] st-one relative">
              Agency Statistics
            </h3>
            <h1 className="text-[2.6rem] leading-[3.2rem] font-semibold mb-2">
              Why People’s Like Us
            </h1>
            <p className="text-lg font-semibold text-gray-600">
              Professional Design Agency to provide solutions
            </p>
          </div>
        </div>

        <div className="flex justify-around mt-10 pb-10">
          <div className="px-6 py-6 text-center inline-block shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center inline-block shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center inline-block shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center inline-block shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Agency;
