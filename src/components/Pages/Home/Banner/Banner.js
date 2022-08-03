import React from 'react';
import '../Home/Home.css';
import heroImg from '../../../../images/hero-one-img-2.jpg';
import heroImgLogo from '../../../../images/circle-logo-1.png';


import './Banner.css'

const Banner = () => {
    return (
        <div className='page-banner md:h-[110vh] h-full relative pb-[8rem] pt-[6rem] md:p-0'>
            <div className=' h-full w-[95%] md:w-[75%] mx-auto '>
                <section className='grid grid-cols-1 md:grid-cols-2 gap-2  h-full mx-auto '>
                    <div className='flex justify-center mb-[3rem] md:hidden'>
                        <img src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png" alt="" />
                    </div>
                    <div className=' flex justify-center items-center'>
                        <div>
                            <h1 className="md:text-[75px] text-[40px] leading-[60px] md:leading-[92px] font-bold text-black mb-[35px]">Brand, Design &  Development  Agency</h1>
                            <p className=" para-color text-[18px] mb-[45px] md:pr-[7%]  font-semibold">Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt ut labore et dolore magna aliqua. Quis psum suspendisse ultrices gravida commodo viverra</p>
                            <div>
                                <button className='   btn-primary-vlue text-white'>Start Hiring <i class="fa-solid fa-angle-right ml-[6px]"></i></button>
                                <button className='  btn-primary-vlue text-white ml-[25px]'>Get a job <i class="fa-solid fa-angle-right ml-[6px]"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className='hidden  md:flex justify-center items-center'>
                        <img alt='nai' src={heroImg} className="rounded-[250px] pl-[6rem] relative" />
                        <img src={heroImgLogo} className="absolute bottom-[12rem] right-[37.1rem]" alt="" />
                    </div>
                </section>

                <div>
                    <img className='absolute top-[3rem] left-[2rem] hidden  md:inline-block' src="https://wordpressriverthemes.com/htmltemp/pixlab/assets/images/shape/shape-1.png" alt="" />

                </div>
            </div>


        </div>
    );
};

export default Banner;