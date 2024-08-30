import React from 'react';
import axios from 'axios';
import '../styles/homePage.css';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { useMoviesContext } from '../context/MoviesContext';

function HomePage() {

  const {section1Movies, section2Movies, section3Movies} = useMoviesContext();

  useEffect(()=>{
    const handleMoviesConteinerMargin = () => {
      const logo = document.getElementById("site-logo");
      const specMoviesConteiners = document.querySelectorAll(".spec-movies");
      if (logo) {
        const rect = logo.getBoundingClientRect();
        const logoX = rect.left;
        console.log('Logo X coordinate:', logoX);
  
        specMoviesConteiners.forEach(container => {
          container.style.margin = `0 ${logoX}px`;
        });
      } else {
        console.log('Error: logo not found');
      }
    };
    handleMoviesConteinerMargin();
    window.addEventListener('resize', handleMoviesConteinerMargin);

    return () => {
      window.removeEventListener('resize', handleMoviesConteinerMargin);
    };
    
  },[])

  return (
    <section className='movies'>
      <section id='top-section-movies' className='promoted-movies'>
        {/* <h1>Promoted Movies</h1>
        <h2>Check out these trending movies, specially selected and highlighted for you. 
          Discover your next favorite film!</h2> */}
      </section>

      <section id='section-1-movies' className='spec-movies'>
        <div className='movie-section-title'>
          <h1>Laughs & Adventures</h1>
          <div className='belt'>
            <h2 className='scrolling-text'>
              Feel-good movies that will bring a smile to your face and joy to your heart.
              Feel-good movies that will bring a smile to your face and joy to your heart.
            </h2>
          
          </div>
        </div>
       
        {
          section1Movies?.length > 0
          ? (
            <div className="movie-conteiner">
              {section1Movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : 
          (
            <div className='empty'> 
              <h2>No movies found</h2>
            </div>
          )
        } 
      </section>

      <section id='section-2-movies' className='spec-movies'>
        <div className='movie-section-title'>
          <h1>Epic Journeys</h1>
          <div className='belt'>
            <h2 className='scrolling-text'>
              Action-packed adventures that will keep you on the edge of your seat.

            </h2>
          
          </div>
         
        </div>
       
        {
          section2Movies?.length > 0
          ? (
            <div className="movie-conteiner">
              {section2Movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : 
          (
            <div className='empty'> 
              <h2>No movies found</h2>
            </div>
          )
        } 
      </section>

      <section id='section-2-movies' className='spec-movies'>
        <div className='movie-section-title'>
          <h1>Dark Tales & Chilling Thrills</h1>
          <h2>Explore the intense, the dramatic, and the terrifying in these gripping films.</h2>
        </div>
        
        {
          section3Movies?.length > 0
          ? (
            <div className="movie-conteiner">
              {section3Movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : 
          (
            <div className='empty'> 
              <h2>No movies found</h2>
            </div>
          )
        } 
      </section>
    </section>
    
  );
}

export default HomePage;
