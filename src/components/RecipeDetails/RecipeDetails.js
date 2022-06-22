import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import Widgets from '../NutrientsWIdget/Widgets';
import SocialHandles from '../Socials/SocialHandles';


const RecipeDetails = ({ id }) => {


    const [recipe, setRecipe] = useState([]);
    const [summary, setSummary] = useState();

    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchRecipe = async () => {
            const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`)
            // console.log(recipe.data);
            setRecipe(recipe.data);
        }
        const fetchSummry = async () => {
            const summary = await axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apikey}`)
            setSummary(summary.data.summary);
        }
        fetchRecipe()
        fetchSummry()
    }, [id])

    return (
        <div className='recipe_details'>
            <div className="social_handles_">
                <span>Share</span>
                <SocialHandles
                    width='7rem'
                    height='25'
                    direction='column'
                    margin='1rem'
                    show={false}
                />
            </div>
            <div className="recipe_details_wrapper">
                <div className="recipe_details_left">
                    <div className="recipe_details_left_top">
                        <div className="recipe_title">
                            <h2>{recipe.title}</h2>
                        </div>
                        <div className="recipe_ratings">
                            <div className="ratings_stars"></div>
                            <div className="ratings_stars"></div>
                            <div className="ratings_stars"></div>
                            <div className="ratings_stars"></div>
                            <div className="ratings_stars ratings_stars_h"></div>
                        </div>
                        <div className="recipe_summary">
                            <p>{summary}</p>
                        </div>
                        <div className="buttons">
                            {/* {
                                diet.map((d) => (
                                    <>
                                        <button item>{d}</button>
                                    </>
                                ))
                            } */}
                            <button>Gluten Free</button>
                        </div>
                    </div>
                </div>
                <div className="recipe_details_right">
                    <img src={recipe.image} alt="" />
                </div>
            </div>
            <Widgets id={id} title={recipe.title} />
        </div >
    )
}

export default RecipeDetails