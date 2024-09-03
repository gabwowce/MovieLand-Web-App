import React from 'react';
import axios from 'axios';
import '../styles/homePage.css';
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import ScrollingAd from '../components/ScrollingAd';
import {useMoviesContext} from '../context/MoviesContext'
import { useScrollingAdsContext } from '../context/AdContext';
import Carousel from '../components/Carousel';
import CarouselCard from '../components/CarouselCard';

function HomePage() {

  const { vibrantSection, fierySection, midnightSection, generateScrollingAds } = useScrollingAdsContext();
  const { sectionMovies } = useMoviesContext();

  // useEffect(()=>{
  //   const handleMoviesConteinerMargin = () => {
  //     const logo = document.getElementById("site-logo");
  //     const MoviesConteiners = document.querySelectorAll(".spec-movies");
  //     if (logo) {
  //       const rect = logo.getBoundingClientRect();
  //       const logoX = rect.left;
  //       console.log('Logo X coordinate:', logoX);
  
  //       MoviesConteiners.forEach(container => {
  //         container.style.gridTemplateColumns = `${logoX+200}px auto ${logoX+200}px`;
  //       });
  //     } else {
  //       console.log('Error: logo not found');
  //     }
  //   };
  //   handleMoviesConteinerMargin();
  //   window.addEventListener('resize', handleMoviesConteinerMargin);

  //   return () => {
  //     window.removeEventListener('resize', handleMoviesConteinerMargin);
  //   };
    
  // },[])

  return (
    <section className='movies'>
      <section id='top-section-movies' className='promoted-movies'>
        <h1 className='title-text'>Top Movies of the Week</h1>
        <Carousel movies={sectionMovies.section2} />
      </section>

      <section id='section-1-movies' className='spec-movies'>
          <h1 className='title-text'>Laughs & Adventures</h1>
          <div className='belt' id="vibrantSection">
              {generateScrollingAds(vibrantSection)}
          </div>
       
        {
          sectionMovies.section1?.length > 0
          ? (
            <div className="movie-conteiner">
              {sectionMovies.section1?.map((movie) =>(
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
        <h1 className='title-text'>Epic Journeys</h1>
        <div className='belt' id="fierySection">
            {generateScrollingAds(fierySection)}
        </div>
       
        {
          sectionMovies.section2?.length > 0
          ? (
            <div className="movie-conteiner">
              {sectionMovies.section2?.map((movie) =>(
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
         <h1 className='title-text'>Dark Tales & Chilling Thrills</h1>
         <div className='belt' id="midnightSection">
            {generateScrollingAds(midnightSection)} 
        </div>
        
        {
          sectionMovies.section3?.length > 0
          ? (
            <div className="movie-conteiner">
              {sectionMovies.section3?.map((movie) =>(
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
