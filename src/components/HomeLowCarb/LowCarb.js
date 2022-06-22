import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import FoodCard from '../FoodCard/FoodCard'
const LowCarb = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPi = async () => {
            const apikey = process.env.React_App_API_KEY
            const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apikey}&minCarbs=1&maxCarbs=6&number=6`)
            setData(fetchData.data)
        }

        fetchAPi()
    }, [])
    return (
        <div className='home_low_carb'>
            <div className="home_low_carb_wrapper">
                <div className="home_low_carb_header">
                    <h2>Explore Low-Carb Foods</h2>
                    <p>View in-depth nutrition info on millions of foods</p>
                </div>
                <div className="home_low_carb_cards_container">
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

export default LowCarb