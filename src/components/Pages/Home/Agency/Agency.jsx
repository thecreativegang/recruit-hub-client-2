import React, { useState } from "react";
import "./Agency.css";
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Agency = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section>
        <div className="px-8 py-8 dark:bg-[#0F172A]">
          {/* Agency header  */}

          <div className="flex justify-center ">
            <div className="text-center mb-10">
              <h3 className="section-title font-semibold text-[#5956e9] dark:text-[#38BDF8] st-one relative">
                Agency Statistics
              </h3>
              <h1 className="dark:text-[#E2E8F0] text-[2rem] md:text-[3.5rem] leading-[3.2rem] text-black font-semibold mb-2">
                Why People’s Like Us
              </h1>
              <p className="text-[1.1rem] dark:text-[#8C9BB6] md:text-[1.375rem] font-semibold para-color mt-[1.375rem]">
                Professional Design Agency to provide solutions
              </p>
            </div>
          </div>

          <div className="md:flex justify-evenly mt-10 pb-10">
            <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-5xl text-[#5956e9] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2 dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={98} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-[#8C9BB6]">
                Project Complate
              </p>
            </div>

            <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-5xl text-[#5956e9] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2 dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={98} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-[#8C9BB6]">
                Project Complate
              </p>
            </div>

            <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-5xl text-[#5956e9] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2 dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={55} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-[#8C9BB6]">
                Project Complate
              </p>
            </div>

            <div className="px-6 py-6 text-center shadow-2xl mb-8 md:mb-0 rounded-2xl">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-5xl text-[#5956e9] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2 dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={44} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-[#8C9BB6]">
                Project Complate
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Agency;
