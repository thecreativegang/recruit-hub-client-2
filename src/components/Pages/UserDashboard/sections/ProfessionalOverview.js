import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ProfessionalOverview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [checkboxValue, setCheckboxValue] = useState(false);


    return (
        <div>
            {/* Professional Overview */}
            <div className="my-10" id='overview'>
                <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
                    <h2 className=" text-2xl md:text-4xl text-[#788894]">
                        Professional Overview
                    </h2>
                </div>

                <div className="w-full md:w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white section-hover">
                    <div>
                        {/* Select option  */}
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">
                                Which role best applies to your experience?
                            </label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('proOverview')}
                                    className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
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

                        {/* Select option  */}
                        <div className="w-full pt-2 pr-4 mb-5">
                            <label htmlFor="#">
                                For how many years have you been working as an IT
                                professional?
                            </label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('abc')}
                                    className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
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

                        <div className="flex items-center">
                            <input
                                className="w-5 h-5 mr-2"
                                onChange={(e) => setCheckboxValue(e.target.checked)}
                                type="checkbox"
                                name="#"
                                id="#"
                            />
                            <span>I have leadership experience</span>
                        </div>

                        {/* Select option  */}
                        {checkboxValue && (
                            <div className="pt-2 pr-4 mb-5 w-2/4 min-w-[300px] mt-3">
                                <label className="font-semibold" htmlFor="#">
                                    Years of leadership
                                </label>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        {...register('efghi')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
                                    >
                                        {/* <option selected="selected" value="">Select an option</option> */}
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* rank your top  */}
                    <div className="my-6">
                        <h3 className="text-xl mb-1 ">Rank your top 3 skills</h3>
                        <p className="text-gray-400">
                            1st = Highest proficiency level; 3rd = Lowest proficiency
                            level
                        </p>

                        <div>
                            <div className="flex items-center mt-4">
                                <p className="text-lg w-12">1st</p>
                                <form
                                    className="flex items-center w-full"
                                    onSubmit={handleSubmit(onSubmit)}
                                >

                                    <select
                                        className="block w-full profile-form-border p-2 rounded-md"
                                        {...register('skill-1')}
                                    >
                                        <option selected="selected" value="">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir')}
                                        className="profile-form-border block rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >


                                        <option selected="selected" value="">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4">
                                <p className="text-lg w-12">2nd</p>
                                <form
                                    className="flex items-center w-full"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvir-3')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir044')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4">
                                <p className="text-lg w-12">3rd</p>
                                <form
                                    className="flex items-center w-full"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvir-33')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir-444')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl text-gray-500">
                            Add 5 secondary skills
                        </h2>

                        <div>
                            <div className="flex items-center mt-4 border-b-2 border-gray-200">
                                <form
                                    className="flex items-center w-full pb-2"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvir-6666')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir-444444')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4 border-b-2 border-gray-200">
                                <form
                                    className="flex items-center w-full pb-2"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('ge')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir-55555')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4 border-b-2 border-gray-200">
                                <form
                                    className="flex items-center w-full pb-2"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvir-88888')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir-333')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4 border-b-2 border-gray-200">
                                <form
                                    className="flex items-center w-full pb-2"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvirrrrrr')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir=-ee')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex items-center mt-4 border-b-2 border-gray-200">
                                <form
                                    className="flex items-center w-full pb-2"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <select
                                        {...register('tanvir-eeeee')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>

                                    <select
                                        {...register('tanvir-rrrrrr')}
                                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]"
                                    >
                                        <option selected='selected' value="Select your education level">
                                            Select your education level
                                        </option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">
                                            Unfinished Bachelor's degree
                                        </option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalOverview;