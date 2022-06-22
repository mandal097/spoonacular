import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const KetoRecipes = () => {
    const navigate = useNavigate();

    const navigateToAllrecipe = () => {
        navigate('/allrecipe');
        window.scroll({
            top: 0,
            behaviorr: 'auto'
        })
    }
    return (
        <div className='keto_recipe'>
            <div className="keto_recipe_wrapper">
                <div className="keto_recipe_head">
                    <h2>Explore More Recipes</h2>
                </div>
                <div className="keto_recipe_cards_container">
                    <div className="keto_recipe_cards ">
                        <div className="text">
                            <h2>keto <span>Easy</span><br /> Recipes</h2>
                        </div>
                        <div className="img_div keto_recipe_cards_1"></div>
                    </div>
                    <div className="keto_recipe_cards ">
                        <div className="text">
                            <h2>keto <span>Snack</span><br /> Recipes</h2>
                        </div>
                        <div className="img_div keto_recipe_cards_2"></div>
                    </div>
                    <div className="keto_recipe_cards ">
                        <div className="text">
                            <h2>keto <span>Breakfase</span><br /> Recipes</h2>
                        </div>
                        <div className="img_div keto_recipe_cards_3"></div>
                    </div>
                    <div className="keto_recipe_cards ">
                        <div className="text">
                            <h2>keto <span>Smoothie</span><br /> Recipes</h2>
                        </div>
                        <div className="img_div keto_recipe_cards_4"></div>
                    </div>
                </div>
                <div className="keto_recipe_button">
                    <button onClick={navigateToAllrecipe}>View All Recipes</button>
                </div>
            </div>
        </div>
    )
}

export default KetoRecipes