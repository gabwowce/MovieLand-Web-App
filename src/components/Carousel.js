import React, { useState, useEffect,useRef } from 'react';
import '../styles/carousel.css'; // Make sure to include your CSS here

const Carousel = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 4000; // Automatic slide interval
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.style.transform = `translateX(-${currentIndex * 200}px)`;
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel__slider" ref={carouselRef}>
          {items.map((item, index) => (
            <div
              className={`carousel__slider__item ${
                index === currentIndex ? 'carousel__slider__item--active' : ''
              }`}
              key={index}
            >
              <div className="item__3d-frame">
                <div className="item__3d-frame__box item__3d-frame__box--front">
                  <h1>{item}</h1>
                </div>
                <div className="item__3d-frame__box item__3d-frame__box--left"></div>
                <div className="item__3d-frame__box item__3d-frame__box--right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="carousel__prev" onClick={prevSlide}>
          <i className="fas fa-angle-left" />
        </div>
        <div className="carousel__next" onClick={nextSlide}>
          <i className="fas fa-angle-right" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;