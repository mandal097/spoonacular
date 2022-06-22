import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const FoodCard = ({ i, show }) => {
    const navigate = useNavigate();


    const navigateToRecipes = () => {
        navigate(`/recipe/${i.id}`)
        window.scroll({
            top: 0,
            behavior: 'auto'
        })
    }
    return (
        <div className="carb_recipes_recipes_wrapper_cards" onClick={navigateToRecipes} style={{
            height:'60vh'
        }}>
            <div className="carb_recipes_recipes_wrapper_cards_top">
                <div className="img_div">
                    <img src={i.image} alt="" />
                </div>
            </div>
            <div className="carb_recipes_recipes_wrapper_cards_recipe_names">
                <h4>{i.title}</h4>
                <div className="carb_recipes_recipes_wrapper_cards_ratings">
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars halfstar"></div>
                    {/* <span>{i.calories/ i.t} Ratings</span> */}
                </div>
            </div>
                <div className="carb_recipes_recipes_wrapper_cards_details">
                    <div className="carb_recipes_recipes_wrapper_cards_details_left">
                        {/* <div className="time">
                        <span>{time} min</span>
                    </div> */}
                        <div className="calories">
                            <span> {i.calories} Calories </span>
                        </div>
                    </div>
                    <div className="carb_recipes_recipes_wrapper_cards_details_right">
                        <div className="carbs amounts">
                            <span>{i.carbs}</span>
                            <div className="amounts_hover carbs_hover"><i> {i.carbs} Net Carbs</i></div>
                        </div>
                        <div className="protein amounts">
                            <span>{i.protein}</span>
                            <div className="amounts_hover protein_hover"><i>{i.protein} Protein</i></div>
                        </div>
                        <div className="fat amounts">
                            <span>{i.fat}</span>
                            <div className="amounts_hover fat_hover"><i>{i.fat} Fat</i></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FoodCard