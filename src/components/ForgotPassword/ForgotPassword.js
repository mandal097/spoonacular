import React from 'react'
import './style.scss'
const ForgotPassword = ({ setShow }) => {
    return (
        <div className='forgot_password_'>
            <div className="login_back" onClick={() => {
                setShow(false)
            }}></div>
            <form className="forgot_password_wrapper">
                <div className="top">
                    <h2>Forgot Password?</h2>
                    <p>Enter your email below to reset your password.</p>
                </div>
                <input type="email" name="" id="" placeholder='Write Your Email Here' />
                <input type="submit" value="Send Reset Instructions" />
                <p>Already have your password? <span onClick={() => {
                    setShow(false)
                }}> Sign In here</span></p>
            </form>
        </div>
    )
}

export default ForgotPassword