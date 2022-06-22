import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SImilarFood = ({ id }) => {
    const navigate = useNavigate()

    const [similarFood, setSimilarFood] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [numbers, setNumbers] = useState(5)

    useEffect(() => {
        const fetchSimilarFood = async () => {
            const apikey = process.env.React_App_API_KEY
            const fetchedData = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apikey}`)
            const demo = await axios.get(`https://api.spoonacular.com/recipes/641166/nutritionLabel?apiKey=${apikey}`)

            console.log(demo);
            // console.log(fetchedData.data);
            setSimilarFood(fetchedData.data)
        }
        fetchSimilarFood()
    }, [id])


    const IncrNumber = () => {
        numbers < similarFood.length && setIsFetching(true)
        setTimeout(() => {
            numbers < similarFood.length && setNumbers(numbers + 5)
            setIsFetching(false)
        }, 2000);
    }

    return (
        <div className='similar_food'>
            <div className="similar_food_wrapper">
                <div className="similar_food_header">
                    <h2>Similar Foods</h2>
                </div>
                {
                    similarFood.slice(0, numbers).map((i) => (
                        <div key={i.id} index className="similar_food_names">
                            <div className="similar_food_names_img">
                                <img src={`https://spoonacular.com/recipeImages/${i.id}-556x370.jpg`} alt="" />
                            </div>
                            <h2 onClick={() => {
                                navigate(`/recipe/${i.id}`);
                                window.scroll({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }}>{i.title}</h2>
                        </div>
                    ))
                }
                <div className="similar_food_more_btn">
                    <div className="similar_food_btn">
                        <div className={isFetching ? 'similar_food_btn_left animate' : 'similar_food_btn_left'}></div>
                        <span className="similar_food_btn_right" onClick={IncrNumber}>See More Foods</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SImilarFood