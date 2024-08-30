import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

export const MoviesProvider = ({children})=>{
    const [allMovies, setAllMovies] = useState([]);
    const [topSectionMovies, setTopSectionMovies] = useState([]);
    const [section1Movies, setSection1Movies] = useState([]);
    const [section2Movies, setSection2Movies] = useState([]);
    const [section3Movies, setSection3Movies] = useState([]);
    const [year, setYear] = useState(2024);

    const fetchMovies = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/movies`); 
          setAllMovies(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
    
    const fetchMoviesByYear = async (year) => {
        try{
            const response = await axios.get(`http://localhost:3002/movies/year/${year}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies by year:', error);
        }
    }

    const fetchMoviesByYearAndCategory = async (year, category) => {
        try{
            const url = `http://localhost:3002/movies/filter?year=${encodeURIComponent(year || '')}&category=${encodeURIComponent(category || '')}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies by year and category:', error);
        }
    }

    useEffect(()=>{
        const loadMovies = async () => {
            await fetchMovies();
            const moviesBy2024 = await fetchMoviesByYear(2024);

            const fetchMoviesForSections = async () =>{
                const comedyMovies = await fetchMoviesByYearAndCategory('','Animation');
                const actionMovies = await fetchMoviesByYearAndCategory('','Action');
                const dramaMovies = await fetchMoviesByYearAndCategory('','Drama');

                setSection1Movies(comedyMovies.slice(0,10));
                setSection2Movies(actionMovies.slice(0,10));
                setSection3Movies(dramaMovies.slice(0,10));
            };
            fetchMoviesForSections();
        };
        loadMovies();
    }, []);


    return (
    <MoviesContext.Provider value={{ section1Movies, section2Movies, section3Movies, fetchMoviesByYear, fetchMoviesByYearAndCategory }}>
        {children}
    </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => useContext(MoviesContext);
export default MoviesContext;

