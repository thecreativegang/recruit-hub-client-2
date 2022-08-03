import React, { useState } from 'react';
import navLogo from '../../../images/logo.png';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg, BsTools, BsInfoCircleFill } from "react-icons/bs";
import { MdDeveloperMode, MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
    const [navSwitch, setNavSwitch] = useState(false);

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
    }

    //navbar active or deActive color style 
    const active = " font-semibold text-violet-700 text-lg flex items-center md:underline"
    const deActive = " font-semibold text-lg flex items-center"

    return (
        <nav className='sticky top-0 left-0 z-50 shadow-2xl bg-gradient-to-r from-[#e6e6ff] to-[#d6fff5] '>
            <div className='container max-w-[1280px] mx-auto relative z-50 '>
                <div className='flex justify-between items-center relative'>
                    {/* logo and navbar menu */}
                    <div className='logo flex items-center text-2xl font-bold py-3 ml-3'>
                        {/* navbar menu  */}
                        <div onClick={() => setNavSwitch(!navSwitch)} className='mr-2 text-2xl md:hidden ease-out duration-200 '>
                            {
                                !navSwitch ? <GiHamburgerMenu /> : <BsPlusLg className='rotate-45' />
                            }

                        </div>
                        <img className='w-8 md:w-10 h-8 md:h-10' src={navLogo} alt="Logo" />
                        <span className='ml-1'>RecruitHub</span>
                    </div>

                    {/* routes  */}
                    <div className={`routes absolute md:static left-0 z-10 w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"}`}>

                        <ul className='md:flex md:items-center  bg-gradient-to-r from-[#eaeaff] to-[#e4fff9] md:bg-gradient-to-r md:from-[#eaeaff00] md:to-[#e4fff900] pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                            <li className='mr-8 mb-4 md:mb-0'> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden text-base mr-2' />Home</NavLink> </li>

                            <li className='mr-8 mb-4 md:mb-0'> <NavLink to="/service" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden text-base mr-2' /> Services</NavLink> </li>

                            <li className='mr-8 mb-4 md:mb-0'> <NavLink to="/developer" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden text-base mr-2' /> Developer</NavLink> </li>


                            <li className='mr-8 mb-4 md:mb-0'> <NavLink to="/contactUs" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Contact US</NavLink> </li>

                            <li className='mr-8 mb-4 md:mb-0'> <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? active : deActive)} > <BsInfoCircleFill className='md:hidden text-base mr-2' /> About US</NavLink> </li>
                        </ul>

                    </div>

                    {/* profile  */}
                    <div className='profile'>
                        <ul className='flex items-center'>
                            <li className='mr-5 text-lg font-semibold'>Login</li>
                            <li className='mr-5 text-lg font-semibold'>Sing In</li>
                            <FaUserCircle className='text-4xl mr-3 hidden' />
                        </ul>
                    </div>



                    {/* merge */}
                </div>
            </div>
        </nav>





































        // <div className='my-nav'>
        //     <div className='w-[93%]  mx-auto relative'>
        //         <div className="navbar   my-border-bottom py-[20px] z-10 sticky top-0   ">
        //             <div className="navbar-start">
        //                 <div className="dropdown">
        //                     <label tabindex="0" className="btn btn-ghost lg:hidden">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                     </label>
        //                     <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                         <li>Item 1</li>
        //                         <li tabindex="0">
        //                             <Link to="/" className="justify-between">
        //                                 Parent
        //                                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        //                             </Link>
        //                             <ul className="p-2">
        //                                 <li><Link to="/">Submenu 1</Link></li>
        //                                 <li><Link to="/">Submenu 2</Link></li>
        //                             </ul>
        //                         </li>
        //                         <li><Link to="/">Item 3</Link></li>
        //                     </ul>
        //                 </div>
        //                 <button className='flex font-bold text-2xl'>
        //                     <img src={navLogo} alt="" />
        //                     <span className='self-center px-1'>RecruitHub</span>
        //                 </button>
        //             </div>



        //             <div className="navbar-center hidden lg:flex">
        //                 <ul className="menu menu-horizontal my-ul p-0">
        //                     <li tabindex="0" >
        //                         <button className='nav-link'>
        //                             Services
        //                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        //                                 <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        //                             </svg>
        //                         </button>
        //                         <ul className="p-0 bg-white z-100">
        //                             <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
        //                             <li><Link to="/" className='pt-0'>Employer Events</Link></li>
        //                             <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
        //                             <li><Link to="/" className='pt-0'>Salary guide</Link></li>
        //                         </ul>
        //                     </li>

        //                     <li tabindex="1">
        //                         <button className='nav-link'>

        //                             Developer
        //                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        //                                 <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        //                             </svg>
        //                         </button>

        //                         <ul className="p-0 bg-white z-100">
        //                             <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
        //                             <li><Link to="/" className='pt-0'>Employer Events</Link></li>
        //                             <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
        //                             <li><Link to="/" className='pt-0'>Salary guide</Link></li>
        //                         </ul>
        //                     </li>
        //                     <li tabindex="2">
        //                         <button className='nav-link'>
        //                             Contact US
        //                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        //                                 <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        //                             </svg>
        //                         </button>

        //                         <ul className="p-0 bg-white z-100">
        //                             <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
        //                             <li><Link to="/" className='pt-0'>Employer Events</Link></li>
        //                             <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
        //                             <li><Link to="/" className='pt-0'>Salary guide</Link></li>
        //                         </ul>
        //                     </li>

        //                     <li tabindex="3">
        //                         <button className='nav-link'>
        //                             About us
        //                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        //                                 <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        //                             </svg>
        //                         </button>

        //                         <ul className="p-0 bg-white z-100">
        //                             <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
        //                             <li><Link to="/" className='pt-0'>Employer Events</Link></li>
        //                             <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
        //                             <li><Link to="/" className='pt-0'>Salary guide</Link></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </div>
        //             {/*  */}
        //             <div onClick={() => setNavbarIconDropdown(!navbarIconDropdown)} className="navbar-end relative">
        //                 <div className='bg-primary px-3 py-2 rounded flex space-x-1 '>
        //                     <div className='space-y-1'>
        //                         <div className='w-2 h-2  bg-white rounded'></div>
        //                         <div className='w-2 h-2  bg-white rounded'></div>
        //                     </div>
        //                     <div className='space-y-1'>
        //                         <div className='w-2 h-2  bg-white rounded'></div>
        //                         <div className='w-2 h-2  bg-white rounded'></div>
        //                     </div>
        //                 </div>
        //                 <div hidden={navbarIconDropdown} className="absolute bg-white top-10 border border-zinc-300 rounded-lg right-0">
        //                     <ul className='child:px-5 child:py-1 child:text-xl  '>
        //                         <li className='hover:bg-primary hover:text-white '><Link to='/profile' className='text-base'>Profile</Link></li>
        //                         {
        //                             user
        //                                 ?
        //                                 <li className='hover:bg-primary hover:text-white '><button onClick={() => handleSignOut()} className="text-base">Signout</button></li>
        //                                 :
        //                                 <>

        //                                     <li className='hover:bg-primary hover:text-white '><Link to='/login' className='text-base'>Login</Link></li>
        //                                     <li className='hover:bg-primary hover:text-white '><Link to='/register ' className='text-base'>Register</Link></li>
        //                                 </>}
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>



    )
};

export default Navbar;
