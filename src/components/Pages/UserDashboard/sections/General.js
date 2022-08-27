import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const GeneralSection = () => {
  const [country, setCoutry] = useState([]);

  useEffect(() => {
    fetch('country.json')
      .then((res) => res.json())
      .then((data) => setCoutry(data?.countries));
  }, []);

  // country?.map((c) => console.log(c?.name));

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className=" w-full  md:w-[732px] mx-auto mt-12 " id="general">
        <div className="">
          <div>
            <h1 className=" text-2xl md:text-4xl text-[#788894] ml-4 mb-4">
              General
            </h1>
          </div>
          <div className=" bg-white  p-6 section-hover">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="label">Country</p>

                <select
                  className="block w-full profile-form-border p-2 rounded-md"
                  {...register('country')}
                >
                  <option selected="selected" value="">
                    Select an option
                  </option>
                  {country?.map((c) => (
                    <option value={c?.name}>{c?.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="label">Gender</p>
                <select
                  className="block w-full profile-form-border p-2 rounded-md"
                  {...register('gender')}
                >
                  <option value="Select an option">Select an option</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div>
                <p className="label">Phone number</p>
                <input
                  placeholder="Enter Your Phone Number"
                  className="block w-full profile-form-border p-2 rounded-md"
                  {...register('number')}
                />
              </div>
              <button
                type="submit"
                className=" mt-5  py-[10px] px-[30px] bg-blue-dark uppercase text-white"
              >
                Submit<i className="fa-solid fa-angle-right ml-[6px]"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
