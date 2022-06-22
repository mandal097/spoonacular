import React from 'react'
import Text from '../HomeCommonTxt/Text'
import './style.scss'
const KetoForEveryone = () => {
    return (
        <div className='keto_for_everyone'>
            <div className="keto_for_everyone_wrapper">
                <div className="left">
                    <div className="left_head">
                        <Text h='Keto for' spann='everyone'/>
                        <p>Keto isn’t just another diet. It’s a lifestyle. And Carb Manager isn’t just another Keto diet tracker. Our state-of-the-art features make it convenient and fun for everyone to join in.</p>
                    </div>
                    <div className="bottom">
                        <div className="points">
                            <div className="left hat"></div>
                            <div className="point">
                                <p>Save time with automatic meal plans and grocery lists tailored to specific food preferences and allergies</p>
                            </div>
                        </div>
                        <div className="points">
                            <div className="left chef"> </div>
                            <div className="point">
                                <p>Stay inspired by our database of thousands of Keto recipes</p>
                            </div>
                        </div>
                        <div className="points">
                            <div className="left niddle"> </div>
                            <div className="point">
                                <p>Have fun tracking the macros and micros of over 1 million foods with cutting-edge features, like our popular Snap Foods feature that uses photo recognition technology</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="img"></div>
                </div>
            </div>
        </div>
    )
}

export default KetoForEveryone