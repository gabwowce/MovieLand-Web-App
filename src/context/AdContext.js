import React, { createContext, useContext } from 'react';
import ScrollingAd from '../components/ScrollingAd';

// Create the context
export const ScrollingAdsContext = createContext();

// Define the AdProvider component
export const AdProvider = ({ children }) => {
    const vibrantSection = {
        categories: ["Animation", "Comedy", "Family"],
        highlightIndex: [1],
        keyword: "vibrant-highlighted"
    };
    const fierySection = {
        categories: ["Adventure", "Action", "Sci-Fi"],
        highlightIndex: [1],
        keyword: "fiery-highlighted"
    };
    const midnightSection = {
        categories: ["Crime", "Horror", "Thriller"],
        highlightIndex: [1],
        keyword: "midnight-highlighted"
    };

    // Function to generate ads
    const generateScrollingAds = (section) => {
        return Array.from({ length: 15 }, (_, index) => (
            <ScrollingAd
                key={index}
                categories={section.categories}
                highlightIndex={section.highlightIndex[index % section.highlightIndex.length] || null}
                keyword={section.keyword}
            />
        ));
    };

    return (
        <ScrollingAdsContext.Provider value={{ vibrantSection, fierySection, midnightSection, generateScrollingAds }}>
            {children}
        </ScrollingAdsContext.Provider>
    );
};

// Custom hook to use the scrolling ads context
export const useScrollingAdsContext = () => useContext(ScrollingAdsContext);
