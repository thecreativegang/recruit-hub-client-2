import React from 'react';
import navLogo from '../Image/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar mx-5 my-container page-banner my-border-bottom ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <button className='flex font-bold text-2xl'>
                    <img src={navLogo} alt="" />
                    <span className='self-center px-1'>RecruitHub</span>
                </button>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal my-ul p-0">
                    <li tabindex="0" >
                        <button className=''>
                            For Employers
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </button>
                        <ul className="p-0 bg-white">
                            <li><a className='pb-2'>Talent Pool</a></li>
                            <li><a className='pt-0'>Employer Events</a></li>
                            <li><a className='pt-0'>Client Success Case</a></li>
                            <li><a className='pt-0'>Salary guide</a></li>
                        </ul>
                    </li>

                    <li tabindex="1">
                        <button>
                            For tech Talent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </button>

                        <ul className="p-0 bg-white">
                            <li><a className='pb-2'>Talent Pool</a></li>
                            <li><a className='pt-0'>Employer Events</a></li>
                            <li><a className='pt-0'>Client Success Case</a></li>
                            <li><a className='pt-0'>Salary guide</a></li>
                        </ul>
                    </li>
                    <li tabindex="2">
                        <button>
                            Why RecrutHub
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </button>

                        <ul className="p-0 bg-white">
                            <li><a className='pb-2'>Talent Pool</a></li>
                            <li><a className='pt-0'>Employer Events</a></li>
                            <li><a className='pt-0'>Client Success Case</a></li>
                            <li><a className='pt-0'>Salary guide</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="navbar-end mr-5">
                <div className='bg-primary px-3 py-2 rounded flex space-x-1 '>
                    <div className='space-y-1'>
                        <div className='w-2 h-2  bg-white rounded'></div>
                        <div className='w-2 h-2  bg-white rounded'></div>
                    </div>
                    <div className='space-y-1'>
                        <div className='w-2 h-2  bg-white rounded'></div>
                        <div className='w-2 h-2  bg-white rounded'></div>
                    </div>





                </div>
                {/* <span className='bg-primary px-3 py-2 text-white'>
                    <FontAwesomeIcon icon={faGrip} />
                </span> */}
            </div>
        </div>
    );
};

export default Navbar;