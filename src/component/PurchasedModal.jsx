import React from "react";
import '../Styles/productList.css';
import '../Styles/purchasedModal.css';

const PurchasedModal = ({ purchasedItems, handleClose }) => {
    return (
        <div className="purchased-modal">
            <div className="title-modal">
                <button className="Close" onClick={handleClose}>&#10094;</button>
                <h1>Купленные товары</h1>
            </div>
            <div className="product-container">
                {purchasedItems.length === 0 ? (
                    <p>Вы ещё ничего не купили</p>
                ) : (
                    purchasedItems.map(item => (
                        <div className="" key={item.id}>
                            <div className="product-list-inner">
                                <img width={70} height={70} src={item.image} alt={item.name} />
                                <p className="title-product">{item.name}</p>
                                <p className="cena">{item.price} руб.</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PurchasedModal;
