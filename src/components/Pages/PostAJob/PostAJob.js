import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserStore, UserStoreProvider } from '../../../stateManagement/UserContext/UserContextStore';
import { useContext } from 'react';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';
import { MdLocalHospital } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { checkTokenExpired } from './../../../utilities/checkTokenExpired';
import { serverLink } from './../../../utilities/links';

const PostAJob = () => {
    const navigate = useNavigate()
    //This function will be used to generate day , month, year digit 
    const generateDigit = (start, limit) => {
        const digits = []
        for (let i = start; i <= limit; i++) {
            digits.push(i)
        }
        return digits;
    }

    //This object will be used to reset the form by this given value.
    const resetForm = {
        recruitersName: "",
        jobTitle: "",
        companyName: "",
        companySize: "",
        vacancies: "",
        jobNature: "",
        educationalQualification: "",
        jobRequirements: "",
        tags: "",
        deadlineDay: "",
        deadlineMonth: "",
        deadlineYear: "",

    }
    // const [selected, setSelected] = useState(format(new Date(), 'PP'));
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data)
        axios.post(`${serverLink}/job/postJob`, data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                // console.log(res.response.statusText)

                if (res?.data?.status === 200) {
                    toast.success("Job posted successfully!")
                    // reset(resetForm)
                }
            })
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })
    }
    // const userInfo = useSelector((state) => state);
    // let footer = <p className='font-semibold'>You've picked:  {format(selected, 'PP')}</p>
    return (
        <div className='flex justify-center mt-10 mb-16 '>
            <div class="card md:w-1/3 w-full  shadow-xl bg-white">
                <div class="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="min-h-[100vh]">
                        <h1 className='text-3xl text-center font-semibold text-black'>Post a Job</h1>
                        <div className='w-full'>
                            <div class="form-control w-full ">

                                {/* Info about Job */}
                                <h3 className='text-md border-b border-zinc-500 mt-10 text-black'>Job information</h3>
                                {/* First row */}
                                <div className='w-full'>
                                    <label class="label">
                                        <span class="label-text text-black">Job title</span>
                                    </label>
                                    <input type="text" placeholder="Job title" class="input border border-zinc-400 w-full bg-white  text-black" {...register('jobTitle',
                                        {
                                            required: true
                                        })} />
                                </div>

                                {/* second row */}
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 lg:mt-0'>
                                    <div>
                                        <label class="label">
                                            <span class="label-text text-black">Company Name</span>
                                        </label>
                                        <input type="text" placeholder="Type your company name" class="text-black input border border-zinc-400 w-full bg-white" {...register('companyName',
                                            {
                                                required: true
                                            })} />
                                    </div>
                                    <div>
                                        <label class="label">
                                            <span class="label-text text-black">Company Size</span>
                                        </label>
                                        <select name="CompanySize" id="companySize" className='border border-zinc-400 w-full p-3 rounded-lg text-black'{...register('companySize',
                                            {
                                                required: true
                                            })}>
                                            <option value="">Select an Option</option>
                                            <option value="1-10" >1-10</option>
                                            <option value="1-50" >1-50</option>
                                            <option value="1-100" >1-100</option>
                                            <option value="200+" >200+</option>
                                            <option value="500+" >500+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* third row */}
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 lg:mt-0'>
                                    <div>
                                        <label class="label">
                                            <span class="label-text text-black">Vacancies</span>
                                        </label>
                                        <input type="number" placeholder="Vacancies for this post" class="input border border-zinc-400 w-full text-black bg-white" {...register('vacancies',
                                            {
                                                required: true
                                            })} />
                                    </div>
                                    <div>
                                        <label class="label">
                                            <span class="label-text text-black">Job Nature</span>
                                        </label>
                                        <select name="CompanySize" id="companySize" className='text-black border border-zinc-400 w-full p-3 rounded-lg bg-white'{...register('jobNature',
                                            {
                                                required: true
                                            })}>
                                            <option value="">Select an Option</option>
                                            <option value="on-site" className='capitalize' >on-site</option>
                                            <option value="remote" className='capitalize'>remote</option>
                                            <option value="hybrid" className='capitalize'>hybrid</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Educational Qualifications */}
                                <div className='w-full'>
                                    <label class="label">
                                        <span class="label-text text-black">Educational Qualifications</span>
                                    </label>
                                    <input type="text" placeholder="Educational Qualification" class="text-black input border border-zinc-400 w-full bg-white " {...register('educationalQualification',
                                        {
                                            required: true
                                        })} />
                                </div>
                                {/* Job Requirements */}
                                <div className='w-full'>
                                    <label class="label">
                                        <span class="label-text text-black">Job Requirements</span>
                                    </label>
                                    <textarea type="text" placeholder="Job Requirements" className="text-black h-[40vh] input border border-zinc-400 w-full bg-white" {...register('jobRequirements',
                                        {
                                            required: true
                                        })} />
                                </div>

                                {/* Tags */}
                                <div className='w-full'>
                                    <label class="label">
                                        <span class="label-text text-black">Enter tags</span>
                                    </label>
                                    <textarea type="text" placeholder="text-black Seperate by space. eg: frontend react" className="text-black lowercase input border border-zinc-400 w-full bg-white" {...register('tags',
                                        {
                                            required: true
                                        })} />
                                </div>


                                {/* pay range and job location */}
                                <div className='flex gap-2'>
                                    {/* Pay Range */}
                                    <div className='w-full'>
                                        <label class="label">
                                            <span class="label-text text-black">Pay Range</span>
                                        </label>
                                        <select name="payRangeRef" id="payRangeRef" className='text-black border border-black p-3 rounded-lg w-full bg-zinc-100' {...register('payRange')}>
                                            <option value="" >Pay Range</option>
                                            <option value="50+" >$-50+</option>
                                            <option value="100+" >$-100+</option>
                                            <option value="150+" >$-150+</option>
                                            <option value="200+" >$-200+</option>
                                            <option value="300+" >$-300+</option>
                                            <option value="300+" >$-500+</option>
                                            <option value="1000+" >$-1000+</option>
                                        </select>
                                    </div>

                                    {/* Job location */}
                                    <div className='w-full'>
                                        <label class="label">
                                            <span class="label-text text-black">Job Location</span>
                                        </label>
                                        <input type="text" placeholder="Enter location of the job" className="text-black input border border-zinc-400 w-full bg-white" {...register('jobLocation',
                                            {
                                                required: true
                                            })} />
                                    </div>

                                </div>
                                {/* Application Deadline */}
                                <div className='w-full'>
                                    <label class="label">
                                        <span class="label-text text-black">What's the Deadline to Apply?</span>
                                    </label>
                                    <div className='grid grid-cols-3 gap-3 '>
                                        {/* <DayPicker
                                            mode="single"
                                            selected={selected}
                                            onSelect={setSelected}
                                            footer={footer}
                                        /> */}
                                        <div>
                                            <select name="date" id="selectDate" className='border border-zinc-400 p-3 rounded-lg w-full text-black'{...register('deadlineDay', {
                                                required: true
                                            })}>
                                                <option value="">Select Date</option>
                                                {

                                                    generateDigit(1, 31)?.map(digit => <option className={`text-black`} value={digit}>{digit}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <select name="date" id="selectDate" className='border border-zinc-400 p-3 rounded-lg w-full text-black'{...register('deadlineMonth', {
                                                required: true
                                            })}>
                                                <option value="">Select Month</option>
                                                {

                                                    generateDigit(1, 12)?.map(digit => <option value={digit}>{digit}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <select name="date" id="selectDate" className='border border-zinc-400 p-3 rounded-lg w-full text-black'{...register('deadlineYear', {
                                                required: true
                                            })}>
                                                <option value="">Select Year</option>
                                                {

                                                    generateDigit(2022, 2025)?.map(digit => <option value={digit}>{digit}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                {/* Info about Recruiter */}
                                <h3 className='text-md border-b border-zinc-500 mt-10 text-black'>Recruiter Information information</h3>

                                {/* Recruiter Name */}
                                <div className='w-full mt-3'>
                                    <label class="label">
                                        <span class="label-text text-black">Recruiter's Name</span>
                                    </label>
                                    <input type="text" placeholder="Recruiter's Name" class="input border border-zinc-400 w-full text-black bg-white" {...register('recruitersName',
                                        {
                                            required: true
                                        })} />
                                </div>
                            </div>
                        </div>
                        <div class="card-actions justify-end mt-6">
                            <button class="btn btn-primary w-full text-white">POST JOB</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >
    );
};

export default PostAJob;

