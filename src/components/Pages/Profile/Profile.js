
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css'


const Profile = () => {
    const [country, setCoutry] = useState([])


    useEffect(() => {
        fetch('country.json')
            .then(res => res.json())
            .then(data => setCoutry(data?.countries))
    }, [])



    country?.map(c => console.log(c?.name))


    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await console.log(data)
    };

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
                        <div className='mt-12 p-[24px] grid grid-cols-2'>
                            <div className="english-verify">
                                <div className="code-test flex justify-center">
                                    <div className='text-center'>
                                        <img className='w-[45px] mb-[10px] mx-auto' src="https://vanhack.com/static-desktop/1b30c8bf558ff2f6ca321e62b4f1f100.svg" alt="" />
                                        <h1 className='font-bold mb-[10px] test'>English Verification</h1>
                                        <a href="#" className='color-blue-dark'>Start now</a>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <div className='text-center'>
                                    <img className='w-[45px] mx-auto' src="https://vanhack.com/static-desktop/ecb8fa162c6ca3693c69b34b22ffc82d.svg" alt="" />
                                    <h1 className='font-bold test my-[10px]'>Code Test</h1>
                                    <a href="#" className='color-blue-dark'>See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* General */}

                    <div className='w-[732px] mx-auto mt-12'>
                        <div>
                            <h1 className='text-[34px]  color-blue-dark mb-2'>General</h1>
                        </div>
                        <div className=' bg-white  p-6'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <p className='label'>Country</p>

                                    <select className='block w-full profile-form-border p-2 rounded-md' {...register("country")}>
                                        <option selected="selected" value="">Select an option</option>
                                        {
                                            country?.map(c => <option value={c?.name}>{c?.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    <p className='label'>Gender</p>
                                    <select className='block w-full profile-form-border p-2 rounded-md' {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>

                                <div>
                                    <p className='label'>Phone number</p>
                                    <input placeholder='Enter Your Phone Number' className='block w-full profile-form-border p-2 rounded-md' {...register("number")} />

                                </div>
                                <button type='submit' className='btn-primary-vlue mt-4'>Submit</button>
                            </form>
                        </div>


                    </div>

                    {/* professional */}
                    <div className='w-[732px] mx-auto mt-12'>
                        <div>
                            <h1 className='text-[34px]  color-blue-dark mb-2'>General</h1>
                        </div>
                        <div className=' bg-white  p-6'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <p className='label'>Country</p>

                                    <select className='block w-full profile-form-border p-2 rounded-md' {...register("country")}>
                                        <option selected="selected" value="">Select an option</option>
                                        {
                                            country?.map(c => <option value={c?.name}>{c?.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    <p className='label'>Gender</p>
                                    <select className='block w-full profile-form-border p-2 rounded-md' {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>

                                <div>
                                    <p className='label'>Phone number</p>
                                    <input type='number' placeholder='Enter Your Phone Number' className='block w-full profile-form-border p-2 rounded-md' {...register("number")} />

                                    <input className='block w-full profile-form-border p-2 rounded-md'
                                        type="number"
                                        {...register("number")}
                                    />

                                </div>
                                <button type='submit' className='btn-primary-vlue mt-4'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Profile;