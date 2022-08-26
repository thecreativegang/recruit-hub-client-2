import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Relocation = () => {
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
            <div className="my-10" id='relection'>
                <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
                    <h2 className=" text-2xl md:text-4xl text-[#788894]">
                        Relocation
                    </h2>
                </div>

                <div className="w-full md:w-[732px] section-hover p-6 rounded-lg mt-4 mx-auto bg-white">
                    {/* Select option  */}
                    <div className="w-full pt-2 pr-4  mb-5">
                        <label htmlFor="#">Are you open to remote jobs?</label>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select
                                {...register('education-1')}
                                className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-1/2"
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
                    <div className="w-full pt-2 pr-4  mb-5">
                        <label htmlFor="#">Where would you like to work?</label>

                        <form
                            className="flex items-center"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <span className="text-lg font-semibold mr-4">1st</span>
                            <select
                                {...register('education-3')}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 pt-8">
                        {/* Select option  */}
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('education-4')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('education-6')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('education-9')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('work')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('work-2')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('work-4')}
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
                        <div className="w-full pt-2 pr-4  mb-5">
                            <label htmlFor="#">Where would you like to work?</label>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register('work-6')}
                                    className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
                                >
                                    <option selected='selected' value="Select your education level">
                                        Select your education level
                                    </option>
                                    <option value="hsc">High School</option>
                                    <option value="u-bs">Unfinished Bachelor's degree</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            {/* passport  */}
                            <div className="mb-4">
                                <p>Do you have a valid passport?</p>
                                <label htmlFor="field-yes" className="mr-8">
                                    <input
                                        className="mt-3"
                                        {...register('rain')}
                                        type="radio"
                                        name="passport"
                                        value="yes"
                                        id="field-yes"
                                    />
                                    Yes
                                </label>
                                <label htmlFor="field-no">
                                    <input
                                        {...register('No')}
                                        type="radio"
                                        name="passport"
                                        value="no"
                                        id="field-no"
                                    />
                                    No
                                </label>
                            </div>
                            <div className="mt-5">
                                <p>Are you actively looking for a job?</p>
                                <label htmlFor="field-actively-job" className="mr-8">
                                    <input
                                        className="mt-3"
                                        {...register('rain')}
                                        type="radio"
                                        name="actively-job"
                                        value="yes"
                                        id="field-actively-job-yes"
                                    />
                                    Yes
                                </label>
                                <label htmlFor="field-actively-job">
                                    <input
                                        {...register('No')}
                                        type="radio"
                                        name="actively-job"
                                        value="no"
                                        id="field-actively-job-no"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4">
                                <p>What size company do you prefer?</p>
                                <div className="flex items-start justify-between mt-2">
                                    <label className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="" id="" />
                                        <span> Startup </span>
                                    </label>
                                    <label className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="" id="" />
                                        <span> Midsize </span>
                                    </label>
                                    <label className="flex items-center">
                                        <input className="mr-2" type="checkbox" name="" id="" />
                                        <span> Corporate </span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                {/* Select option  */}
                                <div className="w-full pt-2 pr-4  mb-5">
                                    <label htmlFor="#">What is your notice period?</label>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select
                                            {...register('gender')}
                                            className="profile-form-border rounded-md px-2 py-2 text-base w-full mt-2"
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
        </div>
    );
};

export default Relocation;