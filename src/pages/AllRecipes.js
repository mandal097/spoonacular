import React from 'react'
import Header from '../components/Header/Header'
import Index from '../components/AllRecipeLandingPage/Index'
import Recipes from '../components/AllRecipeRecipes/Recipes'
import Footer from '../components/Footer/Footer'
import Banner from '../components/HomePremiumBanner/Banner'

const AllRecipes = () => {
    return (
        <div>
            <Header />
            <Index />
            <Recipes />
            <Banner />
            <Footer />
        </div>
    )
}

export default AllRecipes