import React from 'react'
import './style.scss'
const Index = ({ i, handleWidgets, title }) => {
    console.log(i);
    return (
        <div className='details_widgets'>
            <div className="details_widgets_wrapper">
                <div className="backBtn" onClick={handleWidgets}></div>
                <div className="details_widgets_left">
                    <h3>{title}</h3>
                    <h2>Good Nutrients</h2>
                    {
                        i.good.map((item) => (
                            <div className="details_widgets_left_nuts" key={item.id}>
                                <div className="nutrients_name">{item.title}</div>
                                <div className="nutrients_weight">{item.amount}</div>
                            </div>
                        ))
                    }
                    <h2>Bad Nutrients</h2>
                    {
                        i.bad.map((item) => (
                            <div className="details_widgets_left_nuts" key={item.id}>
                                <div className="nutrients_name">{item.title}</div>
                                <div className="nutrients_weight">{item.amount}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="details_widgets_right">
                    {/* <img src={`https://api.spoonacular.com/recipes/${i.id}/nutritionLabel.png?${process.env.React_App_API_KEY}`} alt="" /> */}
                    {/* <img src={`https://api.spoonacular.com/food/menuItems/424571/nutritionLabel.png?${process.env.React_App_API_KEY}`} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Index