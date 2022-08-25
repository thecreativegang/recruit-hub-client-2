import React from 'react';
import { Outlet } from 'react-router-dom';
import './UserMain.css';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserMain = () => {
    return (
        <div className='flex bg-[#F3F3F3] dark:bg-[#0b1120] h-screen relative'>
            {/* side bar  */}
            <div className='w-[20%] dark:bg-[#0F172A] p-6 usernav bg-white'>
                <UserSidebar></UserSidebar>
            </div>

            {/* main content  */}
            <div className='w-[80%]'>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserMain;