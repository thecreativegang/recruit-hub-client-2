import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const AccountTypePage = () => {
    const [accTypeDev, setAccTypeDev] = useState(false);
    const [selectedOptionDev, setSelectedOptionDev] = useState('');
    const [selectedOptionRecruiter, setSelectedOptionRecruiter] = useState('');

    const handleBgColor = (type) => {
        if (type === 'developer') {
            setSelectedOptionDev('bg-primary text-white')
            setSelectedOptionRecruiter('')
        }
        else if (type === 'recruiter') {
            setSelectedOptionDev('')
            setSelectedOptionRecruiter('bg-primary text-white')
        }




    }
    return (
        <div className='h-[100vh] '>
            <div className='flex justify-center  justify-items-center mt-20'>
                <div class="card w-1/5 bg-base-100 shadow-xl h-fit">

                    <div class="card-body ">
                        <h2 class="card-title text-2xl text-center font-bold">Are you a Developer? or Recruiter</h2>
                        <div className='flex flex-col gap-5 mt-10'>
                            <div onClick={() => handleBgColor('developer')} className={`border-2 border-zinc-400 p-2 text-xl text-center rounded-lg ${selectedOptionDev} cursor-pointer`}>
                                <p>Join As a Developer</p>
                            </div>
                            <div onClick={() => handleBgColor('recruiter')} className={`border-2 border-zinc-400 p-2 rounded-lg ${selectedOptionRecruiter} text-xl text-center  cursor-pointer`}>
                                <p>Join As a Recruiter</p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button className='btn-primary btn w-full text-white'>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountTypePage;