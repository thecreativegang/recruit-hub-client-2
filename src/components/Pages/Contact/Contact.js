import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const handelSubmitFrom = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_6mzq55e', 'template_ahh4rmj', form.current, 'G4pUWrkcEvylNHp85')
            .then((result) => {
                console.log(result.text);
                console.log('successfull');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <div class="hero min-h-screen bg-[#ffff] dark:bg-[#0F172A]"
            >
                <div class="hero-content flex-col lg:flex-row">

                    <div class="text-center lg:text-left  dark:text-[#8C9BB6] text-[#1C2880]">
                        <h1 class="text-5xl font-bold">Lets talk !!</h1>
                        <p class="py-6   dark:text-[#3878DF] text-[#8C9BB6]">
                            If you have any other request or question, dont't hesitate to contact me using this form.
                            .</p>
                    </div>

                    <div class="card flex-shrink-0 lg:w-1/2 w-full  shadow-2xl bg-base-300"
                        style={{
                            backgroundImage: `url("https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys=")`,
                            opacity: 0.9
                        }}>
                        <form ref={form} onSubmit={handelSubmitFrom}>
                            <div class="card-body w-full">

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Your name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='user_email' placeholder="Your email" class="input input-bordered" required />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Subject</span>
                                    </label>
                                    <input type="text" name='user_subject' placeholder="Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Message</span>
                                    </label>
                                    <textarea name='message' placeholder="Your message...." class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary"><input type="submit" value='Send' /></button>
                                </div>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Contact;