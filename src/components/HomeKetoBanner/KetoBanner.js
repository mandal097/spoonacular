import React from 'react'
import Button from '../Button/Button'
import './style.scss'
const KetoBanner = () => {
    return (
        <div className='keto_banner'>
            <div className="keto_banner_content">
                <h2>Keep up with Keto & Low-Carb</h2>
                <p>Easily start and maintain a healthy Keto lifestyle, with everything you need to know at your fingertips.</p>
                <Button className='button' txt='Join For free' width='25rem' bgCol='red' />
            </div>
        </div>
    )
}

export default KetoBanner