import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/google.png'
import linkedin from '../../../images/linkedin.png'

const SignUp = () => {
    return (
        <div>
             <h1>Sign Up page</h1>
            
            <label for="signup-modal" class="btn modal-button">Sign Up</label>
            
            
            <input type="checkbox" id="signup-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
              <label for="signup-modal" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-2xl text-center">Sign Up!</h3>
                
                <div className='flex justify-center items-center'>
            
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div class="card-body">
            
                 
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Your Name</span>
                      </label>
                      <input type="text" placeholder="Your Name" class="input input-bordered" />
                    </div>
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
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Where did you hear about Recruit Hub?</span>
                      </label>
                      <select class="select select-primary w-full max-w-xs">
              <option disabled selected>Choose an option</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>Youtube</option>
              <option>Twitter</option>
              <option>From a friend</option>
              <option>others</option>
            </select>  
                    </div>
                   
                    <div class="form-control mt-6 modal-action">
                      <label for="signup-modal" class="btn btn-primary">Sign up</label>
                    </div>
            
                    <div className="flex flex-col w-full border-opacity-50">
                    <p>Already have an account? <Link className='text-primary' to="/logins">login here</Link></p>
                    </div>
            
                                         
                  </div>
                </div>                    
                </div>
              </div>
            </div>
</div>
    );
};

export default SignUp;