import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Education = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <div className="my-10" id='education'>
                <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
                    <h2 className=" text-2xl md:text-4xl text-[#788894]">
                        Education
                    </h2>
                </div>

                <div className="w-full md:w-[732px] section-hover p-6 rounded-lg mt-4 mx-auto bg-white">
                    <p className="text-lg font-[500]">Formal Education</p>

                    {/* Select option  */}
                    <div className="w-full pt-2 pr-4 max-w-[340px]">
                        <label htmlFor="#">What is your educational level?</label>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select
                                {...register('formar-education')}
                                className="profile-form-border rounded-md mt-1 px-2 py-2 text-base"
                            >
                                {/* <option selected="selected" value="">Select an option</option> */}
                                <option selected='selected' value="Select your education level">
                                    Select your education level
                                </option>
                                <option value="hsc">High School</option>
                                <option value="u-bs">Unfinished Bachelor's degree</option>
                            </select>
                        </form>
                    </div>

                    {/* education List */}
                    <div>
                        <h1 className="text-2xl font-semibold text-[#2C9BF5] mt-5">
                            Business/Commerce, General
                        </h1>
                        <p> - Babugonj Degree College</p>
                        <p className="py-1 text-sm text-gray-500 font-[500]">
                            2016 - 2018
                        </p>
                        <button className="btn">Add Education</button>
                    </div>

                    {/* Licenses */}
                    <div className="mt-5">
                        <p className="text-xl mb-2">Licenses and Certifications</p>
                        <button className="btn">Add Certifications</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;