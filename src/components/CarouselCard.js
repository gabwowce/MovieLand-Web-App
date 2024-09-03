import React, { useEffect, useRef } from "react";
import '../styles/carouselCard.css';
import starImage from '../assets/star.png';

const CarouselCard = ({ movie }) => {
//   const imgRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (imgRef.current && canvasRef.current) {
//       const img = imgRef.current;
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0, img.width, img.height);

//       // Get pixel data from the right side of the image
//       const imageData = ctx.getImageData(img.width - 1, 0, 1, img.height);
//       const color = imageData.data; // RGBA data

//       // Create a color in hexadecimal
//       const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

//       // Apply the color to the card's background
//       document.documentElement.style.setProperty('--dynamic-color', rgbColor);
//     }
//   }, [movie.img_url]);

  return (
    <div className="carousel-card">
      
      <img className="blur-img" src={movie.img_url !== 'N/A' ? movie.img_url : 'https://via.placeholder.com/400'} alt={movie.title} />
      <img className="blur-img" src={movie.img_url !== 'N/A' ? movie.img_url : 'https://via.placeholder.com/400'} alt={movie.title} />

      <div className="carousel-card-info">
         <img
                
            src={movie.img_url !== 'N/A' ? movie.img_url : 'https://via.placeholder.com/400'}
            alt={movie.title}
            crossOrigin="anonymous"
        />
        <div className="carousel-card-title">
          <h3>{movie.title}</h3>
        </div>
        <div className="carousel-card-desc">
          <h3>In the sixth installment of the Scorcher franchise, 
            the one man who made a difference five times before, is
             about to make a difference again. Only this time, it’s
              different. Here we go again. Again.</h3>
        </div>
        <div className="carousel-card-rating">
          <h4>{movie.rating}</h4>
        </div>
        <div className="carousel-card-category">
          <h4>{movie.category}</h4>
        </div>
        <div className="carousel-card-release_year">
          <h4>{movie.release_year}</h4>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
