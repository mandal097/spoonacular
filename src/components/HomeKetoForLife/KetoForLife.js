import React from 'react'
import Text from '../HomeCommonTxt/Text'
import './styles.scss'
const KetoForLife = () => {
    return (
        <div className="keto_for_life">
            <div className="keto_for_life_wrapper">
                <div className="left">
                    <div className="img"></div>
                </div>
                <div className="right">
                    <div className="right_head">
                        <Text h='Keto for' spann='life' />
                        <p>Carb Manager is here to help you stick to your low-carb lifestyle.</p>
                    </div>
                    <div className="middle">
                        <div className="points">
                            <div className="points_left"></div>
                            <div className="point">
                                <p>Worried about cravings?</p>
                            </div>
                        </div>
                        <div className="points">
                            <div className="points_left"></div>
                            <div className="point">
                                <p>Want to know how your kids can do it too?</p>
                            </div>
                        </div>
                        <div className="points">
                            <div className="points_left"></div>
                            <div className="point">
                                <p>Wonder how long before you see results?</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>
                            Our popular blog will keep you inspired and informed. And our active social media community lets you stay connected to other low-carb folks, so you’ll always get the support you need.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KetoForLife