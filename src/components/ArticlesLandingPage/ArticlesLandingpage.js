import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
const ArticlesLandingpage = () => {
    const navigate = useNavigate()
    return (
        <div className='articles_landing_page'>
            <div className="articles_landing_page_wrapper">
                <div className="articles_landing_page_content">
                    <h2>Mindful Eating: Benefits and How to Practice</h2>
                    <p>Eating mindfully benefits both mind and body. Not only will you digest your food better, but you might even rekindle the joy of eating.  Explore this article to learn practical ways to eat mindfully in a moment.</p>
                    <div className="read_more_btn"
                        onClick={() => {
                            navigate(`/articles/brief/900`);
                            window.scroll({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                    >Read More</div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesLandingpage