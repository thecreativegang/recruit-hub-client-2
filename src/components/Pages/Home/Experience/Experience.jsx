import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section className="mt-20 mb-40">
        <div className="">
          <div className=" w-full bg-[#5956e9] relative experienceWrap">
            <div className="w-[50%] text-white py-4 px-8">
              <h3 className="letsWork text-2xl mt-10 mb-6 inline-block relative z-10 py-4 px-11">
                Let’s Work
              </h3>
              <h1 className="text-[2rem] font-bold mb-12 leading-[3.3rem]">
                Experience & innovative{" "}
                <span className="fill-text"> solutions</span> for
                <span className="fill-text"> creative</span> design &
                development <span className="fill-text"> agency</span>
              </h1>
              <button className="px-4 py-2 text-xs font-semibold rounded-md border-2 hover:bg-black hover:text-white hover:border-black ease-in duration-200 mb-8">
                {" "}
                Let’s Work Together{" "}
              </button>
            </div>

            {/* image box */}
            <div className="experienceImg w-[55%] h-[55%] rounded-[8.5rem] absolute bottom-[-18%] right-16 z-20 hidden md:block"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
