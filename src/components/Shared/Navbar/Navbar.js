import React, { useState } from 'react';
import navLogo from '../../../images/logo.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [navbarIconDropdown, setNavbarIconDropdown] = useState(true);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
    }
    return (
        <div className='my-nav'>
            <div className='w-[93%]  mx-auto relative'>
                <div className="navbar   my-border-bottom py-[20px] z-10 sticky top-0   ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>Item 1</li>
                                <li tabindex="0">
                                    <Link to="/" className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2">
                                        <li><Link to="/">Submenu 1</Link></li>
                                        <li><Link to="/">Submenu 2</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Item 3</Link></li>
                            </ul>
                        </div>
                        <Link to="/">
                            <button className='flex font-bold text-2xl'>
                                <img src={navLogo} alt="" />
                                <span className='self-center px-1'>RecruitHub</span>
                            </button>
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal my-ul p-0">
                            <li tabindex="0" >
                                <button className='nav-link'>
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </button>
                                <ul className="p-0 bg-white z-100">
                                    <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
                                    <li><Link to="/" className='pt-0'>Employer Events</Link></li>
                                    <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
                                    <li><Link to="/" className='pt-0'>Salary guide</Link></li>
                                </ul>
                            </li>

                            <li tabindex="1">
                                <button className='nav-link'>

                                    Developer
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </button>

                                <ul className="p-0 bg-white z-100">
                                    <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
                                    <li><Link to="/" className='pt-0'>Employer Events</Link></li>
                                    <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
                                    <li><Link to="/" className='pt-0'>Salary guide</Link></li>
                                </ul>
                            </li>
                            <li tabindex="2">
                                <button className='nav-link'>
                                    Contact US
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </button>

                                <ul className="p-0 bg-white z-100">
                                    <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
                                    <li><Link to="/" className='pt-0'>Employer Events</Link></li>
                                    <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
                                    <li><Link to="/" className='pt-0'>Salary guide</Link></li>
                                </ul>
                            </li>

                            <li tabindex="3">
                                <button className='nav-link'>
                                    About us
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </button>

                                <ul className="p-0 bg-white z-100">
                                    <li><Link to="/" className='pb-2'>Talent Pool</Link></li>
                                    <li><Link to="/" className='pt-0'>Employer Events</Link></li>
                                    <li><Link to="/" className='pt-0'>Client Success Case</Link></li>
                                    <li><Link to="/" className='pt-0'>Salary guide</Link></li>
                                </ul>
                            </li>

                            {/* Route for recruiters only */}
                            <li tabindex="4">
                                <Link to="/postJob" className='nav-link' >Post a Job</Link>
                            </li>
                        </ul>
                    </div>
                    {/*  */}
                    <div onClick={() => setNavbarIconDropdown(!navbarIconDropdown)} className="navbar-end relative">
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
                        <div hidden={navbarIconDropdown} className="absolute bg-white top-10 border border-zinc-300 rounded-lg right-0">
                            <ul className='child:px-5 child:py-1 child:text-xl  '>
                                <li className='hover:bg-primary hover:text-white '><Link to='/profile' className='text-base'>Profile</Link></li>
                                {
                                    user
                                        ?
                                        <li className='hover:bg-primary hover:text-white '><button onClick={() => handleSignOut()} className="text-base">Signout</button></li>
                                        :
                                        <>

                                            <li className='hover:bg-primary hover:text-white '><Link to='/login' className='text-base'>Login</Link></li>
                                            <li className='hover:bg-primary hover:text-white '><Link to='/register ' className='text-base'>Register</Link></li>
                                        </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
};

export default Navbar;
