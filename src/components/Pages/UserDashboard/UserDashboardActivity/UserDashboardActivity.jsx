import React from "react";
import AddNewSkills from "./AddNewSkills";

const UserDashboardActivity = () => {
  return (
    <section className="min-h-screen py-8">
      <div className="container">
        {/* activity */}

        <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md">
          <h3 className="text-3xl font-medium text-[#0b1120] border-b-4 text-center mb-6">
            User Activity
          </h3>
          <form action="">
            {/* Skills  */}
            <div>
              <div className="w-full mb-3 ">
                <label
                  for="skills"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                  required
                />
              </div>

              <div className="flex justify-end items-center">
                <p className="btn btn-sm font-medium text-white ">Add New +</p>
              </div>
            </div>

            {/* Featured  */}
            <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
              Add Featured
            </h2>
            <div>
              <div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Featured Photo
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    type="file"
                    name="featuredPhoto"
                    id="featuredPhoto"
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Featured Title
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Featured Description
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end items-center">
                <p className="btn btn-sm font-medium text-white ">Add New +</p>
              </div>
            </div>

            {/* Experience  */}
            <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
              Add Experience
            </h2>
            <div>
              <div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Experience Photo
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    type="file"
                    name="featuredPhoto"
                    id="featuredPhoto"
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Experience Title
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Experience Type
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Experience Duration
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end items-center">
                <p className="btn btn-sm font-medium text-white ">Add New +</p>
              </div>
            </div>

            {/* Courses  */}
            <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
              Add Courses
            </h2>
            <div>
              <div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Courses Photo
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    type="file"
                    name="featuredPhoto"
                    id="featuredPhoto"
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Courses Title
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Courses Description
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end items-center">
                <p className="btn btn-sm font-medium text-white ">Add New +</p>
              </div>
            </div>

            {/* Projects  */}
            <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
              Add Projects
            </h2>
            <div>
              <div>
                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Project Photo
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    type="file"
                    name="featuredPhoto"
                    id="featuredPhoto"
                  />
                </div>

                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>

                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Project Description
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    required
                  />
                </div>

                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    Live Site Link
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Live Site link "
                    required
                  />
                </div>

                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    GitHub client Link
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="GitHub client Link"
                    required
                  />
                </div>

                <div className="w-full mb-3 ">
                  <label
                    for="skills"
                    class="block mb-2 text-base font-medium text-gray-900 ml-1"
                  >
                    GitHub Server Link
                  </label>
                  <input
                    type="text"
                    id="featured"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="GitHub Server Link"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end items-center">
                <p className="btn btn-sm font-medium text-white ">Add New +</p>
              </div>
            </div>

            {/* Submit button  */}
            <div className=" max-w-[30rem] mx-auto">
              <button
                type="submit"
                className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserDashboardActivity;
