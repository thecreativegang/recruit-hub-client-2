import React from 'react';
import aboutimg from '../../../../images/about-1.jpg';
import './About.css'
const About = () => {
    return (
        <div className='w-[85%]   bg-[#ffff] py-[10rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center'>
                    <img className='about-img' src={aboutimg} alt="" />
                </div>
                <div className='mt-[3rem] md:m-0'>
                    <h1 className='section-tittle relative color-blue-dark font-semibold inline-block'>About Us</h1>
                    <h1 className='text-[37px] md:text-[55px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold heading-color'>We’re Hiring Agency Since 2020</h1>
                    <p className='text-[22px] font-semibold mb-[20px] color-blue-dark'>Hire The Best developer all over the world</p>
                    <p className='mb-[20px] para-color text-[18px]'>On the other hand denounce with righteous
                        and dislike men who beguile and demoralizes
                        by the charms of pleasure thes moment, so blinded by
                        desire that they cannot</p>

                    <ul className='heading-color font-semibold text-[20px]'>
                        <li className='mb-[15px]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark "></i>Digital Creative Agency</li>
                        <li className='mb-[15px]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark "></i>Professional Problem Solutions</li>
                        <li className='mb-[15px]'><i className="fa-solid mr-[12px] text-[22px] fa-circle-check color-blue-dark "></i>Web Design & Development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;