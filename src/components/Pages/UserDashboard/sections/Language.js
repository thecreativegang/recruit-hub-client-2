import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Language = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <div className="my-10" id='language'>
                <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
                    <h2 className=" text-2xl md:text-4xl text-[#788894]">
                        Languages
                    </h2>
                </div>

                <div className="w-full md:w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white">
                    {/* Select option -1  */}
                    <div className="w-full md:flex items-center justify-between pb-4">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="md:max-w-[65%] w-full mb-2"
                        >
                            <select
                                {...register('language-1')}
                                className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
                            >
                                <option selected="selected" value="#">
                                    Select your Languages
                                </option>
                                <option value="hsc">English</option>
                                <option value="u-bs">Bangla</option>
                            </select>
                        </form>

                        {/* Select option -2  */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="min-w-[12.5rem] md:max-w-[33%] w-full mb-2"
                        >
                            <select
                                {...register('language-2')}
                                className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full"
                            >
                                <option selected="selected" value="">
                                    Select an option
                                </option>
                                <option value="#">Basic</option>
                                <option value="hsc">Intermediate</option>
                                <option value="u-bs">Upper Intermediate</option>
                                <option value="u-bs">Advanced</option>
                                <option value="u-bs">Fluent</option>
                            </select>
                        </form>
                    </div>

                    <div className="py-8 border-y-2 border-gray-200">
                        <p className="text-[#2C9BF5] font-[500]">+ Add Languages</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Language;