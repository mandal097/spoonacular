import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.scss'
import FoodCard from '../FoodCard/FoodCard';
import { useLocation, useNavigate } from 'react-router-dom'
const SearchRecipe = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState();

  const recipeName = location.pathname.split('/')[2]


  const [search, setSearch] = useState(recipeName);

  useEffect(() => {
    const fetchAPi = async () => {
      const apiKey = process.env.React_App_API_KEY
      const fetchData = await axios.get(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${search}&maxFat=100&number=10000`)
      setData(fetchData.data.results)
      // console.log(fetchData);
    }
    fetchAPi()
  }, [search])
  return (
    <div className='search_recipe_'>
      <div className="search_recipe_top">
        <div className="search_recipe_top_wrapper">
          <div className="search_recipe_top_wrapper_left">
            <h2>Food Index</h2>
          </div>
          <div className="search_recipe_top_wrapper_right">
            <input type="text" placeholder='search here' onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
              setSearch(input)
              navigate(`/search/${input}`);
            }}>Search</button>
          </div>
        </div>
      </div>
      <div className="search_recipe_wrapper">
        <div className="recipe_wrapper_top">
          <h2>You search For &nbsp; " <span>{recipeName}</span> "</h2>
        </div>
        <div className="recipe_wrapper_foodCards">
          {
            data.map((i) => (
              <FoodCard index key={i.id} i={i} show={false} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchRecipe