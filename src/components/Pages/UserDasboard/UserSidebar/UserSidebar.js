import React from 'react';

import { HiChatAlt, HiUser } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './UserSidebar.css'

const UserSidebar = () => {
    return (
        <div>
            <ul>
                {/* sidebar link  */}


                <Link to="/dashboard" className='flex p-3  items-center mb-2 cursor-pointer usernav-link'>
                    <HiUser className="mr-2 text-xl" />
                    <span>Profile</span>
                </Link>




                <Link to="userReview" className='flex p-3  items-center mb-2 cursor-pointer usernav-link'>
                    <HiChatAlt className="mr-2" />

                    <span>Review</span>
                </Link>
            </ul>
        </div>
    );
};

export default UserSidebar;