import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import FoodCard from '../FoodCard/FoodCard';

const CarbRecipes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchAPi = async () => {
            const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apikey}&minCarbs=5&maxCarbs=15&number=10`)
            setData(fetchData.data)
        }
        fetchAPi()
    }, [])



    return (
        <div className='carb_recipes'>
            <div className="carb_recipes_wrapper">
                <div className="carb_recipes_header">
                    <h2>Trending Keto and Low-Carb Recipes</h2>
                    <p>Tasty low-carb Keto recipes the whole family will love.</p>
                </div>
                <div className="carb_recipes_recipes_wrapper">
                    {
                        data.map((i) => (
                            <FoodCard index key={i.id} i={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CarbRecipes