import React from 'react'
import './style.scss'
const SocialHandles = ({ width, height, direction, margin, show }) => {
    return (
        <div className="social_handles"
            style={{
                width: `${width}`,
                heihgt: `${height}`,
                flexDirection: `${direction}`
            }}
        >
            <div className="social_handles_main"
                style={{
                    marginTop: `${margin}`
                }}>
                <div className="socials_icon socials_icons_1"> </div>
            </div>
            <div className="social_handles_main"
                style={{
                    marginTop: `${margin}`
                }}>
                <div className="socials_icon socials_icons_3"> </div>
            </div>
            {
                show ?
                    <>
                        <div className="social_handles_main"
                            style={{
                                marginTop: `${margin}`
                            }}>
                            <div className="socials_icon socials_icons_2"> </div>
                        </div>
                        <div className="social_handles_main"
                            style={{
                                marginTop: `${margin}`
                            }}>
                            <div className="socials_icon socials_icons_4"> </div>
                        </div>
                    </>
                    :
                    <div className="social_handles_main"
                        style={{
                            marginTop: `${margin}`
                        }}>
                        <div className="socials_icon socials_icons_5"> </div>
                    </div>
            }
        </div>
    )
}

export default SocialHandles