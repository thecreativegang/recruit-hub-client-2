import React from "react";
import { useForm } from "react-hook-form";

const UserDashboardProjects = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen ">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center">
          Add Projects
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="w-full mb-3 ">
                <label
                  for="project_photo"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Project Photo<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="file"
                  name="project_photo"
                  id="project_photo"
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="project_title"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Project Title<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("project_title")}
                  type="text"
                  id="project_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Project Title"
                  required
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="live_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Live Site Link<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("live_link")}
                  type="text"
                  id="live_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Live Site link "
                  required
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="client_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  GitHub client Link
                </label>
                <input
                  {...register("client_link")}
                  type="text"
                  id="client_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="GitHub client Link"
                />
              </div>

              <div className="w-full mb-3 ">
                <label
                  for="server_link"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  GitHub Server Link
                </label>
                <input
                  {...register("server_link")}
                  type="text"
                  id="server_link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="GitHub Server Link"
                />
              </div>
            </div>

            <div className="w-full mb-3 ">
              <label
                for="project_description"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Project Description
                <span className="text-red-600 ml-[1px]">*</span>
              </label>
              <textarea
                {...register("project_description")}
                rows="5"
                id="project_description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Project Description"
                required
              />
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
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserDashboardProjects;
