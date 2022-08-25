import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';

import { HiChatAlt, HiUser } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './UserSidebar.css'

const UserSidebar = () => {
    return (
        <div>
            <ul>
                {/* sidebar link  */}

                <Link to="/dashboard" className='flex p-3  items-center mb-2 cursor-pointer usernav-link'>
                    <HiUser className="mr-2 text-xl text-[20px] dark:text-[#38BDF8]" />
                    <span className='dark:text-[#E2E8F0]'>Profile</span>
                </Link>




                <Link to="userReview" className='flex p-3  items-center mb-2 cursor-pointer usernav-link'>
                    <HiChatAlt className="mr-2 text-[20px] dark:text-[#38BDF8]" />

                    <span className='dark:text-[#E2E8F0]'>Review</span>
                </Link>

                <Link to="userReview" className='flex p-3  items-center mb-2 cursor-pointer usernav-link'>
                    <FaBusinessTime className="mr-2 text-[20px] dark:text-[#38BDF8]" />
                    <span className='dark:text-[#E2E8F0]'>Interview schedule</span>
                </Link>
            </ul>
        </div>
    );
};

export default UserSidebar;