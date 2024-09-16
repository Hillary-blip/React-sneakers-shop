import React from "react";
import '../Styles/produxtCard.css';

const ProductCard = ({ cartItems, removeFromCart }) => {


    return (
        <div>
            {cartItems.map((item) => (
                <div className="Product" key={item.id}>
                    <img width={70} height={70} src={item.image} alt={item.name} />

                    <div className="text__card">
                        <h4 className="text">{item.name}</h4>
                        <p className="price">{item.price} руб.</p>
                    </div>
                    <div className="images">
                        <img
                            src="/img/delete-cart.svg"
                            alt="удалить товар"
                            onClick={() => removeFromCart(item.id)}
                        />
                    </div>
                </div>

            ))}
        </div>
    );
}

export default ProductCard;
