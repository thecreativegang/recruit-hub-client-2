import React from "react";
import "./Developer.css";

//react icon import link
import { MdVerified } from "react-icons/md";

const Developer = () => {
  return (
    <div className="min-h-screen">
      <div className="container">
        {/* section title  */}
        <h2 className="md:text-[32px] font-bold text-center text-gray-700 mt-10 ">
          Hire the Best Web Developers
        </h2>
        <h5 className="text-[26px] font-medium text-center mt-3">
          Find the most talented web developers in <span>Recruit HUB</span>
        </h5>

        {/* Show developer box  */}
        <section className="my-16">
          <div>
            {/* single card no 1  */}
            <div className="w-[350px] card-Shadow p-4 bg-[#f9f9f9]">
              <div class="text-center">
                {/* image Box  */}
                <div className="flex justify-center">
                  <img
                    class="w-[6rem] h-[6rem] rounded-full border-2 border-gray-600 p-[1px]"
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    alt="user"
                  />
                </div>
                <h3 className="mt-[.5rem] mb-[.1rem] text-2xl font-semibold text-gray-600 flex justify-center items-center">
                  Ricky Park{" "}
                  <MdVerified className="ml-1 text-[#0285ff] text-xl" />
                </h3>
                <h6 className="text-base font-medium text-gray-500">
                  @tanvir-123
                </h6>
                <p>Front-end Developer</p>
                <div class="buttons">
                  <button class="card-button-primary">View Profile</button>
                </div>
              </div>

              {/* skills */}
              <div class="text-left mt-8">
                <h6 className="text-xl font-semibold text-gray-700 mb-3">
                  Skills
                </h6>
                <ul className="text-lg flex flex-wrap">
                  <li className="mr-5">UI / UX</li>
                  <li className="mr-5">Front End Development</li>
                  <li className="mr-5">HTML</li>
                  <li className="mr-5">CSS</li>
                  <li className="mr-5">JavaScript</li>
                  <li className="mr-5">React</li>
                  <li className="mr-5">Node</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Developer;
