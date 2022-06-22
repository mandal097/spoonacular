import React from 'react'
import FeaturesSecondPage from '../components/FeaturesSecondPage/FeaturesSecondPage'
import Header from '../components/Header/Header'
import LandingPage from '../components/LandingPage/Landingpage'
import Banner from '../components/HomePremiumBanner/Banner'
import Footer from '../components/Footer/Footer'
const Features = () => {
    return (
        <div>
            <Header />
            <LandingPage
                h1='The #1 Keto Diet App Since 2010'
                span='Learn. Cook. Track. Connect.'
                spanS='Explore our industry-leading suite of features that make Keto life easy.'
                col1='#a6b7ff'
                col2='#6c88f9'
                img='images/featurelandingpage.png'
            />
            <FeaturesSecondPage />
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Features