import React from 'react'
import './style.scss'
const FeaturesDetails = ({ i }) => {
    return (
        <div className='features_details'>
            <div className="features_details_text">
                <div className="features_details_text_img"
                    style={{
                        backgroundImage: `url("images/${i.icon}.svg")`
                    }}
                ></div>
                <h2>{i.feature}</h2>
                <p>{i.detail}</p>
                <div className="details">
                    {
                        i.points.map((p) => (
                            <div className="details_childs">
                                <h4>{p.h}</h4>
                                <p>{p.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="features_details_img"
                style={{
                    order: `${i.order}`
                }}>
                <div className="img_div">
                    <img src={i.mob} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FeaturesDetails