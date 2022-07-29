import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/google.png'
import linkedin from '../../../images/linkedin.png'

const LogIns = () => {
    return (
        <div>
            <h1>LogIns page</h1>
            
<label for="login-modal" class="btn modal-button">LogIns</label>


<input type="checkbox" id="login-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  
  <label for="login-modal" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-2xl text-center">LOG IN!</h3>
    
    <div className='flex justify-center items-center'>

    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6 modal-action">
          <label for="login-modal" class="btn btn-primary">Login</label>
        </div>

        <div className="flex flex-col w-full border-opacity-50">
        
        <p>New to Recruit Hub? <Link className='text-primary' to="/signup"> Create New Account</Link></p>
                                    <div className="divider">OR</div>
                                </div>
                                <div className="form-control ">
                                <button className="btn btn-outline btn-primary"> <img src={google} className='mx-2' alt="" /> Continue With Google</button>
                                </div>

                                <div className="form-control ">
                                <button className="btn btn-outline btn-primary"> <img src={linkedin} className='mx-2' alt="" /> Continue With LinkedIn</button>
                                </div>
      </div>
    </div>                    
    </div>
  </div>
</div>
</div>
    );
};

export default LogIns;