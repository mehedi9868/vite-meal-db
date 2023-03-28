import React from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="meals-component">
                <Meals></Meals>
            </div>
            <div className="cart-component">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;