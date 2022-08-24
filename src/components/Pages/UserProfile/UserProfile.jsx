import React from "react";
import { Outlet } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <section className=" bg-white">
        <div className="user-profile-shadow pb-1">
          {/* User Hero section  */}
          <section className="container border-b-2 border-gray-200 pb-5">
            {/* user cover photo and profile photo  */}
            <div className="w-full mb-[6rem]">
              <div className="w-full h-[15rem] md:h-[20rem] relative">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://i.pinimg.com/564x/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg"
                  alt="User-cover-images"
                />
                <div className="w-[10rem] h-[10rem] absolute left-[3rem] bottom-0 translate-y-2/4">
                  <img
                    className="w-full h-full object-contain object-center overflow-hidden rounded-full border-[.3rem] border-gray-200"
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                    alt="User-profile-images"
                  />
                </div>
              </div>
            </div>

            {/* User basic information */}
            <div className="flex justify-between ">
              <div className="ml-3 text-left md:w-1/2 md:max-w-[30rem] ">
                <h2 className="text-3xl font-[700] text-[#050505] uppercase font-segoeUi">
                  tanvir ahmed
                </h2>
                <p className="w-full text-lg font-medium text-gray-500 mt-3 ">
                  Front-End Web Developer
                </p>
                <p className="w-full text-base md:text-lg font-normal mt-3 ">
                  Front-End Web Developer | Interested in React Js. and React
                  Native | Passionate about Web Development | Dreaming to be a
                  Professional Full Stack Web Developer
                </p>
                <p className="w-full text-base md:text-lg font-normal text-gray-500 mt-3 ">
                  Barisal, Bangladesh
                </p>
              </div>
              <div className="mr-10">
                <button className="px-5 py-2 rounded-3xl outline-none font-bold bg-[#287eff] text-white">
                  Message
                </button>
              </div>
            </div>
          </section>
          {/* Nested Routes menu */}
          <div className="container">
            <div className="py-2 ">
              <ul className="flex">
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  About
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  Skills
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  Featured
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  Experience
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  Courses
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  Projects
                </li>
                <li className="text-base font-semibold px-3 py-1 rounded hover:bg-[#e8e8e8] duration-200 ease-in-out cursor-pointer">
                  More
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F2F5] pt-6">
        <div className="container">
          <div className="bg-white rounded-lg">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
