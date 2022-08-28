import React from "react";
import "./UserDashboard.css";

import { BiImageAdd } from "react-icons/bi";
import { useForm } from "react-hook-form";

const UserDashboard = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mb-6 flex flex-col gap-y-2"
                >
                  {/* fast name  */}
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      First name
                    </label>
                    <input
                      {...register("first_name")}
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
                      for="last-name"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Last name
                    </label>
                    <input
                      {...register("last-name")}
                      type="text"
                      id="last-name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  {/* Bio  */}
                  <div>
                    <label
                      for="bio"
                      class="block mb-2 text-base font-medium text-gray-900 ml-1"
                    >
                      Bio
                    </label>
                    <textarea
                      {...register("bio")}
                      rows="5"
                      name="bio"
                      id="bio"
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
