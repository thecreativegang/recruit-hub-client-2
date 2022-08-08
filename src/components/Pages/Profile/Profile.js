import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Profile = () => {
  const [country, setCoutry] = useState([]);

  useEffect(() => {
    fetch('country.json')
      .then((res) => res.json())
      .then((data) => setCoutry(data?.countries));
  }, []);

  country?.map((c) => console.log(c?.name));

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <div>
      <div className=" flex relative z-[2] max-w-[1536px] mx-auto overflow-hidden ">
        <div className="hidden md:block w-[20%] px-8 pt-20 bg-[#F2F2F2] h-screen side-bar fixed top-0 left-0">
          <ul>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/4dcabdcfdda70fbf23396b2acc47a180.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="general" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >General</Link>
              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg"
                  alt=""
                />
                {/* <a className="pl-[18px] sidebar-link" href="#">
                  Personal Overview
                </a> */}
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="overview" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Personal Overview</Link>
              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/bea44a8645ff996094f8bdc8f7191dc0.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="relection" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Relection</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/4b6c7d0c78e2f8bece546c233ed9948a.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="social-profile" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Social Profile</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="language" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Languages</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/126218bd37c65e62f709259cf2c74ee3.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="experience" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Experience</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/db07c0aade0491ef2557bd9cdd5ca817.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="education" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Education</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px]">
                <img
                  src="https://vanhack.com/static-desktop/da6b7c3ba441dd1b6cbe64d5985b9973.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="project" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Project</Link>

              </div>
            </li>
          </ul>
        </div>

        <div className="main-content w-[100%] md:pl-[20%] bg-[#F7F7F7] md:mx-4">
          <div className="w-full md:w-[732px] mx-4 md:mx-auto  bg-white">
            <div className="mt-12 p-[24px] grid grid-cols-2">
              <div className="english-verify">
                <div className="code-test flex justify-center">
                  <div className="text-center">
                    <img
                      className="w-[30px] md:w-[45px] mb-[10px] mx-auto"
                      src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg"
                      alt=""
                    />
                    <h1 className="text-sm md:text-xl font-bold mb-[10px] test">
                      English Verification
                    </h1>
                    <Link to="/" className="text-xs md:text-sm color-blue-dark">
                      Start now
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center">
                <div className="text-center">
                  <img
                    className="w-[30px] md:w-[45px] mx-auto"
                    src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg"
                    alt=""
                  />
                  <h1 className="text-sm md:text-xl font-bold test my-[10px]">
                    Code Test
                  </h1>
                  <Link to={'/'} className="text-xs md:text-sm color-blue-dark">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* General */}
          <div className=" w-full  md:w-[732px] mx-auto mt-12 " id='general'>
            <div className=''>
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
                  <button type='submit' className=' mt-5  py-[10px] px-[30px] bg-blue-dark uppercase text-white'>Submit<i class="fa-solid fa-angle-right ml-[6px]"></i></button>

                </form>
              </div>
            </div>
          </div>

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
                      {/* <select
                        {...register('gender')}
                        className="profile-form-border rounded-md mt-1 px-2 py-2 text-base w-full mr-3"
                      >
                        <option selected='selected'value="Select your education level">
                          Select your education level
                        </option>
                        <option value="hsc">High School</option>
                        <option value="u-bs">
                          Unfinished Bachelor's degree
                        </option>
                      </select> */}

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

          {/* Relocation */}
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

          {/* Resume & Social Profile */}
          <div className="my-10" id='social-profile'>
            <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
              <h2 className=" text-2xl md:text-4xl text-[#788894]">
                Resume & Social Profile
              </h2>
            </div>

            <div className="w-full md:w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white">
              <div className="w-full flex items-center justify-between pb-4">
                <div className="w-full">
                  <div className="flex justify-end">
                    <button className="btn text-xs md:text-xl font-semibold text-right flex items-center">
                      {' '}
                      <AiOutlineCloudUpload className="mr-1 text-xl" /> UPLOAD
                      RESUME
                    </button>
                  </div>

                  {/* Social link  */}
                  <div className="py-4">
                    <div className="py-2 border-y-2 border-gray-200">
                      <p className="text-base text-[#2C9BF5] font-[500]">
                        https://www.linkedin.com/in/tanvirahmed6174/
                      </p>
                    </div>

                    <div className="py-2 border-b-2 border-gray-200">
                      <p className="text-base text-[#2C9BF5] font-[500]">
                        https://github.com/tanvirgithub21
                      </p>
                    </div>

                    <div className="py-2 border-b-2 border-gray-200">
                      <p className="text-base text-[#2C9BF5] font-[500]">
                        http://localhost:3000/profile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
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

          {/* Experience */}
          <div className="my-10" id='experience'>
            <div className="w-full md:w-[732px] mx-4 md:mx-auto ">
              <h2 className=" text-2xl md:text-4xl text-[#788894]">
                Experience
              </h2>
            </div>

            <div className="w-[732px] p-6 rounded-lg mt-4 mx-auto bg-white">
              <button className="btn">Add Experience</button>
            </div>
          </div>

          {/* Education */}
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
        {/*  END  */}
      </div>
    </div>
  );
};

export default Profile;
