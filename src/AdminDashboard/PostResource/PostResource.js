import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import { UserStore } from '../../stateManagement/UserContext/UserContextStore';

const PostResource = () => {
    const userStore = useContext(UserStore);
    const currentUser = userStore.user;


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data, e) => {

        await axios.post(`http://localhost:3001/resource/post`, data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (res) {
                if (res?.data?.updateCount === '1') {
                    toast.success('Post database successfully')
                }

                else {
                    console.log('Failed to post data')
                }
            })

        e.target.reset();
    }

    return (
        <div>
            <div class="min-h-screen bg-sky-100">
                <div class="lg:w-[40%]  mx-auto flex-col lg:flex-row-reverse">
                    <div class="text-center py-3 lg:py-6">
                        <h1 class="text-5xl font-bold">Post a resource!</h1>
                    </div>
                    <div class="card w-[100%] shadow-2xl bg-base-100">
                        <div class="card-body w-[100%]">
                            {/* post review form start here */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-bold">Your Email</span>
                                    </label>
                                    <input type="text" placeholder={currentUser?.email}
                                        class="input input-bordered  font-bold"
                                        disabled
                                        {...register("email")} />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-bold">Youtube Link</span>
                                    </label>
                                    <input type="text" placeholder="Enter Link" class="input input-bordered" {...register("link", { required: true })} />

                                    {errors.link && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-bold">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Enter Subject" class="input input-bordered" {...register("subject", { required: true })} />

                                    {errors.subject && <span className='text-red-500'>Please provide subject, its  required</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-bold">Topic</span>
                                    </label>
                                    <input type="text" placeholder="Enter topic name" class="input input-bordered" {...register("topic", { required: true })} />

                                    {errors.topic && <span className='text-red-500'>Please provide topic name,its required</span>}
                                </div>


                                <div class="form-control mt-6">
                                    <button type="submit" class="btn btn-primary btn-sky-500 " >upload</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostResource;