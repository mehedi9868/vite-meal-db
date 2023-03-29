import React from 'react';
import './SingleMeal.css';

const SingleMeal = ({ meal, handleCart }) => {
    const { strMealThumb, strMeal, strInstructions } = meal;
    return (
        <div className='single-meal-container'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Instructions: {strInstructions.slice(0, 150)}...</p>
            <div>
                <button onClick={() => handleCart(meal)} className="btn-add">Add to List</button>
            </div>
        </div>
    );
};

export default SingleMeal;