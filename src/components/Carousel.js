import React, { useState, useEffect, useRef } from 'react';
import '../styles/carousel.css'; // CSS for the carousel
import CarouselCard from './CarouselCard'; // Import the CarouselCard component

const Carousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Automatic slide interval
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [movies]); // Empty dependency array to run only once on mount


  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 700}px)`; // Adjust width based on the carousel item width
    }
  }, [currentIndex]);

  const prevSlide = () => {
    if (movies && movies.length) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    }
  };

  const nextSlide = () => {
    if (movies && movies.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel__slider" ref={carouselRef}>
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => ( // Iterating through movies array
              <div
                className={`carousel__slider__item ${
                  index === currentIndex ? 'carousel__slider__item--active' : ''
                }`}
                key={index}
              >
                <CarouselCard movie={movie} /> {/* Rendering CarouselCard for each movie */}
              </div>
            ))
          ) : (
            <div>No movies available</div> // Fallback if movies array is empty or undefined
          )}
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
