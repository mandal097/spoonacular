import React from 'react'
import './app.scss'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipe from './pages/Recipe'
import AllRecipes from './pages/AllRecipes'
import SearchRecipes from './pages/SearchRecipes'
import ErrorPage from './pages/ErrorPage'
import Support from './pages/Support'
import Article from './pages/Article'
import ArticleReadMore from './pages/ArticleReadMore'
import Login from './pages/Login'
import Features from './pages/Features'


const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/*'>
                        <Route index element={<Home />} />
                        <Route path='features' element={<Features />} />
                        <Route path='recipe/:id' element={<Recipe />} />
                        <Route path='allrecipe' element={<AllRecipes />} />
                        <Route path='search/:name' element={<SearchRecipes />} />
                        <Route path='help' element={<Support />} />
                        <Route path='articles' element={<Article />} />
                        <Route path='articles/brief/:id' element={<ArticleReadMore />} />
                        <Route path='account/signin' element={<Login />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App