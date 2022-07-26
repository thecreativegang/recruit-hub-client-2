import React from 'react';
import './Home.css';
import heroImg from '../../Image/hero-one-img-2.jpg'

const Banner = () => {
    return (
        <div className='hero-banner-v1  my-container'>
            <section className='grid lg:grid-cols-2 justify-items-center content-end px-[5rem] mx-auto pt-[3rem]'>

                <div className='py-[5rem]'>

                    <h1 className="text-6xl font-bold">Brand, Design & Development Agency</h1>
                    <p className="py-[2rem] text-xl pr-[7rem]">Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt ut labore et dolore magna aliqua. Quis psum suspendisse ultrices gravida commodo viverra</p>
                    <div>
                        <button className='btn btn-primary mx-2'>Start Hiring</button>
                        <button className='btn btn-primary'>Get a job</button>
                    </div>
                </div>
                <div className='justify-center'>
                    <img src={heroImg} className="rounded-[250px]" />
                </div>
            </section>

        </div>
    );
};

export default Banner;