import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
const LoginForm = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    return (
        <div className='login_form'>
            {
                show ? <ForgotPassword setShow={setShow} /> : (

                    <div className="login_wrapper">
                        <div className="login_back" onClick={() => {
                            navigate(-1)
                        }}></div>
                        <div className="form_wrapper">
                            <div className="Login_form_top">
                                <h2>Welcome Back</h2>
                                <p>Please sign in below to get started.</p>
                            </div>
                            <form className="form">
                                <div className="input">
                                    <input type="text" name="" id="" placeholder='Email Address' />
                                </div>
                                <div className="input">
                                    <input type="password" name="" id="" placeholder='password' />
                                </div>
                                <p className="forget_password" 
                                onClick={()=>{
                                    setShow(true)
                                }}
                                >Forgot your password?</p>
                                <input type="submit" value="Sign In" />
                            </form>
                            <span>OR</span>
                            <button className="apple">Continue With Apple</button>
                            <button className="google">Continue With Google</button>
                            <p className="sign_up">Don't have an account?<a href="#"> Sign up here</a></p>
                            <i>This site is protected by hCaptcha and their <br />
                                privacy policy and terms apply.</i>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default LoginForm