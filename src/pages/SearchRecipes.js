import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SearchRecipe from '../components/SearchRecipeFoods/SearchRecipe';
// import { useSelector } from 'react-redux'
const SearchRecipes = () => {

    return (
        <div>
            <Header />
            <SearchRecipe />
            <Footer/>
        </div>
    )
}

export default SearchRecipes