import React from 'react'
import './style.scss'
import { data } from './cardData'
import FeaturesDetails from '../FetauresDetails/FeaturesDetails'
import { features } from './featuresData'

const Cards = ({ i }) => {
    return (
        <div className="cards">
            <div className="cards_top"
                style={{
                    backgroundImage: `url('images/${i.img}.svg')`
                }}
            ></div>
            <span>{i.span}</span>
            <p>{i.p}</p>
        </div>
    )
}


const FeaturesSecondPage = () => {
    return (
        <>
            <div className='features_second_page'>
                <div className="features_second_page_wrapper">
                    <h2>The Most Advanced Set of Tools to Make Your Keto Lifestyle Easy</h2>
                    <div className="features_second_page_cards_container">
                        {
                            data.map(i => (
                                <Cards index key={i.id} i={i} />
                            ))
                        }
                    </div>
                    {
                        features.map((i) => (
                            <FeaturesDetails index key={i.id} i={i}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesSecondPage