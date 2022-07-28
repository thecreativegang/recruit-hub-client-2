import React from 'react';
import './Profile.css'


const Profile = () => {
    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className="side-bar pl-8 pt-8 bg-[#F2F2F2] h-screen">
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
                <div className="main-content col-span-4 bg-[#F7F7F7]">
                    <div className='w-[732px] mx-auto bg-white'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;