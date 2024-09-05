import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import config from '../config';

export const MoviesContext = createContext();

export const MoviesProvider = ({children})=>{
    const [allMovies, setAllMovies] = useState([]);
    const [sectionMovies, setSectionMovies] = useState({});
    const [year, setYear] = useState(2024);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const checkServerStatus = async () => {
        try {
            const response = await axios.get(`${config.baseURL}/api/status`);
            if (response.data.status !== 'ok') {
                throw new Error('Server is down');
            }
        } catch (err) {
            setError('Server is down');
        }
    };
    

    const fetchMovies = async () => {
        try {
          const response = await axios.get(`${config.baseURL}/movies`); 
          setAllMovies(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
    

    const fetchMoviesByYearAndCategory = async (year, category) => {
        try{
            const url = `${config.baseURL}/movies/filter?year=${encodeURIComponent(year || '')}&category=${encodeURIComponent(category || '')}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching movies by year and category:', error);
        }
    }

    useEffect(() => {
        const loadMoviesForSections = async () => {
            const sections = {
                'section1': ["Animation", "Comedy", "Family"],
                'section2': ["Adventure", "Action", "Sci-Fi"],
                'section3': ["Thriller", "Horror", "Drama"]
            };

            const newSectionMovies = {};

            for (const [section, categories] of Object.entries(sections)) {
                // Fetch movies for all categories in the section
                const moviesPromises = categories.map(category =>
                    fetchMoviesByYearAndCategory('', category)
                );

                try {
                    const moviesResults = await Promise.all(moviesPromises);
                    // Flatten and combine the movies from all categories
                    const combinedMovies = moviesResults.flat();
                    // Remove duplicates based on movie ID
                    const uniqueMovies = Array.from(new Set(combinedMovies.map(movie => movie.id)))
                        .map(id => combinedMovies.find(movie => movie.id === id));

                    newSectionMovies[section] = uniqueMovies.slice(0, 12); // Adjust the slice based on your needs
                } catch (error) {
                    setError('Error loading movies for sections');
                    newSectionMovies[section] = []; // Handle errors by setting an empty array
                }finally{
                    setLoading(false);
                }
            }

            setSectionMovies(newSectionMovies);
        };

        loadMoviesForSections();
    }, []); // Empty dependency array ensures this runs only once

    return (
    <MoviesContext.Provider value={{ sectionMovies, fetchMoviesByYear, fetchMoviesByYearAndCategory,loading, error }}>
        {children}
    </MoviesContext.Provider>
    );
};

export const useMoviesContext = () => useContext(MoviesContext);
export default MoviesContext;

