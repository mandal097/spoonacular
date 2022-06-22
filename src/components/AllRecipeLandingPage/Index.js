import React, { useState } from 'react'
import './style.scss'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { searchFun } from '../../redux/SearchRedux.js'
const Index = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch();
    const [searchTxt, setSearchTxt] = useState(null)
    const [placeholder, setPlaceholder] = useState('Search Recipes')


    const handleClick = (e) => {
        // update our cart
        // dispatch(searchFun(searchTxt))
        // console.log(searchTxt);
        searchTxt ? navigate(`/search/${searchTxt}`) : setPlaceholder('Type your recipe name')

    }
    return (
        <div className='all_recipe_landing_page'>
            <div className="all_recipe_landing_page_wrapper">
                <h2>Explore Over <span>50,000+</span> Unique Low-Carb and Keto Recipes</h2>
                <div className="search_div">
                    <div className="search_icon"></div>
                    <input type="text" name="" id="" onChange={(e) => setSearchTxt(e.target.value)} placeholder={`${placeholder}`} />
                    <button className="search_btn" onClick={handleClick}>Search</button>
                </div>
                <h4>Cant think of anything? <span> Try these popular tags</span></h4>
                <div className="popular_tags">
                    <span>Gluten Free</span>
                    <span>Quick & Easy</span>
                    <span>Snacks</span>
                    <span>Deserts</span>
                </div>
            </div>
        </div>
    )
}

export default Index