import React from 'react'
import Text from '../HomeCommonTxt/Text'
import './ketoforyou.scss'
const KetoForYou = () => {
    return (
        <div className='home_third_page'>
            <div className="home_third_page_wrapper">
                <div className="home_third_page_first">
                    <div className="home_third_page_first_left">
                        <div className="home_third_page_first_left_top">
                            <h2>Get to Know Keto & Low-Carb</h2>
                            <h4>And get results in as little as <span> 3 weeks.</span></h4>
                        </div>
                        <div className="home_third_page_first_left_bottom">
                            <div className="img"></div>
                        </div>
                    </div>
                    <div className="home_third_page_first_right">
                        <div className="home_third_page_first_right_top">
                            <img src="images/avacado.png" alt="" />
                        </div>
                        <div className="home_third_page_first_right_bottom">
                            <Text h='Keto for' spann='you'/>
                            <p>Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:</p>
                            <div className="points">
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right">Lose weight quickly</div>
                                </div>
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right">Reduce inflammation</div>
                                </div>
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right">Optimize energy</div>
                                </div>
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right">Gain mental clarity</div>
                                </div>
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right">Restore balance</div>
                                </div>
                                <div className="point">
                                    <div className="left"></div>
                                    <div className="right"> Manage cravings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_third_page_second"></div>
                <div className="home_third_page_third"></div>
                <div className="home_third_page_fourth"></div>
            </div>
        </div>
    )
}

export default KetoForYou