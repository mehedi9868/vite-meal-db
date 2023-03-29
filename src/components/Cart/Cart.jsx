import React from 'react';
import './Cart.css';

const Cart = ({ names }) => {
    console.log(names);
    return (
        <div className='cart'>
            <h2 className='cart-title'>Added Items</h2>
            <ol className='added-items'>
                {
                    names.map((name) => <li>{name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;