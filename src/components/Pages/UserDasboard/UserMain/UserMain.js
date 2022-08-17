import React from 'react';
import { Outlet } from 'react-router-dom';
import './UserMain.css';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserMain = () => {
    return (
        <div className='flex bg-[#F3F3F3] h-screen relative'>
            {/* side bar  */}
            <div className='w-[20%]  p-6 usernav sticky top-0 left-0'>
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