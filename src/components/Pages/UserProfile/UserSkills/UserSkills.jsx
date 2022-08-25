import React from "react";
import "./UserSkills.css";

import { FaHtml5 } from "react-icons/fa";
import { BiMessageSquareError } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const UserSkills = () => {
  return (
    <section>
      <h2 className="user-title">Programing Learning Skills</h2>
      <div className="px-5 pb-5">
        {/* all skills box */}
        <div>
          <div className="max-w-[25rem] w-full px-8 py-6 user-skills-shadow rounded mb-10">
            <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
              <FaHtml5 className="mr-2" />
              HTML 5
            </p>
            <p className="text-base font-medium text-yellow-500 flex justify-start items-center">
              <BiMessageSquareError className="mr-2" /> NO VERIFY
            </p>
            <p className="text-base font-medium text-green-600 flex justify-start items-center">
              <BsCheckCircle className="mr-2" />
              VERIFY BY RECRUIT HUB
            </p>
          </div>
          <div className="max-w-[25rem] w-full px-8 py-6 user-skills-shadow rounded mb-10">
            <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
              <FaHtml5 className="mr-2" />
              HTML 5
            </p>
            <p className="text-base font-medium text-yellow-500 flex justify-start items-center">
              <BiMessageSquareError className="mr-2" /> NO VERIFY
            </p>
            <p className="text-base font-medium text-green-600 flex justify-start items-center">
              <BsCheckCircle className="mr-2" />
              VERIFY BY RECRUIT HUB
            </p>
          </div>
          <div className="max-w-[25rem] w-full px-8 py-6 user-skills-shadow rounded mb-10">
            <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
              <FaHtml5 className="mr-2" />
              HTML 5
            </p>
            <p className="text-base font-medium text-yellow-500 flex justify-start items-center">
              <BiMessageSquareError className="mr-2" /> NO VERIFY
            </p>
            <p className="text-base font-medium text-green-600 flex justify-start items-center">
              <BsCheckCircle className="mr-2" />
              VERIFY BY RECRUIT HUB
            </p>
          </div>
          <div className="max-w-[25rem] w-full px-8 py-6 user-skills-shadow rounded mb-10">
            <p className="text-xl font-bold text-gray-600 flex justify-start items-center">
              <FaHtml5 className="mr-2" />
              HTML 5
            </p>
            <p className="text-base font-medium text-yellow-500 flex justify-start items-center">
              <BiMessageSquareError className="mr-2" /> NO VERIFY
            </p>
            <p className="text-base font-medium text-green-600 flex justify-start items-center">
              <BsCheckCircle className="mr-2" />
              VERIFY BY RECRUIT HUB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSkills;
