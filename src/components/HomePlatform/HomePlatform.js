import React from 'react'
import './style.scss'
const HomePlatform = () => {
    return (
        <div className='home_platform'>
            <div className="home_platform_wrapper">
                <div className="home_platform_button">
                    <div className="home_platform_button_icon">
                        <img src="images/googleplay.png" alt="" />
                    </div>
                    <div className="ratings">
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/halfstar.svg" alt="" />
                        <div className="number_rating">(89k+)</div>
                    </div>
                </div>
                <div className="home_platform_button">
                    <div className="home_platform_button_icon">
                        <img src="images/appstore.png" alt="" />
                    </div>
                    <div className="ratings">
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/fullstar.svg" alt="" />
                        <img src="images/halfstar.svg" alt="" />
                        <div className="number_rating">(235k+)</div>
                    </div>
                </div>
                <div className="home_platform_button">
                    <div className="home_platform_button_icon">
                        <img src="images/web.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePlatform