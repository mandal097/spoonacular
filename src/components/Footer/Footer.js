import React from 'react'
import SocialHandles from '../Socials/SocialHandles'
import './style.scss'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='footer'>
            <div className="footer_wrapper">
                <div className="footer_header"></div>
                <div className="footer_links">
                    <div className="footer_links1">
                        <span>Features</span>
                        <span>Premium</span>
                        <span>Keto Recipes</span>
                        <span>Keto Cookbook</span>
                        <span>Articles</span>
                        <span>Foods</span>
                        <span>Support</span>
                        <span>Log In</span>
                        <span>Join For Free</span>
                    </div>
                    <div className="footer_links2">
                        <span>Gift Cards</span>
                        <span>Support Center</span>
                        <span>Forums</span>
                        <span>Terms Of Service</span>
                        <span>Privacy Policy</span>
                        <span>Contact</span>
                        <span>System Status</span>
                    </div>
                </div>
                <div className="socials">
                    <SocialHandles
                        width='40rem'
                        height='7rem'
                        direction='row'
                        show={true}
                    />
                </div>
                <div className="footer_copy">
                    <p>© 2010-2022 Wombat Apps LLC. All Rights Reserved.</p>
                    <i>Carb Manager's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</i>
                </div>
                <div className="scroll_to_top" onClick={scrollToTop}></div>
            </div>
        </div>
    )
}

export default Footer