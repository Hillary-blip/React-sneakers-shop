import React from 'react';
import '../Styles/cart.css';

const Cart = ({ cartItems }) => (
    <div className="cart">
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - {item.price} руб.
                </li>
            ))}
        </ul>
    </div>
);

export default Cart;
