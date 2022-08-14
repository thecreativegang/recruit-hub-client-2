
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
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';

const Navbar = () => {


    const [navSwitch, setNavSwitch] = useState(false);
    const [userSwitch, setUserSwitch] = useState(false);

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
        // closed user information menu bar
        setUserSwitch(false)
    }

    //user information
    const userStore = useContext(UserStore)?.user;

    const closedNavbarAll = () => {
        setUserSwitch(false) //main navbar
        setNavSwitch(false)  // user information navbar
    }

    //navbar active or deActive color style 
    const active = " font-semibold text-violet-600 text-lg flex items-center md:underline"
    const deActive = " font-semibold text-lg flex items-center"

    return (
        <nav className='sticky py-4 top-0 left-0 z-50 shadow-2xl bg-gradient-to-r from-[#e6e6ff] to-[#d6fff5] '>
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

                        <Link to='/'>
                            <img className='w-8 h-8' src={navLogo} alt="Logo" />
                        </Link>
                        <Link to='/'>
                            <span className='ml-1'>RecruitHub</span>
                        </Link>

                    </div>

                    {/* routes  */}
                    <div className={`routes absolute md:static left-0 z-10 w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"}`}>

                        <ul className='md:flex md:items-center  bg-gradient-to-r from-[#eaeaff] to-[#e4fff9] md:bg-gradient-to-r md:from-[#eaeaff00] md:to-[#e4fff900] pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                            {
                                userStore?.accountType === 'recruiter' &&
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/findJob" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Find Job</NavLink> </li>
                            }
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden text-base mr-2' />Home</NavLink> </li>

                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/service" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden text-base mr-2' /> Services</NavLink> </li>

                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/developer" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden text-base mr-2' /> Developer</NavLink> </li>

                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/contactUs" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Contact US</NavLink> </li>
                            {
                                userStore?.accountType === 'recruiter' &&
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/postJob" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Post Job</NavLink> </li>
                            }
                            <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0'> <NavLink to="/chat" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Chat</NavLink> </li>

                            <li onClick={closedNavbarAll} className='mb-4 md:mb-0'> <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? active : deActive)} > <BsInfoCircleFill className='md:hidden text-base mr-2' /> About US</NavLink> </li>



                            {/* profile routes show only mobile and tablet  */}
                            {!user ?
                                <>
                                    <li onClick={closedNavbarAll} className='mb-4 md:mb-0 md:hidden'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} > <RiLoginBoxLine className='md:hidden text-base mr-2' />Login</NavLink> </li>

                                    <li onClick={closedNavbarAll} className='mb-4 md:mb-0 md:hidden'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} > <BsFillFileEarmarkMedicalFill className='md:hidden text-base mr-2' />Register</NavLink> </li>
                                </> :

                                <li onClick={() => handleSignOut()} className='mb-4 md:mb-0 md:hidden cursor-pointer font-semibold text-lg flex items-center'>  <ImExit className='md:hidden text-base mr-2' />Logout</li>
                            }
                        </ul>
                    </div>

                    {/* profile  */}
                    <div className='profile'>
                        <ul className='flex items-center '>

                            {!user ? <>
                                <li onClick={closedNavbarAll} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/login" className={({ isActive }) => (isActive ? active : deActive)} >Login</NavLink> </li>

                                <li onClick={closedNavbarAll} className='mr-4 mb-4 md:mb-0 hidden md:block'> <NavLink to="/register" className={({ isActive }) => (isActive ? active : deActive)} >Register</NavLink> </li></> :

                                // user
                                <>
                                    {/* user photo  */}
                                    <div className='relative'>
                                        <FaUserCircle onClick={() => setUserSwitch(!userSwitch)} className='text-4xl mr-3 cursor-pointer' />
                                    </div>

                                    {/* user details  */}
                                    <div className={`${userSwitch ? "top-[3.5rem]" : "top-[-20rem]"} z-20 absolute right-0 min-w-[22rem]  bg-gradient-to-t from-[#e6e6ff] to-[#d7fbf1]  p-5 rounded-b-xl duration-300 ease-out `}>
                                        <div className='text-center'>
                                            <h6 className='text-lg md:text-xl font-[600] mb-1 md:mb-1'>Tanvir Ahmed</h6>
                                            <h6 className='text-xs md:text-base font-[500] mb-1 md:mb-1'>@tanvir123</h6>
                                            <h6 className='text-xs md:text-base font-[500] mb-1 md:mb-1'>DE-4562415</h6>
                                        </div>


                                        {/* routes  */}
                                        <ul>
                                            <li onClick={closedNavbarAll} className='mb-4'> <NavLink to="/profile" className={({ isActive }) => (isActive ? active : deActive)} > <CgProfile className=' text-base md:text-xl mr-2' />Profile</NavLink> </li>

                                            <li onClick={() => handleSignOut()} className='mb-4 cursor-pointer font-semibold text-lg flex items-center'> <ImExit className=' text-base md:text-xl mr-2' />Logout</li>

                                        </ul>

                                    </div>


                                </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </nav>



    )
};

export default Navbar;