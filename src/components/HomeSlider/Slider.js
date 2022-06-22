import React, { useState } from 'react'
import './style.scss'
import { data } from './dummydata'
import SocialHandles from '../Socials/SocialHandles'
import { useNavigate, UseNavigate, useNavigationType } from 'react-router-dom'
const Slider = () => {
    const navigate = useNavigate()
    const [slideCount, setSlideCount] = useState(0)
    const handleSlidesLeft = () => {
        slideCount > 0 ? setSlideCount(slideCount - 1) : setSlideCount(0)
    }
    const handleSlidesRight = () => {
        slideCount < data.length - 1 ? setSlideCount(slideCount + 1) : setSlideCount(data.length - 1)
    }


    return (
        <div className='slider_container'>
            <div className="top_slider_content">
                <h2 className="head">Love. Life. Keto.</h2>
                <p>Join our active community and start living your best life.</p>
            </div>
            <div className="slider_container_wrapper">
                <div className="slides"
                    style={{
                        transform: `translateX(-${slideCount * 100}vw)`
                    }}
                >
                    {
                        data.map(i => (

                            <div className="slider_comp" key={i.id}>
                                <div className="slider_content">
                                    <div className="slider_content_left">
                                        <div className="name">{i.name}</div>
                                        <div className="location">{i.city}</div>
                                        <div className="status_weight">
                                            <img src="images/greenchefhat.svg" alt="" />
                                            {i.status}
                                        </div>
                                        <div className="slider_about_customers">
                                            <div className="quotes"></div>
                                            <div className="slider_about_customers_para">
                                                <p>{i.about}</p>
                                            </div>
                                        </div>
                                        <div className="slider_content_left_button" onClick={() => {
                                            navigate('*');
                                            window.scroll({
                                                top: 0,
                                                behavior: 'auto'
                                            })
                                        }}>Read Success Story</div>
                                        <div className="sliderLength">
                                            <div className="slides_count" style={{
                                                left: `${slideCount * (100 / 7)}%`
                                            }}></div>
                                            <div className="slideCounts left">01</div>
                                            <div className="slideCounts right">{data.length}</div>
                                            <div className="slideCounts center"
                                                style={{
                                                    left: `${slideCount * (100 / 7)}%`
                                                }}
                                            >{slideCount + 1}</div>
                                        </div>
                                    </div>
                                    <div className="slider_content_right_img">
                                        <div className="Img">
                                            <img src={i.img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="slider_bottom">
                <div className="para"><i>All stories and testimonials are provided by real Carb Manager users, who have each received a gift card in compensation for sharing their experience. Their results are extraordinary and not typical. Carb Manager does not guarantee any specific health or medical outcomes for those using our product.</i></div>
                <SocialHandles
                    width='40rem'
                    height='7rem'
                    direction='row'
                    show={true}
                />
            </div>
            <div className="slider_controls controls_left" onClick={handleSlidesLeft}></div>
            <div className="slider_controls controls_right" onClick={handleSlidesRight}></div>
        </div>
    )
}

export default Slider