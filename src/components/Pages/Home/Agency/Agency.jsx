import React from "react";
import "./Agency.css";
import { FaRocket } from "react-icons/fa";

const Agency = () => {
  return (
    <section>
      <div className="px-8">
        {/* Agency header  */}
        <div className="flex justify-center ">
          <div className="text-center mb-10">
            <h3 className="section-title font-semibold text-[#5956e9] st-one relative">
              Agency Statistics
            </h3>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[3.2rem] text-black font-semibold mb-2">
              Why People’s Like Us
            </h1>
            <p className="text-[1.1rem] md:text-[1.375rem] font-semibold para-color mt-[1.375rem]">
              Professional Design Agency to provide solutions
            </p>
          </div>
        </div>

        <div className="md:flex justify-evenly mt-10 pb-10">
          <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-[#5956e9]" />
            </div>
            <h3 className="text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl font-semibold text-gray-700">
              Project Complate
            </p>
          </div>

          <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
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
