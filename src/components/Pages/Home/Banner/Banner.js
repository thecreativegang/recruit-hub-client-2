import React from 'react';
import '../Home/Home.css';
import heroImg from '../../../../images/hero-one-img-2.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div className='page-banner relative'>
            <div className=' h-full w-[75%] mx-auto  '>
                <section className='grid grid-cols-2 gap-2  h-full mx-auto '>
                    <div className=' flex justify-center items-center'>
                        <div>
                            <h1 className="text-[75px] leading-[80px] font-bold text-black mb-[35px]">Brand, Design &  Development <br /> Agency</h1>
                            <p className=" para-color text-[18px] mb-[45px] pr-[30%] font-semibold">Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt ut labore et dolore magna aliqua. Quis psum suspendisse ultrices gravida commodo viverra</p>
                            <div>
                                <button className='   btn-primary-vlue text-white'>Start Hiring <i class="fa-solid fa-angle-right ml-[6px]"></i></button>
                                <button className='  btn-primary-vlue text-white ml-[25px]'>Get a job <i class="fa-solid fa-angle-right ml-[6px]"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={heroImg} className="rounded-[250px] pl-[4rem]" />
                    </div>
                </section>

                <img className='absolute top-[3rem] left-[2rem]' src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png" alt="" />

            </div>


        </div>
    );
};

export default Banner;