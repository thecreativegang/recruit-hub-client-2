import React from "react";

const UserDashboardSkills = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
          Add Skills
        </h2>
        <div>
          <form>
            <div className="w-full mb-3 ">
              <label
                for="skills"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  id="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                  required
                />
              </div>
            </div>
            <div className="w-full mb-3 ">
              <label
                for="skills"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  id="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                  required
                />
              </div>
            </div>
            <div className="w-full mb-3 ">
              <label
                for="skills"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  id="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
                  required
                />
              </div>
            </div>
            <div className="w-full mb-3 ">
              <label
                for="skills"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Skills
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  id="skills"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Added your Skills"
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
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSkills;