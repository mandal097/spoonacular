import React from 'react'
import Email from '../EmailSubscribe/Email'
import Apps from '../GetApps/Apps'
import './style.scss'

const HomeLandingpage = ({ h1, span, spanS, img, col1, col2 }) => {
    return (
        <div className='home_landing_page'
            style={{
                background: `radial-gradient(ellipse at center, ${col1} 0, ${col2} 100%)`
            }}
        >
            <div className="home_landing_page_wrapper">
                <div className="left">
                    <div className="left_head">
                        <h1>{h1}</h1>
                        <span>{span}</span>
                        <span className='light'>{spanS}</span>
                    </div>
                    <Email />
                    <Apps />
                </div>
                <div className="right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeLandingpage