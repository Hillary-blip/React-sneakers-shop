import React, { useState } from "react";
import '../Styles/productList.css';



const ProductList = ({ addToCart }) => {

    const products = [
        {
            id: 1,
            name: "Nike Blazer Mid Suede",
            price: 12999,
            image: "/img/cross1.svg",
            isFavorite: false,
            inCart: false
        },
        {
            id: 2,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 3,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross3.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 4,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 5,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross1.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 6,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 7,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross3.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 8,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 9,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross1.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 10,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 11,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross3.svg",
            isFavorite: true,
            inCart: false
        },
        {
            id: 12,
            name: "Nike Air Max 270",
            price: 13999,
            image: "/img/cross4.svg",
            isFavorite: true,
            inCart: false
        },

    ]

    const [clickedProducts, setClickedProducts] = useState({});

    const handleClick = (product) => {
        addToCart(product);
        setClickedProducts((prevState) => ({
            ...prevState,
            [product.id]: true
        }));

        // Через 2 секунды вернуть иконку назад
        setTimeout(() => {
            setClickedProducts((prevState) => ({
                ...prevState,
                [product.id]: false
            }));
        }, 2000);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-inner">
                        <div className="img__block">
                            <img src="/img/live_white.jpeg" alt="Live icon" />
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h2 className="title-product">{product.name}</h2>
                        <div className="price-block">
                            <div className="">
                                <p className="cena">Цена:</p>
                                <span className="cena-inner">{product.price} руб.</span>
                            </div>
                            <img 
                                className={clickedProducts[product.id] ? "green-like" : "add-icon"} 
                                src={clickedProducts[product.id] ? "/img/green-like.svg" : "/img/add-white.svg"}
                                alt="добавить товар"
                                onClick={() => handleClick(product)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList