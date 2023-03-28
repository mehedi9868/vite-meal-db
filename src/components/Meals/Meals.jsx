import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const LoadMeals = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();
            setMeals(data.meals);
        }
        LoadMeals()
    }, []);
    console.log(meals);
    return (
        <div className='meals-container'>
            {
                meals.map((meal) => <SingleMeal
                    key={meal.idMeal}
                    meal={meal}
                ></SingleMeal>)
            }

        </div>
    );
};

export default Meals;