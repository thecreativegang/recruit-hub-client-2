import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import PasswordStrengthBar from 'react-password-strength-bar';
import makeId from './SuggestPass';
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading';
import useToken from './../../../hooks/useToken';
import { sendEmailVerification } from 'firebase/auth';
import axios from 'axios';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import googleLogo from '../../../images/google.png';

import AccountTypePage from './AccountTypePage';


const Register = () => {

    const accType = localStorage.getItem('accountType')
    const [globalUser] = useAuthState(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [passwordBar, setPasswordBar] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationerror] = useSendEmailVerification(auth);
    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [showAccType, setShowAccType] = useState(false);
    const [username, setUsername] = useState('');
    let currentUser;

    //Token
    const onSubmit = async (data) => {
        if (data.password === data.confirmPassword) {
            setUsername(data.username);
            await sendEmailVerification(); // Send Verification Email
            const displayName = data.name;
            const email = data.email;
            const password = data.password;
            await createUserWithEmailAndPassword(email, password);  // create user
            await updateProfile({ displayName }) //Update Display Name
        }
        else {

        }
    };
    if (globalUser) {
        currentUser = {
            email: globalUser?.email,
            username: username,
            accountType: localStorage.getItem('accountType')
        }
    }
    const token = useToken(currentUser)
    // useEffect(() => {
    //     if (token) {

    //         // navigate('/');
    //         //Uncomment Below Section to send email on new user creation

    //         // <SendEmail
    //         //     user={primaryUser}
    //         //     subject={"Account Registration"}
    //         //     text={"You account has been successfully registered in Nissan Parts. Thank you."}
    //         // ></SendEmail>
    //     }
    // }, [token, navigate])

    if (error) {
        console.log(error);
    }
    if (updating || loading || sending || gLoading) {
        return <Loading />
    }
    const handleUserNameValidation = async (username) => {
        username !== ''
            ?
            await axios.post(`http://localhost:3001/user/check-username/${username}`)
                .then(data => {
                    if ((data.data.isAvailable)) {
                        setUsernameAvailable(true)
                    }
                    else {
                        setUsernameAvailable(false)
                    }
                })
                .then(function (error) {
                    toast.error((error?.message))
                })
            :
            setUsernameAvailable(null)
    }
    const handleGoogleSignIn = () => {
        setShowAccType(true)

        const accountType = localStorage.getItem('accountType')
        if (accountType.length > 0) {
            signInWithGoogle()
        }



    }


    return (
        <div>
            <div className=" flex justify-center items-center pt-20 my-10">
                <div className=" md:w-1/4 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <h1 className='text-4xl font-bold text-center mb-10 '><span className='capitalize'>{accType}</span> Registration</h1>

                                {/* userName of user  */}
                                <div className="form-control mb-">
                                    <label className="label">
                                        <span className="label-text text-xl">Choose a username</span>
                                    </label>
                                    <input
                                        onBlur={(e) => handleUserNameValidation(e.target.value)}
                                        onKeyUp={(e) => handleUserNameValidation(e.target.value)}
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered text-xl lowercase"
                                        {...register("username",
                                            { required: true })} />
                                    {
                                        usernameAvailable === true
                                        &&
                                        <p className='text-green-500'>Username is available</p>
                                    }
                                    {
                                        usernameAvailable === false
                                        &&
                                        <p className='text-red-500'>Username is taken! Try another</p>
                                    }
                                </div>

                                {/* Name of user  */}
                                <div className="form-control mb-">
                                    <label className="label">
                                        <span className="label-text text-xl">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered text-xl"
                                        {...register("name",
                                            { required: true })} />
                                </div>
                                <div className="form-control mb-">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="input input-bordered text-xl"
                                        {...register("email",
                                            { required: true })} />
                                </div>

                                <div className="form-control">
                                    {/* Password */}
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="hidden input input-bordered text-xl"
                                    />
                                    <input
                                        value={passwordBar}
                                        type={showPassword ? "text" : "password"} placeholder="Input Password"
                                        name='password'
                                        className="  input input-bordered text-xl"
                                        {...register("password",
                                            {
                                                required: true,
                                                // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                            })}
                                        onChange={(e) => setPasswordBar(e.target.value)}
                                    />

                                    {/*Confirm Password */}
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="hidden input input-bordered text-xl"
                                    />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm Password" name='password'
                                        className="  input input-bordered text-xl"
                                        {...register("confirmPassword",
                                            {
                                                required: true,
                                                // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                            })}
                                        onChange={(e) => setPasswordBar(e.target.value)}
                                    />

                                    <div className='text-md flex  justify-between my-2  md:items-center xs:flex-col-reverse'>
                                        <div >
                                            <button className='border border-zinc-400 px-2 py-1 hover:bg-primary  rounded-lg text-black font-bold xs:w-full' onClick={() => setPasswordBar(makeId(10))}>Suggest a Strong Password</button>
                                        </div>
                                        <div className='text-xl flex justify-end'>
                                            <div className="form-control ">
                                                <label className="label cursor-pointer  ">
                                                    <div className='flex justify-around gap-2 items-center '>
                                                        <p className="label-text text-lg">Show Password</p>
                                                        <input onChange={() => setShowPassword(!showPassword)} type="checkbox" checked={showPassword} className="checkbox" />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <PasswordStrengthBar password={passwordBar} />

                                    <label className="label">
                                        {errors.password?.type == "pattern" && <span className="label-text-alt text-red-500 text-lg">Password must be atleast 6 characters containing both capital and small letter, a Number, 1 special character</span>}
                                        {errors?.password?.type === 'required' && <span className="label-text-alt text-red-500 text-lg">Password is Required</span>}
                                    </label>

                                    <label>
                                        <Link to="/login" className=" pointer hover:text-primary font-semibold text-xl">Already have an account? Login
                                        </Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        loading
                                            ?
                                            <button className="  btn btn-primary  font-bold text-lg text-white loading uppercase">Register</button>
                                            :
                                            <button className="  btn btn-primary  font-bold text-lg text-white uppercase">Register</button>

                                    }
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                </div>
                                <div className="form-control ">
                                    <button onClick={() => handleGoogleSignIn()} className="btn bg-white text-black  hover:text-white  font-bold text-lg hover:bg-zinc-600"> <img src={googleLogo} alt="" /> &nbsp; Continue With Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id='accType'>
                        {
                            showAccType &&
                            <>
                                {navigate(`/register/#accType`)}
                                <AccountTypePage showAccType={showAccType} setShowAccType={setShowAccType} type={"googleSignIn"} />
                            </>

                        }
                    </div>
                </div>


            </div >
        </div >
    );
};


export default Register