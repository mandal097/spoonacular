import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import Index from '../NutrientsWidgetDetails/Index';
const Widgets = ({ id, title }) => {

    const [nut, setNut] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const apikey = process.env.React_App_API_KEY
        const fetchNut = async () => {
            const nutrients = await axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apikey}`)

            setNut(nutrients)
        }
        fetchNut()
    }, [id])
    // console.log(nut.data);

    const handleWidgets = () => {
        switch (show) {
            case false:
                setShow(true);
                break;
            case true:
                setShow(false);
                break;
            default:
                setShow(false)
        }
    }

    return (
        <div className="recipe_details_left_bottom">
            {
                show && <Index handleWidgets={handleWidgets} i={nut.data} title={title} />
            }
            <div className="recipe_details_left_bottom_">
                <div className="recipe_details_left_bottom_nutrients">
                    <div className="recipe_details_left_bottom_left">
                        <span className="nutrient_type nutrient_type_carb">Net Carbs</span>
                    </div>
                    <div className="recipe_details_left_bottom_right">
                        {/* <span className="net_nutrient_type">{nut.data.carbs}</span> */}
                    </div>
                </div>
                <div className="recipe_details_left_bottom_nutrients">
                    <div className="recipe_details_left_bottom_left">
                        <span className="nutrient_type nutrient_type_protein">Protein</span>
                    </div>
                    <div className="recipe_details_left_bottom_right">
                        {/* <span className="net_nutrient_type">{pro}</span> */}
                    </div>
                </div>
                {/* {
                    data.map((n) => ( */}

                        <div className="recipe_details_left_bottom_nutrients">
                            <div className="recipe_details_left_bottom_left">
                                <span className="nutrient_type nutrient_type_fats">Fats</span>
                            </div>
                            <div className="recipe_details_left_bottom_right">
                                {/* <span className="net_nutrient_type">{data[0].fat}</span> */}
                            </div>
                        </div>
                    {/* ))
                } */}
                <button className="showWidgets" onClick={handleWidgets}>View More</button>
            </div>
            {/* <div className="chart">
            </div> */}
        </div>
    )
}

export default Widgets