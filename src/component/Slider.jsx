import React, { useState } from "react";
import '../Styles/slider.css';

const slides = [
    {
        title: "Stan Smith, Forever!",
        img: "/img/slider.svg",
    },
    {
        title: "New Collection, Summer 2023",
        img: "/img/slider.svg",
    },
    {
        title: "Best Sneakers in Town!",
        img: "/img/slider.svg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((index) => (index === slides.length - 1 ? 0 : index + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((index) => (index === 0 ? slides.length - 1 : index - 1));
    };

    return (
        <div className="slider">
            <div className="slider__inner">
                <div className="text__block">
                    <h2 className="title__slider">{slides[currentSlide].title}</h2>
                    <button className="slider-btn">Купить</button>
                </div>
                <div className="img-slider">
                    <img src={slides[currentSlide].img} alt="Slide" />
                </div>
            </div>

            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
