import React from 'react';
import '../Home/Home.css';
import heroImg from '../../../../images/hero-one-img-2.jpg'
import bannerDot from '../../../../images/shape-1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-banner-v1  my-container'>
            <section className='grid lg:grid-cols-2 justify-items-center content-end lg:px-[5rem] mx-auto pt-[3rem] items-center'>
                <div className='lg:py-[4rem] '>
                    {/* <img src={bannerDot} alt="" /> */}
                    <h1 className="lg:text-6xl text-4xl font-bold">Brand, Design & Development Agency</h1>
                    <p className="py-[2rem] lg:text-xl lg:pr-[7rem]">Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt ut labore et dolore magna aliqua. Quis psum suspendisse ultrices gravida commodo viverra</p>
                    <div>
                        <button className='  btn btn-primary text-white mx-2'>Start Hiring</button>
                        <button className='  btn btn-primary text-white'>Get a job</button>
                    </div>
                </div>
                <div className='justify-center hidden lg:block'>
                    <img src={heroImg} className="rounded-[250px]" alt="" />
                </div>
            </section>

        </div>
    );
};

export default Banner;