import React from 'react';
import {Link} from 'react-router-dom'


export const Header = () => {
    return ( 
        <div className="container">
                
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" href="#">Store</Link>
            </nav>
        </div>
    );
}
 
export default Header;