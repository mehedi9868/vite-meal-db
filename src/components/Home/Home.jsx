import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import './Home.css'

const Home = () => {
    const [names, setName] = useState([]);

    const handleCart = (meal) => {
        const mealName = meal.strMeal;
        setName([...names, mealName]);

    }

    return (
        <div className='home-container'>
            <div className="meals-component">
                <Meals handleCart={handleCart}></Meals>
            </div>
            <div className="cart-component">
                <Cart names={names}></Cart>
            </div>
        </div>
    );
};

export default Home;