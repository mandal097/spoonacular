import React from 'react'
import SupportCards from '../SupportCards/SupportCards'
import './style.scss'
const SupportSecondPage = () => {
    return (
        <div className='support_second_page'>
            <SupportCards
                span=' Connect with Carb Manager'
                p='Do you want to help us create or improve Carb Manager features?'
            />
            <SupportCards
                span=' Questions answered about the new version 7'
            />
        </div>
    )
}

export default SupportSecondPage