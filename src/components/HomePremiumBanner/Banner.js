import React from 'react'
import './style.scss'
const Banner = () => {
    return (
        <div className='premium_banner'>
            <div className="premium_banner_content">
                <h2>Looking for Premium?</h2>
                <p>Unlock all of Carb Manager's cutting-edge features with a Premium Membership.</p>
                <div className="button">
                    <div className="left_btn_icon"></div>
                    <p className="text">Get Premium</p>
                </div>
            </div>
        </div>
    )
}

export default Banner