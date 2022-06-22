// import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import RecipeDetails from '../components/RecipeDetails/RecipeDetails'
import RecipeLandingPage from '../components/RecipeLandingPage/RecipeLandingPage'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'
import Ingredients from '../components/RecipeIngrediants/Ingredients'
import RecipeSteps from '../components/RecipeSteps/RecipeSteps'
import KetoRecipes from '../components/KetoRecipesC/KetoRecipes'
import Footer from '../components/Footer/Footer'
import SImilarFood from '../components/SimilarFood/SImilarFood'

const Recipe = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]


    return (
        <div>
            <Header />
            <RecipeLandingPage id={id} />
            <RecipeDetails id={id} />
            <Ingredients id={id} />
            <RecipeSteps id={id} />
            <SImilarFood id={id} />
            <KetoRecipes />
            <Footer />
        </div>
    )
}

export default Recipe