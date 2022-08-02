import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section className="mt-20 bg-[#5956e9] md:py-[3rem] py-[1rem]  md:px-[6rem] px-[0rem] mb-40">
        <div className=" w-full  relative experienceWrap">
          <div className="w-full  text-white py-4 px-8">
            <h3 className="letsWork font-semibold text-2xl mt-10 mb-[1.5rem] inline-block relative z-10 py-4 px-11">
              Let’s Work
            </h3>
            <h1 className="text-[2rem]  md:w-[65%] w-[99%]  md:text-[3.7rem] font-bold mb-14 leading-[2.3rem] md:leading-[4.3rem] tracking-wide">
              Experience & innovative{" "}
              <span className="fill-text"> solutions</span> for
              <span className="fill-text"> creative</span> design & development{" "}
              <span className="fill-text"> agency</span>
            </h1>
            <button className="btn-primary-vlue border-2 hover:bg-black hover:text-white hover:border-black ease-in duration-200 mb-8">
              {" "}
              Let’s Work Together{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
