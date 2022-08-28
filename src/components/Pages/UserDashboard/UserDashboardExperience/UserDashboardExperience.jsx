import React from "react";
import { useForm } from "react-hook-form";

const UserDashboardExperience = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen ">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
          Add Experience
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="w-full mb-3 ">
                <label
                  for="skills"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Experience Photo
                  <span className="text-red-600 ml-[1px]">*</span>
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
                  for="experience_title"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Experience Title
                  <span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("experience_title")}
                  type="text"
                  id="experience_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Featured Title"
                  required
                />
              </div>
              <div className="w-full mb-3 ">
                <label
                  for="experience_type"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Experience Type
                  <span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("experience_type")}
                  type="text"
                  id="experience_type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Experience Type"
                  required
                />
              </div>
              <div className="w-full mb-3 ">
                <label
                  for="experience_duration"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Experience Duration
                  <span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("experience_duration")}
                  type="text"
                  id="experience_duration"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Experience Duration"
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

export default UserDashboardExperience;
