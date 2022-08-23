import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Link } from 'react-scroll';
import ProfessionalOverview from './sections/ProfessionalOverview';
import GeneralSection from './sections/General';
import Relocation from './sections/Relocation';
import SocialProfile from './sections/SocialProfile';
import Language from './sections/Language';
import Education from './sections/Education';
import Experience from './sections/Experience';
import JobSettings from './sections/JobSetting/JobSettings';

const Profile = () => {

  return (
    <div>
      <div className=" flex relative z-[2] max-w-[1536px] mx-auto overflow-hidden ">
        <div className="hidden md:block w-[20%] px-4 pt-20 bg-[#F2F2F2] h-screen side-bar fixed top-0 left-0">
          <ul>
            <li>
              <Link activeClass="active" className="px-4 flex py-[12px] cursor-pointer " to="general" spy={true} smooth={true} offset={-100} duration={500} >

                <img
                  src="https://vanhack.com/static-desktop/4dcabdcfdda70fbf23396b2acc47a180.svg"
                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>General</span>
              </Link>
            </li>

            {/* Personal Overview route */}
            <li>
              <Link activeClass="active" className="px-4  flex py-[12px] cursor-pointer " to="overview" spy={true} smooth={true} offset={-100} duration={500} >

                <img
                  src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg"

                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Personal Overview</span>
              </Link>
            </li>

            {/* Job Settings route */}
            <li>
              <Link activeClass="active" className="px-4  flex py-[12px] cursor-pointer " to="jobSetting" spy={true} smooth={true} offset={-100} duration={500} >

                <img
                  src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg"

                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Job Setting</span>
              </Link>
            </li>

            <li>
              <Link activeClass="active" className=" flex py-[12px] px-4  cursor-pointer " to="relection" spy={true} smooth={true} offset={-100} duration={500} >
                <img
                  src="https://vanhack.com/static-desktop/bea44a8645ff996094f8bdc8f7191dc0.svg"

                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Relection</span>
              </Link>

            </li>
            <li>


              <Link activeClass="active" className="px-4  flex py-[12px] cursor-pointer " to="social-profile" spy={true} smooth={true} offset={-100} duration={500} >
                <img
                  src="https://vanhack.com/static-desktop/4b6c7d0c78e2f8bece546c233ed9948a.svg"
                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Social-Profile</span>
              </Link>



            </li>
            <li>


              <Link activeClass="active" className="px-4  flex py-[12px] cursor-pointer " to="language" spy={true} smooth={true} offset={-100} duration={500} >
                <img
                  src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg"
                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Languages</span>
              </Link>



            </li>
            <li>

              <Link activeClass="active" className="px-4  flex py-[12px] cursor-pointer " to="experience" spy={true} smooth={true} offset={-100} duration={500} >
                <img
                  src="https://vanhack.com/static-desktop/126218bd37c65e62f709259cf2c74ee3.svg"

                  alt=""
                />
                <span className='sidebar-link pl-[1rem]'>Experience</span>
              </Link>

            </li>
            <li>
              <div className="flex py-[12px] px-4 ">
                <img
                  src="https://vanhack.com/static-desktop/db07c0aade0491ef2557bd9cdd5ca817.svg"
                  alt=""
                />
                <Link className="pl-[18px] cursor-pointer sidebar-link" to="education" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Education</Link>

              </div>
            </li>
            <li>
              <div className="flex py-[12px] px-4 ">
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

          <div id='general'>
            <GeneralSection />
          </div>

          {/* Professional Overview */}
          <div className="my-10" id='overview'>
            <ProfessionalOverview />
          </div>

          {/* Job Settings */}
          <div className="my-10" id='jobSetting'>
            <JobSettings />
          </div>

          {/* Relocation */}
          <div id="relocation">
            <Relocation />
          </div>

          {/* Resume & Social Profile */}

          <div id='social-profile'>
            <SocialProfile />
          </div>

          {/* Languages */}

          <div id='language'>
            <Language />
          </div>

          {/* Experience */}

          <div id="experience">
            <Experience />
          </div>

          {/* Education */}

          <div id="education">
            <Education />
          </div>
        </div>
        {/*  END  */}
      </div>
    </div >
  );
};

export default Profile;
