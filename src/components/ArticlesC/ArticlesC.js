import React from 'react'
import './style.scss'
import ArticlesSection from '../ArticleCommonSection/ArticlesSection'

const ArticlesC = () => {
    return (
        <div className='articles_c'>
            <div className="articles_c_wrapper">
                <ArticlesSection />
                <ArticlesSection />
                <ArticlesSection />
                <ArticlesSection />
                <ArticlesSection />
            </div>
        </div>
    )
}

export default ArticlesC