import React from "react";

const UserDashboardProjects = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
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

          {/* Submit button  */}
          <div className=" max-w-[30rem] mx-auto">
            <button
              type="submit"
              className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
            >
              Done
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserDashboardProjects;
