import React from "react";
import '../styles/scrollingAd.css';

const ScrollingAd = ({ categories = [], highlightIndex = null, keyword = "" }) => {
    
    return (

        <span className="marquee">
            {categories.map((category, index) => (
                <React.Fragment key={index}>
                    {highlightIndex === index ? (
                        <span className={keyword}>{category}</span>
                    ) : (
                        category
                    )}
                    &nbsp;
                </React.Fragment>
            ))}
        </span>
    );
}




export default ScrollingAd;
