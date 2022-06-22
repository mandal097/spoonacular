import React from 'react'
import Email from '../EmailSubscribe/Email'
import Apps from '../GetApps/Apps'
import './Style.scss'
const NewsLetter = () => {
    return (
        <div className='newsletter_container'>
            <div className="newsletter_wrapper">
                <div className="newsletter_wrapper_divs order_1">
                    <h2>Available on Android & iOS</h2>
                </div>
                <div className="newsletter_wrapper_divs order_2">
                    <h3>Create a free Carb Manager account</h3>
                </div>
                <div className="newsletter_wrapper_divs order_3">
                    <Apps />
                </div>
                <div className="newsletter_wrapper_divs order_4">
                    <Email />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter