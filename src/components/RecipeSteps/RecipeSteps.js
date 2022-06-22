import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios';
const RecipeSteps = ({ recipes, id }) => {

    const [steps, setSteps] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchRecipe = async () => {
            const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`)
            setSteps(recipe.data.analyzedInstructions[0].steps)
            setTime(recipe.data.readyInMinutes)
            //    setImage(recipe.data.analyzedInstructions[0].steps[0].equipment[0].image);
            // console.log(steps);
            // console.log(recipe.data.analyzedInstructions[0].steps[0].equipment[0].image);
        }
        fetchRecipe()
    }, [id])

    return (
        <div className='recipe_steps'>
            <div className="recipe_steps_wrapper">
                <div className="recipe_steps_header">
                    <div className="header_steps">Recipe Steps</div>
                    <div className="right_steps">steps  {steps.length} <div className="time_required"></div>{time} min</div>
                </div>
                {
                    steps.map(i => (
                        <div className="steps_content">
                            <div className="step"><span>step {i.number}</span></div>
                            <div className="steps_details">
                                <p>{i.step}</p>
                            </div>
                            <div className="steps_img">
                                {
                                    i.ingredients.map((val) => (
                                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${val.image}`} alt="recipe images" />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeSteps