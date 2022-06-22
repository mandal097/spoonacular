import React from 'react'
import Text from '../HomeCommonTxt/Text'
import './style.scss'
const KetoBeyond = () => {
    return (
        <div className='home_keto_beyond'>
            <div className="home_keto_beyond_wrapper">
                <div className="left">
                    <div className="left_wrapper">
                        <div className="top">
                            <Text h='Keto' spann='beyond' />
                            <p>We go way beyond the typical low-carb tracker to make sure you’re at your best. With Carb Manager, you can easily track your:</p>
                        </div>
                        <div className="bottom">
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">Ketones</div>
                            </div>
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">Blood glucose</div>
                            </div>
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">Insulin</div>
                            </div>
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">Intermittent fasting</div>
                            </div>
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">Glycemic load</div>
                            </div>
                            <div className="points">
                                <div className="left"></div>
                                <div className="point">GKI and much more...</div>
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

export default KetoBeyond