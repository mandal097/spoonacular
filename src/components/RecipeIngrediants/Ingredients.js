import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
const Ingredients = ({ id }) => {

    const [ingrediantss, setIngrediantss] = useState([])

    
    // const [recipe, setRecipe] = useState([]);
    // const [summary, setSummary] = useState()

    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchRecipe = async () => {
            const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`)
            // console.log(recipe.data);
            setIngrediantss(recipe.data.extendedIngredients)
        }
        fetchRecipe()
    }, [id])

    // console.log(ingrediantss);

    return (
        <div className='ingrediants'>
            <div className="ingrediants_wrapper">
                <h2 className="ingrediants_header">Ingrediants</h2>
                {
                    ingrediantss.map(i => (

                        <div className="ingrediants_lists">
                            <div className="ingrediants_lists_left">
                                <div className="img_div">
                                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`} alt="" />
                                </div>
                                <div className="ingrediants_name">{i.originalName}</div>
                            </div>
                            <div className="ingrediants_lists_right">{i.original}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ingredients