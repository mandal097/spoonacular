import React from 'react'
import Header from '../components/Header/Header'
import HomeCompanies from '../components/HomeCompanies/HomeCompanies'
import LandingPage from '../components/LandingPage/Landingpage'
import KetoForYou from '../components/HomeKetoForYou/KetoForYou'
import KetoForEveryone from '../components/HomeKetoForEveryone/KetoForEveryone'
import KetoForLife from '../components/HomeKetoForLife/KetoForLife'
import KetoBeyond from '../components/HomeKetoBeyond/KetoBeyond'
import CarbManager from '../components/HomeCarbManager/CarbManager'
import AppsAndDevices from '../components/HomeConnectApps/AppsAndDevices'
import CarbManagerByNumber from '../components/HomecarbManagByNumber/CarbManagerByNumber'
import HomePlatform from '../components/HomePlatform/HomePlatform'
import Slider from '../components/HomeSlider/Slider'
import KetoBanner from '../components/HomeKetoBanner/KetoBanner'
import Banner from '../components/HomePremiumBanner/Banner'
import Footer from '../components/Footer/Footer'
import KetoRecipes from '../components/KetoRecipesC/KetoRecipes'
import CarbRecipes from '../components/RecipesCarb/CarbRecipes'
import LowCarb from '../components/HomeLowCarb/LowCarb'
const Home = () => {
    return (
        <div >
            <Header />
            <LandingPage
                h1='Keto & Low-Carb Made Easy'
                span='The #1 Low-Carb and Keto Diet App'
                spanS='For healthy & sustainable low-carb living'
                col1='#2dd29a'
                col2='#1ca677'
                img='images/homelandingpage.png'
            />
            <HomeCompanies />
            <KetoForYou />
            <KetoForEveryone />
            <KetoForLife />
            <KetoBeyond />
            <CarbManager />
            <AppsAndDevices />
            <CarbManagerByNumber />
            <HomePlatform />
            <Slider />
            <CarbRecipes />
            <LowCarb />
            <KetoBanner />
            <KetoRecipes />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home