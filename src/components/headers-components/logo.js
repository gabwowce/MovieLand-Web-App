import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/logo.css';

function Logo(){
    return(
        <div className='logo'>
            <h1 id="site-logo"><Link to="/">MovieLand</Link></h1>
        </div>
        
    )
}

export default Logo;