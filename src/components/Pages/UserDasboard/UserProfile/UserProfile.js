import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import userImage from '../../../../images/img1.png'
import { IoSchoolSharp, IoMail, IoLocationSharp, IoCall } from "react-icons/io5";
import { AiFillLinkedin } from 'react-icons/ai';
import './UserProfile.css'
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const navigateProfile = () => [
        navigate('/profile')
    ]
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='w-[40%] z-[1] h-[35rem] mx-auto relative bg-white dark:bg-[#0b1120]  review-shadow px-12 py-16 rounded-[30px]'>
                <div className='flex justify-end'>
                    <MdModeEdit onClick={navigateProfile} className='cursor-pointer' />
                </div>
                <div className='flex justify-center items-center z-[1]'>
                    <img className='w-[150px] h-[150px] rounded-full ' src={userImage} alt="" />
                </div>
                <h1 className='mb-6  mt-4 text-[20px] dark:text-[#E2E8F0] text-center font-semibold'>{user?.displayName}</h1>
                <ul>
                    <li className='flex items-center mb-4 font-semibold'><IoMail className="mr-3 text-[20px]  dark:text-[#38BDF8]" /> <span className='dark:text-[#E2E8F0]'>Email: {user?.email}</span> </li>
                    <li className='flex items-center mb-4 font-semibold'><IoSchoolSharp className="mr-3 text-[20px] dark:text-[#38BDF8]" /><span className='text-[17px] text-black dark:text-[#E2E8F0]'>Education: Dhaka University</span> </li>
                    <li className='flex items-center mb-4 font-semibold'><AiFillLinkedin className="mr-3 text-[20px] dark:text-[#38BDF8]" /><span className='text-[17px] text-black dark:text-[#E2E8F0]'>Linkedin: linkedin.com/dev</span></li>
                    <li className='flex items-center mb-4 font-semibold'><IoLocationSharp className="mr-3 text-[20px] dark:text-[#38BDF8]" /><span className='text-[17px] text-black dark:text-[#E2E8F0]'>Location: Dhaka Bangladesh</span></li>
                    <li className='flex items-center mb-4 font-semibold'><IoCall className="mr-3 text-[20px] dark:text-[#38BDF8]" /> <span className='text-[17px] text-black dark:text-[#E2E8F0]'>Phone +8801234567:</span> </li>
                </ul>
            </div>
            <div className='w-[32%] h-[37rem] bg-blue-dark dark:bg-[#38BDF8] px-12 py-16 rounded-[30px] mx-auto absolute'>

            </div>


        </div>
    );
};

export default UserProfile;