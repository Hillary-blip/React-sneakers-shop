import React, { useState } from "react";
import '../Styles/header.css';
import Slider from "./Slider";
import ProductList from "./ProductList";
import Modal from "./Modal";
import PurchasedModal from "./PurchasedModal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setAddCart] = useState([]);
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [isPurchasedModalOpen, setIsPurchasedModalOpen] = useState(false);

    // Оформление покупки — добавляем товары в купленные
    const handlePurchase = () => {
        if (cart.length > 0) {
            setPurchasedItems(prevPurchasedItems => [
                ...prevPurchasedItems,
                ...cart // Добавляем товары в купленные
            ]);
            setAddCart([]); // Очищаем корзину
            setIsModalOpen(false); // Закрываем корзину
        }
    };

    // Открыть/закрыть модальное окно купленных товаров
    const handlePurchasedModalClick = () => {
        setIsPurchasedModalOpen(!isPurchasedModalOpen);
    };

    // Открыть/закрыть корзину
    const handleCartClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Добавить товар в корзину
    const addToCart = (product) => {
        setAddCart((prevCart) => [...prevCart, product]);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <header className="header">
            <div className="container">
                <div className="container__inner">
                    <img width={40} height={40} src="/img/headerLogo.jpeg" alt="Логотип" />
                    <div className="logo__text">
                        <h2 className="title__logo">REACT SNEAKERS</h2>
                        <p className="text__logo">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="img__cart">
                    <img onClick={handleCartClick} width={18} height={18} src="/img/cart.svg" alt="Корзина" />
                    <span onClick={handleCartClick} className="many">{totalPrice} руб.</span>
                    <img onClick={handlePurchasedModalClick} width={18} height={18} src="/img/profile.svg" alt="Профиль" />
                    <span>Профиль</span>
                </div>
            </div>
            <hr />

            {/* Скрываем слайдер и список товаров при открытии модального окна купленных товаров */}
            {!isPurchasedModalOpen && (
                <>
                    <Slider />
                    <div className="search">
                        <h1 className="search__title">Все кроссовки</h1>
                        <input placeholder="Поиск..." type="text" />
                    </div>
                    <ProductList addToCart={addToCart} />
                </>
            )}

            {/* Модальные окна */}
            <Modal 
                cartItems={cart} 
                handleClose={handleCartClick} 
                handlePurchase={handlePurchase} 
                isModalOpen={isModalOpen} 
                setCartItems={setAddCart} 
            />
            {isPurchasedModalOpen && (
                <PurchasedModal 
                    purchasedItems={purchasedItems} 
                    handleClose={handlePurchasedModalClick} // Используем правильную функцию для закрытия окна купленных товаров
                />
            )}
        </header>
    );
};

export default Header;
