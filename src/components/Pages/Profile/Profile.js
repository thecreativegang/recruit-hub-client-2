import React from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from 'react';


const Profile = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    const [checkboxValue, setCheckboxValue] = useState(false)




    return (
        <div>
            <div className=' flex relative z-[2]'>

                <div className="w-[20%] px-8 pt-20 bg-[#F2F2F2] h-screen side-bar fixed top-0 left-0">
                    <ul>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/4dcabdcfdda70fbf23396b2acc47a180.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">General</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Personal Overview</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/bea44a8645ff996094f8bdc8f7191dc0.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Relection</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/4b6c7d0c78e2f8bece546c233ed9948a.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Social Profile</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Language</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/126218bd37c65e62f709259cf2c74ee3.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Experience</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/db07c0aade0491ef2557bd9cdd5ca817.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Education</a>
                            </div>

                        </li>
                        <li>
                            <div className='flex py-[12px]'>
                                <img src="https://vanhack.com/static-desktop/da6b7c3ba441dd1b6cbe64d5985b9973.svg" alt="" />
                                <a className='pl-[18px] sidebar-link' href="#">Project</a>
                            </div>

                        </li>


                    </ul>
                </div>


                <div className="main-content w-[100%] pl-[20%] bg-[#F7F7F7]">
                    <div className='w-[732px] mx-auto bg-white'>
                        <div className='mt-12 p-[24px] grid grid-cols-2'>
                            <div className="english-verify">
                                <div className="code-test flex justify-center">
                                    <div className='text-center'>
                                        <img className='w-[45px] mb-[10px] mx-auto' src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg" alt="" />
                                        <h1 className='font-bold mb-[10px] test'>English Verification</h1>
                                        <a href="#" className='color-blue-dark'>Start now</a>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <div className='text-center'>
                                    <img className='w-[45px] mx-auto' src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg" alt="" />
                                    <h1 className='font-bold test my-[10px]'>Code Test</h1>
                                    <a href="#" className='color-blue-dark'>See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* General */}
                    <div className='w-[732px] mx-auto mt-12'>
                        <div>
                            <h1 className='text-[34px]  color-blue-dark'>General</h1>
                        </div>
                        <div className=' bg-white '>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("firstName")} />
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>







                    {/* Professional Overview */}
                    <div className='my-10'>

                        <div className='w-[732px] mx-auto '>
                            <h2 className='text-4xl text-[#788894]'>Professional Overview</h2>
                        </div>

                        <div className='w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white'>

                            <div>
                                {/* Select option  */}
                                <div className='w-full pt-2 pr-4  mb-5'>
                                    <label htmlFor="#">Which role best applies to your experience?</label>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full'>
                                            {/* <option selected="selected" value="">Select an option</option> */}
                                            <option selected value="Select your education level">Select your education level</option>
                                            <option value="hsc">High School</option>
                                            <option value="u-bs">Unfinished Bachelor's degree</option>
                                        </select>
                                    </form>
                                </div>

                                {/* Select option  */}
                                <div className='w-full pt-2 pr-4 mb-5'>
                                    <label htmlFor="#">For how many years have you been working as an IT professional?</label>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full'>
                                            {/* <option selected="selected" value="">Select an option</option> */}
                                            <option selected value="Select your education level">Select your education level</option>
                                            <option value="hsc">High School</option>
                                            <option value="u-bs">Unfinished Bachelor's degree</option>
                                        </select>
                                    </form>
                                </div>

                                <div className='flex items-center'>
                                    <input className='w-5 h-5 mr-2' onChange={e => setCheckboxValue(e.target.checked)} type="checkbox" name="#" id="#" />
                                    <span>I have leadership experience</span>
                                </div>

                                {/* Select option  */}
                                {checkboxValue && <div className='pt-2 pr-4 mb-5 w-2/4 min-w-[300px] mt-3'>
                                    <label className='font-semibold' htmlFor="#">Years of leadership</label>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full'>
                                            {/* <option selected="selected" value="">Select an option</option> */}
                                            <option selected value="Select your education level">Select your education level</option>
                                            <option value="hsc">High School</option>
                                            <option value="u-bs">Unfinished Bachelor's degree</option>
                                        </select>
                                    </form>
                                </div>}
                            </div>


                            {/* rank your top  */}
                            <div className='my-6'>
                                <h3 className='text-xl mb-1 '>Rank your top 3 skills</h3>
                                <p className='text-gray-400'>1st = Highest proficiency level; 3rd = Lowest proficiency level</p>

                                <div>

                                    <div className='flex items-center mt-4'>
                                        <p className='text-lg w-12'>1st</p>
                                        <form className='flex items-center w-full' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4'>
                                        <p className='text-lg w-12'>2nd</p>
                                        <form className='flex items-center w-full' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4'>
                                        <p className='text-lg w-12'>3rd</p>
                                        <form className='flex items-center w-full' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>


                                </div>

                            </div>

                            <div className='mt-10'>
                                <h2 className='text-2xl text-gray-500'>Add 5 secondary skills</h2>

                                <div>

                                    <div className='flex items-center mt-4 border-b-2 border-gray-200'>
                                        <form className='flex items-center w-full pb-2' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4 border-b-2 border-gray-200'>
                                        <form className='flex items-center w-full pb-2' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4 border-b-2 border-gray-200'>
                                        <form className='flex items-center w-full pb-2' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4 border-b-2 border-gray-200'>
                                        <form className='flex items-center w-full pb-2' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className='flex items-center mt-4 border-b-2 border-gray-200'>
                                        <form className='flex items-center w-full pb-2' onSubmit={handleSubmit(onSubmit)}>
                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full mr-3'>

                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>

                                            <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full max-w-[200px]'>
                                                <option selected value="Select your education level">Select your education level</option>
                                                <option value="hsc">High School</option>
                                                <option value="u-bs">Unfinished Bachelor's degree</option>
                                            </select>
                                        </form>
                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>


                    {/* Resume & Social Profile */}
                    <div className='my-10'>

                        <div className='w-[732px] mx-auto '>
                            <h2 className='text-4xl text-[#788894]'>Resume & Social Profile</h2>
                        </div>

                        <div className='w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white'>


                            <div className='w-full flex items-center justify-between pb-4'>

                                <div className='w-full'>

                                    <div className='flex justify-end'>
                                        <button className='btn font-semibold text-right flex items-center'> <AiOutlineCloudUpload className='mr-1 text-2xl' /> UPLOAD RESUME</button>
                                    </div>

                                    {/* Social link  */}
                                    <div className='py-4'>
                                        <div className='py-2 border-y-2 border-gray-200'>
                                            <p className='text-[#2C9BF5] font-[500]'>https://www.linkedin.com/in/tanvirahmed6174/</p>
                                        </div>

                                        <div className='py-2 border-b-2 border-gray-200'>
                                            <p className='text-[#2C9BF5] font-[500]'>https://github.com/tanvirgithub21</p>
                                        </div>

                                        <div className='py-2 border-b-2 border-gray-200'>
                                            <p className='text-[#2C9BF5] font-[500]'>http://localhost:3000/profile</p>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                    {/* Languages */}
                    <div className='my-10'>

                        <div className='w-[732px] mx-auto '>
                            <h2 className='text-4xl text-[#788894]'>Languages</h2>
                        </div>

                        <div className='w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white'>

                            {/* Select option -1  */}
                            <div className='w-full flex items-center justify-between pb-4'>
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[65%]" >
                                    <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full'>
                                        <option selected="selected" value="#">Select your Languages</option>
                                        <option value="hsc">English</option>
                                        <option value="u-bs">Bangla</option>
                                    </select>
                                </form>

                                {/* Select option -2  */}
                                <form onSubmit={handleSubmit(onSubmit)} className="min-w-[12.5rem] w-full max-w-[33%]"  >
                                    <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base w-full'>
                                        <option selected="selected" value="">Select an option</option>
                                        <option value="#">Basic</option>
                                        <option value="hsc">Intermediate</option>
                                        <option value="u-bs">Upper Intermediate</option>
                                        <option value="u-bs">Advanced</option>
                                        <option value="u-bs">Fluent</option>
                                    </select>
                                </form>

                            </div>

                            <div className='py-8 border-y-2 border-gray-200'>
                                <p className='text-[#2C9BF5] font-[500]'>+ Add Languages</p>
                            </div>


                        </div>
                    </div>

                    {/* Experience */}
                    <div className='my-10'>

                        <div className='w-[732px] mx-auto '>
                            <h2 className='text-4xl text-[#788894]'>Experience</h2>
                        </div>

                        <div className='w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white'>
                            <button className='btn'>Add Experience</button>
                        </div>
                    </div>

                    {/* Education */}
                    <div className='my-10'>

                        <div className='w-[732px] mx-auto '>
                            <h2 className='text-4xl text-[#788894]'>Education</h2>
                        </div>

                        <div className='w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white'>
                            <p className='text-lg font-[500]'>Formal Education</p>

                            {/* Select option  */}
                            <div className='w-full pt-2 pr-4 max-w-[340px]'>
                                <label htmlFor="#">What is your educational level?</label>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select {...register("gender")} className='border-2 rounded-md mt-1 px-2 py-2 text-base'>
                                        {/* <option selected="selected" value="">Select an option</option> */}
                                        <option selected value="Select your education level">Select your education level</option>
                                        <option value="hsc">High School</option>
                                        <option value="u-bs">Unfinished Bachelor's degree</option>
                                    </select>
                                </form>
                            </div>

                            {/* education List */}
                            <div>
                                <h1 className='text-2xl font-semibold text-[#2C9BF5] mt-5'>Business/Commerce, General</h1>
                                <p> - Babugonj Degree College</p>
                                <p className='py-1 text-sm text-gray-500 font-[500]'>2016 - 2018</p>
                                <button className='btn'>Add Education</button>
                            </div>

                            {/* Licenses */}
                            <div className='mt-5'>
                                <p className='text-xl mb-2'>Licenses and Certifications</p>
                                <button className='btn'>Add Certifications</button>
                            </div>

                        </div>
                    </div>

                </div>{/*  END  */}


            </div>
        </div>
    );
};

export default Profile;