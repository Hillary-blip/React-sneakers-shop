import React, { useState, useEffect } from "react";
import '../Styles/modal.css';
import ProductCard from "./ProductCard";

const Modal = ({ cartItems, handleClose, setCartItems, isModalOpen, handlePurchase }) => {
    const [isClosing, setIsClosing] = useState(false); // Для анимации закрытия
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false); // Для отслеживания оформления заказа
    const isEmpty = cartItems.length === 0 && !isOrderConfirmed; // Условие, чтобы сообщение об оформлении заказа не заменяло пустую корзину
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const tax = (totalPrice * 0.05).toFixed(2);

    const removeFromCart = (productId) => {
        setCartItems((cartItems) => cartItems.filter(item => item.id !== productId));
    };

    const handleOverlayClick = () => {
        if (!isOrderConfirmed) {
            setIsClosing(true); // Запускаем анимацию закрытия 
        }
    };

    // Когда анимация завершится, вызываем handleClose
    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                setIsClosing(false);
                handleClose();
            }, 300); // Длительность анимации 0.3s
            return () => clearTimeout(timer); // Очищаем таймер при размонтировании
        }
    }, [isClosing, handleClose]);

    // Обработчик оформления заказа
    const handleOrderConfirmation = () => {
        setIsOrderConfirmed(true); // Устанавливаем, что заказ оформлен
        setCartItems([]); // Очищаем корзину
        // Убедимся, что модальное окно будет закрыто через некоторое время
        setTimeout(() => {
            handlePurchase(); // Выполняем дополнительное действие по оформлению заказа
        }, 4000)
    };

    // Сброс состояния при закрытии модального окна
    useEffect(() => {
        if (!isModalOpen) {
            setIsOrderConfirmed(false); // Сбрасываем состояние оформления заказа
        }
    }, [isModalOpen]);

    return (
        <div className={`overlay ${isModalOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`} onClick={handleOverlayClick}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-inner ${isEmpty || isOrderConfirmed ? 'empty' : ''}`} id={isOrderConfirmed ? "modal-inner" : "em"}>
                    <h1>Корзина</h1>

                    {/* Если корзина пуста и заказ не был оформлен */}
                    {isEmpty ? (
                        <div className="empty-cart">
                            <img width={120} height={120} src="/img/null-cart.svg" alt="Пустая корзина" />
                            <div className="text-empty">
                                <h2>Ваша корзина пуста</h2>
                                <p className="title-empty">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                <button onClick={handleOverlayClick} className="btn-empty btn-modal">Вернуться назад</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Если заказ был оформлен */}
                            {isOrderConfirmed ?  (
                                <div className="order-confirmation">
                                    <h2>Заказ оформлен!</h2>
                                    <p className="title-empty">Спасибо за ваш заказ. Вы можете продолжить покупки или закрыть это окно.</p>
                                    <button onClick={handleClose} className="btn-empty btn-modal">Закрыть</button>
                                </div>
                            ) : (
                                <>
                                    <ProductCard removeFromCart={removeFromCart} cartItems={cartItems} />
                                    <div className="end-block">
                                        <div className="full-price">
                                            <p>Итого</p>
                                            <span>{totalPrice} руб.</span>
                                        </div>
                                        <div className="nalog">
                                            <p>Налог 5%</p>
                                            <span>{tax} руб.</span>
                                        </div>
                                        <button className="btn-modal" onClick={handleOrderConfirmation}>
                                            Оформить заказ
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;

