import React from "react";
import "./UserDashboard.css";

import { BiImageAdd } from "react-icons/bi";

const UserDashboard = () => {
  const userInfo = {
    CoverPhoto:
      "https://i.pinimg.com/564x/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg",
    ProfilePhoto:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    name: "Tanvir Ahmed",
    userName: "tkljfld.232",
    developerType: "Front-End Web Developer",
    Bio: "Front-End Web Developer | Interested in React Js. and React Native | Passionate about Web Development | Dreaming to be a Professional Full Stack Web Developer",
    state: "barisal",
    country: "bangladesh",
    contactsInfo: { email: "", phone: "" },
    socialLink: { github: "", linkdin: "", facebook: "", instagram: "" },
    skills: [
      { skillName: "", skillTest: 100 },
      { skillName: "", skillTest: "" },
      { skillName: "", skillTest: "" },
    ],
    featured: [
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
      { featuredPhoto: "", featuredTitle: "", featuredDescription: "" },
    ],
    experince: [
      {
        experinceTitle: "",
        jobType: "full time",
        duration: "",
        skills: ["", "", "", ""],
      },
    ],
    courses: [
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
      { coursesPhoto: "", coursesTitle: "", coursesDescription: "" },
    ],
    projects: [
      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },

      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },

      {
        projectsPhoto: "",
        projectsTitle: "",
        projectsDescription: "",
        projectsLink: { githubServer: "", githubClint: "", liveSite: "" },
      },
    ],
  };

  return (
    <>
      <section className=" bg-white py-8">
        <div className="pb-1">
          {/* User Hero section  */}
          <section className="container pb-5">
            <h3 className="text-3xl font-semibold text-center text-[#0b1120] mb-8">
              Setup your Profile
            </h3>
            {/* user cover photo and profile photo  */}
            <div className="w-full mb-[6rem]">
              <div className="w-full h-[15rem] md:h-[20rem] relative">
                <div className="w-full h-full object-cover object-center border-4 border-gray-300 rounded-sm flex flex-col justify-center items-center">
                  <BiImageAdd className="text-[7rem]" />
                  <p className="text-2xl font-medium">Cover Photo</p>
                </div>
                <div className="w-[10rem] h-[10rem] absolute left-[3rem] bottom-0 translate-y-2/4">
                  <div className="w-full h-full object-contain object-center overflow-hidden rounded-full border-[.3rem] border-gray-200 flex flex-col justify-center items-center bg-[#fff]">
                    <BiImageAdd className="text-[4rem]" />
                    <p>Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User basic information */}
            <div className="flex justify-start ">
              <div className="ml-3 text-left md:w-1/2 md:max-w-[30rem] ">
                <form action="" className="mb-6 flex flex-col gap-y-2">
                  {/* fast name  */}
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Fast Name"
                      required
                    />
                  </div>
                  {/* last Name  */}
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  {/* Bio  */}
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Bio
                    </label>
                    <textarea
                      rows="5"
                      name="bio"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
                      placeholder="Your Bio..."
                      required
                    />
                  </div>
                  {/* Submit button  */}
                  <button
                    type="submit"
                    className="px-3 py-1 btn text-lg font-medium text-white rounded-lg outline-none duration-150 ease-in-out mt-3"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
