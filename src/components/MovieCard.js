import React from "react";
import '../styles/movieCard.css';

const MovieCard =({movie})=>{
    return(
        <div className="movie">
            <div>
                <p>{movie.release_year}</p>
            </div>
        
            <div>
                <img src={movie.img_url !== 'N/A' ? movie.img_url : 'https://via.placeholder.com/400'} alt={movie.title}/>
            </div>
        
            <div>
                <h3>{movie.title}</h3>
            </div>
    
        </div>
    )
}

export default MovieCard;