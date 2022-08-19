import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading';
import useToken from './../../../hooks/useToken';
import googleLogo from '../../../images/google.png';
const Login = () => {
    const [globalUser] = useAuthState(auth);
    const [passwordError, setPasswordError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    let currentUser;
    let username = '';



    // React hook forms element
    // React hook forms element
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Error State
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // globalUser is [user]= useAuthState(auth)
    const [showPassword, setShowPassword] = useState(false);
    const tokenInLStorage = localStorage.getItem('accessToken');



    if (globalUser) {
        currentUser = {
            email: globalUser?.email,
            username: username,
            accountType: tokenInLStorage
        }
    }

    const token = useToken(currentUser)
    useEffect(() => {
        if (!globalUser && ((tokenInLStorage + "").length > 4)) {
            localStorage.removeItem("accessToken")
        } else {
            if ((tokenInLStorage + "").length > 4) {
                navigate(from, { replace: true });
            }
        }


    }, [token, navigate, globalUser, from, tokenInLStorage])

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div className='min-h-[100vh] mt-10 '>
            <div className=" flex justify-center items-center ">
                <div className=" md:w-1/4 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-5xl font-bold text-center mb-10'>Login</h1>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered text-xl" {...register("email",
                                        { required: true })} />
                                    <label className="label">
                                        {errors?.email?.type === 'required' && <span className="label-text-alt text-lg">{errors.email.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>

                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered text-xl" {...register("password",
                                        {
                                            required: true,
                                        })} />
                                    <div className='text-xl flex justify-between items-center'>
                                        <div>
                                            <label className="my-2">
                                                <Link to="/forgetPassword" className=" hover:text-primary  text-lg"><span >Forgot password?</span></Link>
                                            </label>
                                        </div>
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-lg">&nbsp; Show Password &nbsp;</span>
                                            <input onChange={() => setShowPassword(!showPassword)} type="checkbox" checked={showPassword} className="checkbox" />
                                        </label>
                                    </div>
                                </div>

                                {/* Error Shows here */}
                                <div>
                                    {
                                        passwordError && <p className='text-red-500'>{passwordError}</p>
                                    }
                                    {
                                        gError && <p value={gError} className='text-red-500 font-bold'>{gError.message.slice(9)}</p>

                                    }
                                    {
                                        error && <p className='text-red-500 font-bold'>{error?.message?.slice(9)}</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        loading
                                            ?
                                            <button type='submit' className="btn btn-primary font-bold text-lg text-white loading uppercase">Login</button>
                                            :
                                            <button type='submit' className="btn btn-primary font-bold text-lg text-white  uppercase">Login</button>
                                    }
                                </div>
                            </form>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                            <div className="form-control ">
                                <button onClick={() => signInWithGoogle()} className="btn bg-white text-black  hover:text-white  font-bold text-lg hover:bg-zinc-600"> <img src={googleLogo} alt="" /> &nbsp; Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )

};

export default Login;