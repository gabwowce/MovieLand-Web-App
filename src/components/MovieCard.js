import React from "react";
import '../styles/movieCard.css';
import starImage from '../assets/star.png';

const MovieCard =({movie})=>{
    return(
        <div className="movie-card">
            <div className="movie-card-img">
                <img src={movie.img_url !== 'N/A' ? movie.img_url : 'https://via.placeholder.com/400'} alt={movie.title}/>
            </div>
            <div className="movie-card-info">
                <div className="movie-card-title">
                    <h3>{movie.title}</h3>
                </div>
                <div className="movie-card-rating">
                    <img className="rating-star" src={starImage} alt="star" /> 
                    <h4>{movie.rating}</h4>
                </div>
                <div className="movie-card-category">
                    <h4>{movie.category}</h4>
                </div>
                <div className="movie-card-release_year">
                    <h4>{movie.release_year}</h4>
                </div>
                
            </div>

    
        </div>
    )
}

export default MovieCard;