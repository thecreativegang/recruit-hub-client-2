import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className='pb-16  '>
            <div className='flex justify-center '>
                <div className='text-center'>
                    <h1 className='section-tittle relative color-blue-dark font-semibold inline-block'>Service</h1>
                    <h1 className='text-[37px] md:text-[55px] leading-[45px]  md:leading-[60px] mb-[15px] font-semibold heading-color'>Creative Design Solutions</h1>
                    <p className='mb-[20px] para-color text-[22px] font-semibold'>Professional Design Agency to provide solutions</p>
                </div>
            </div>

            <div className='md:w-[80%] w-[95%] mx-auto mt-8'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    <div className='service-item'>
                        <i className="fa-solid mb-[15px] fa-code-compare text-[75px] color-blue-dark"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px]'>Strategy</h1>
                            <ul className='text-[18px] mb-4'>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Management</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>MVP Definition</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Strategy</li>
                            </ul>
                            <a className='color-blue-dark font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className='service-item'>
                        <i className="fa-solid mb-[15px] fa-database text-[75px] color-blue-dark"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px]'>Product Design</h1>
                            <ul className='text-[18px] mb-4'>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Management</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>MVP Definition</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Strategy</li>
                            </ul>
                            <a className='color-blue-dark font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className='service-item'>
                        <i className="fa-solid mb-[15px] fa-code text-[75px] color-blue-dark"></i>
                        <div>
                            <h1 className='text-[24px] heading-color font-semibold mb-[15px]'>Development</h1>
                            <ul className='text-[18px] mb-4'>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Management</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>MVP Definition</li>
                                <li><i className="fa-solid mr-[12px] fa-arrow-right"></i>Product Strategy</li>
                            </ul>
                            <a className='color-blue-dark font-bold text-[18px] underline' href="#">Read More <i className="fa-solid ml-[6px] fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;