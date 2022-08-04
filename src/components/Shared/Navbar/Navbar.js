
import React, { useState } from 'react';
import navLogo from '../../../images/logo.png';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

// react icon import links 
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg, BsTools, BsInfoCircleFill, BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { MdDeveloperMode, MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";

const Navbar = () => {
    const [navSwitch, setNavSwitch] = useState(false);

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
    }

    //navbar active or deActive color style 
    const active = " font-semibold text-violet-600 text-lg flex items-center md:underline"
    const deActive = " font-semibold text-lg flex items-center"

    return (
        <nav className='sticky top-0 left-0 z-50 shadow-2xl bg-gradient-to-r from-[#e6e6ff] to-[#d6fff5] '>
            <div className='container max-w-[1280px] mx-auto relative z-50'>
                <div className='flex justify-between items-center relative'>
                    {/* logo and navbar menu */}
                    <div className='logo flex items-center text-xl font-bold py-3 ml-3'>
                        {/* navbar menu switch */}
                        <div onClick={() => setNavSwitch(!navSwitch)} className='mr-2 text-2xl md:hidden ease-out duration-200 '>
                            {
                                !navSwitch ? <GiHamburgerMenu /> : <BsPlusLg className='rotate-45' />
                            }
                        </div>

                        <img className='w-8 h-8' src={navLogo} alt="Logo" />
                        <span className='ml-1'>RecruitHub</span>

                    </div>

                    {/* routes  */}
                    <div className={`routes absolute md:static left-0 z-10 w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"}`}>

                        <ul className='md:flex md:items-center  bg-gradient-to-r from-[#eaeaff] to-[#e4fff9] md:bg-gradient-to-r md:from-[#eaeaff00] md:to-[#e4fff900] pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                            <li onClick={() => { setNavSwitch(false) }} className='mr-5 mb-4 md:mb-0'> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden text-base mr-2' />Home</NavLink> </li>

                            <li onClick={() => { setNavSwitch(false) }} className='mr-5 mb-4 md:mb-0'> <NavLink to="/service" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden text-base mr-2' /> Services</NavLink> </li>

                            <li onClick={() => { setNavSwitch(false) }} className='mr-5 mb-4 md:mb-0'> <NavLink to="/developer" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden text-base mr-2' /> Developer</NavLink> </li>


                            <li onClick={() => { setNavSwitch(false) }} className='mr-5 mb-4 md:mb-0'> <NavLink to="/contactUs" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Contact US</NavLink> </li>

                            <li onClick={() => { setNavSwitch(false) }} className='mb-4 md:mb-0'> <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? active : deActive)} > <BsInfoCircleFill className='md:hidden text-base mr-2' /> About US</NavLink> </li>


                            {/* profile routes show only mobile and tablet  */}
                            {
                                !user ?
                                    <>
                                        <li className='mb-4 md:mb-0 md:hidden'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} > <RiLoginBoxLine className='md:hidden text-base mr-2' />Login</NavLink> </li>

                                        <li className='mb-4 md:mb-0 md:hidden'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} > <BsFillFileEarmarkMedicalFill className='md:hidden text-base mr-2' />Register</NavLink> </li>
                                    </> :

                                    <li onClick={() => handleSignOut()} className='mb-4 md:mb-0 md:hidden cursor-pointer font-semibold text-lg flex items-center'>  <ImExit className='md:hidden text-base mr-2' />Logout</li>
                            }

                        </ul>

                    </div>

                    {/* profile  */}
                    <div className='profile'>
                        <ul className='flex items-center '>

                            {!user ? <>
                                <li onClick={() => { setNavSwitch(false) }} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} >Login</NavLink> </li>

                                <li onClick={() => { setNavSwitch(false) }} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} >Register</NavLink> </li></> :


                                <FaUserCircle className='text-4xl mr-3' />
                            }

                        </ul>
                    </div>

                    {/* merge */}
                </div>
            </div>
        </nav>



    )
};

export default Navbar;