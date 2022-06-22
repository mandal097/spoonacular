import React from 'react'
import ArticlesC from '../components/ArticlesC/ArticlesC'
import ArticlesLandingpage from '../components/ArticlesLandingPage/ArticlesLandingpage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
const Article = () => {
    return (
        <div>
            <Header />
            <ArticlesLandingpage />
            <ArticlesC />
            <Footer />
        </div>
    )
}

export default Article