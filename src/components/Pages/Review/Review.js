import React, { useEffect, useRef } from "react";
import './Review.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-web';
import data from './53395-login.json'



const Review = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const anime = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });
        // More logic goes here
    }, []);

    return (

        <div className=' page-bg'>
            <div className='py-24'>
                <div className='w-1/2 mx-auto p-12 bg-white review-shadow'>
                    <div className=' flex justify-center '>
                        <h1 className='section-tittle relative color-blue-dark font-semibold inline-block  text-center'>Review</h1>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user?.displayName} className='review-input mb-4' {...register("firstName")} />
                        <input placeholder='Your Review 1 to 5' required min={1} max={5} type='number' className='review-input mb-4' {...register("rating")} />
                        <textarea required="" name="" id="" class="review-textarea mb-4 h-[150px] w-[100%]" placeholder="Tell Me about Us Freely " spellcheck="false" autocomplete="off" {...register("review-text")}></textarea>
                        <input className='bg-blue-dark py-[13px] px-[35px] font-semibold cursor-pointer text-white' type="submit" />
                    </form>



                    {/* <div className="overflow-hidden" style={{ height: 250, width: 300 }} ref={anime}></div>; */}
                </div>
            </div>

        </div>
    );
};

export default Review;