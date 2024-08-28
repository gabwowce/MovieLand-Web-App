import React from 'react';
import '../../styles/searchBar.css';
import SearchIcon from '../../assets/search.svg'
import {useScrollContext} from '../../context/ScrollContext';

function SearchBar(){
    const { isScrolled } = useScrollContext(); 
    return(
        <div className={`search ${isScrolled ? 'search-scrolled' : 'search'}`}>  
            <input 
                placeholder="Search form movies" 
                value="Search"
                onChange={()=>{}}
            />
            <img 
                src={SearchIcon}
                alt="search"
                onClick={()=>{}}
            />
       </div>
    )
}

export default SearchBar;