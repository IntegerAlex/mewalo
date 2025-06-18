import React from 'react'
import './SignupSignin.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const SignupSignin = () => {
  return (
    <>
        <div className="container-fluid" id='loginForm'>
            {/* login form  */}
            <div className="container loginForm">
                <div className="form-box login">
                    <form action="">
                        <h1 className='login-heading'>LOGIN FORM</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Enter your phone no' required/>
                            <FaUser className='user-icon'/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Enter your password' required/>
                            <FaLock className='user-icon'/>
                        </div>
                        <div className="forgot-link">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type='submit' className='loginForm-btn'>
                            Login
                        </button>
                        <p>or login with social platforms</p>
                        <div className='social-icons'>
                            <a href="" className='login-social-icon'><FaGoogle /></a>
                            <a href="" className='login-social-icon'><FaFacebook /></a>
                        </div>

                    </form>
                </div>
            </div>

            <div className="container loginForm">
                <div className="form-box login">
                    <form action="">
                        <h1 className='login-heading'>REGISTER FORM</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Enter your username' required/>
                            <FaUser className='user-icon'/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Enter your useremail' required/>
                            <FaEnvelope className='user-icon'/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Enter your phone no' required/>
                            <FaUser className='user-icon'/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Enter your password' required/>
                            <FaLock className='user-icon'/>
                        </div>
                        <div className="forgot-link">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type='submit' className='loginForm-btn'>
                            Login
                        </button>
                        <p>or login with social platforms</p>
                        <div className='social-icons'>
                            <a href="" className='login-social-icon'><FaGoogle /></a>
                            <a href="" className='login-social-icon'><FaFacebook /></a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignupSignin