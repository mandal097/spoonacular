import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import FoodCard from '../FoodCard/FoodCard';
import NewsLetter from '../NewsLetter/NewsLetter'

const Recipes = () => {

    const [data, setData] = useState([]);
    const [cat, setCat] = useState('Carbs');
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);
    const [number, setNumber] = useState(20);
    const [showLessBtn, setShowLessBtn] = useState(false)

    const [isFetching, setIsFetching] = useState(false)





    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchAPi = async () => {
            const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apikey}&min${cat}=${min}&max${cat}=${max}&number=10000`)
            setData(fetchData.data)
        }
        fetchAPi()
    }, [cat, min, max, number])



    const setCarbs = () => setCat('Carbs')
    const setProtein = () => setCat('Protein')
    const setFat = () => setCat('Fat')
    const setVitaminA = () => setCat('VitaminA')
    const setVitaminC = () => setCat('VitaminC')
    const setVitaminD = () => setCat('VitaminD')
    const setVitaminK = () => setCat('VitaminK')
    const setFiber = () => setCat('Fiber')
    const setSugar = () => setCat('Sugar')


    const IncrNumber = () => {
        setIsFetching(true)
        number < data.length && setIsFetching(true)
        setTimeout(() => {
            number < data.length && setNumber(number + 10)
            setIsFetching(false)
            setShowLessBtn(true)
        }, 2000);
    }

    return (
        <div className='recipes'>
            <div className="recipes_wrapper">
                <div className="recipes_wrapper_header">
                    <div className="recipes_wrapper_header_left" onClick={() => {
                        setNumber(10000)
                    }}>
                        <div className="filter_icon"></div>
                        <span>All</span>
                    </div>
                    <div className="recipes_wrapper_header_right">
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setCarbs}>Carbs</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setProtein}>Protein</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setFat}>Fat</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setVitaminA}>VitaminA</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setVitaminC}>VitaminC</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setVitaminD}>VitaminD</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setVitaminK}>VitaminK</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setFiber}>Fiber</div>
                        <div className="recipes_wrapper_header_recipe_selector" onClick={setSugar}>Suger</div>
                    </div>
                </div>
                <div className="allrecipes">
                    <div className="fitering_div">
                        <h2>Popular Recipes  &#160; " &#160;{cat} &#160;"</h2>
                        <div className="filters">
                            <div className="validation">
                                greater than min value
                            </div>
                            <div className="selectors">
                                <span>Min{cat} :</span>
                                <select onChange={(e) => setMin(e.target.value)}>
                                    <option value="1">min{cat}   &#160; &#160; &#160;  1</option>
                                    <option value="5">min{cat}   &#160; &#160; &#160;  5</option>
                                    <option value="15">min{cat}   &#160; &#160; &#160;  15</option>
                                    <option value="30">min{cat}   &#160; &#160; &#160;  30</option>
                                    <option value="40">min{cat}   &#160; &#160; &#160;  40</option>
                                    <option value="50">min{cat}   &#160; &#160; &#160;  50</option>
                                    <option value="60">min{cat}   &#160; &#160; &#160;  60</option>
                                    <option value="70">min{cat}   &#160; &#160; &#160;  70</option>
                                    <option value="80">min{cat}   &#160; &#160; &#160;  80</option>
                                    <option value="90">min{cat}   &#160; &#160; &#160;  90</option>
                                    <option value="100">min{cat}   &#160; &#160; &#160;  100</option>
                                </select>
                            </div>
                            <div className="selectors">
                                <span>max{cat} :</span>
                                <select onChange={(e) => setMax(e.target.value)}>
                                    <option value="5">max{cat}   &#160; &#160; &#160; 5</option>
                                    <option value="15">max{cat}   &#160; &#160; &#160;  15</option>
                                    <option value="30">max{cat}   &#160; &#160; &#160;  30</option>
                                    <option value="40">max{cat}   &#160; &#160; &#160;  40</option>
                                    <option value="50">max{cat}   &#160; &#160; &#160;  50</option>
                                    <option value="60">max{cat}   &#160; &#160; &#160;  60</option>
                                    <option value="70">max{cat}   &#160; &#160; &#160;  70</option>
                                    <option value="80">max{cat}   &#160; &#160; &#160;  80</option>
                                    <option value="90">max{cat}   &#160; &#160; &#160;  90</option>
                                    <option value="100">max{cat}   &#160; &#160; &#160;  100</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="all_recipes_cards">
                        {
                            data.slice(0, number).map((i) => (
                                <FoodCard index key={i.id} i={i} />
                            ))
                        }
                        <div className="similar_food_more_btn">
                            <div className="similar_food_btn" onClick={IncrNumber}>
                                <div className={isFetching ? 'similar_food_btn_left animate' : 'similar_food_btn_left'}></div>
                                <span className="similar_food_btn_right">See More Foods</span>
                            </div>
                            {
                                showLessBtn &&
                                <div className="show_less" onClick={() => {
                                    setNumber(20);
                                    window.scroll({
                                        top: 600,
                                        behavior: 'smooth'
                                    })
                                    setTimeout(() => {
                                        setShowLessBtn(false)
                                    }, 1000);
                                }}>Show less..</div>
                            }
                        </div>
                    </div>
                </div>
                <NewsLetter />
                <div className="allrecipes">
                    <h2>Similar Recipes &nbsp;&nbsp; " {cat} "</h2>
                    <div className="all_recipes_cards">
                        {
                            data.slice(10, 16).map((i) => (
                                <FoodCard index key={i.id} i={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Recipes