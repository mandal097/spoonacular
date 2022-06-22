import React from 'react'
import './style.scss'
const CarbManager = () => {
    return (
        <div className='home_carb_manager'>
            <div className="greenlief">
                <div className="img"></div>
            </div>
            <div className="home_carb_manager_wrapper">
                <h2>Get to Know Carb Manager</h2>
                <h4>The all-in-one Keto app. And your new <span>best friend.</span> </h4>
                <div className="main_container">
                    <div className="main_container_left common_main_container">
                        <div className="cards">
                            <div className="cards_top" >
                                <img src="images/carbTick.svg" alt="" />
                            </div>
                            <span className="cards_head">Track Every Bite</span>
                            <p>Log food and meals in seconds with the industry’s most advanced food logger, featuring new carb counts, micros, and macronutrients. Our Premium version lets you log food by just snapping a picture! #LikeMagic</p>
                        </div>
                        <div className="cards">
                            <div className="cards_top">
                                <img src="images/cook.svg" alt="" />
                            </div>
                            <span className="cards_head">Cook “Yum-Worthy” Keto Meals</span>
                            <p>Who said low-carb was boring? Satisfy even the pickiest eaters in your family with our exclusive, premium database of delicious Keto recipes.</p>
                        </div>
                    </div>
                    <div className="main_container_middle common_main_container">
                        <div className="img">
                        </div>
                    </div>
                    <div className="main_container_right common_main_container">
                        <div className="cards">
                            <div className="cards_top">
                                <img src="images/grocery.svg" alt="" />
                            </div>
                            <span className="cards_head">Simplify Grocery Runs</span>
                            <p>Save time at the grocery store! Generate personalized meal plans and shopping lists based on your preferences and macros, or choose from one of our many curated meal plans for all diet types.</p>
                        </div>
                        <div className="cards">
                            <div className="cards_top">
                                <img src="images/analytics.svg" alt="" />
                            </div>
                            <span className="cards_head">Analyze Advanced Health Metrics</span>
                            <p>Go way beyond the typical calorie counter. Track ketones, blood glucose, insulin, diabetes carbs, intermittent fasting, glycemic load, GKI, and much much more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarbManager