import React from 'react';
import { Link} from 'react-router-dom';

const Header =  () => {
    return(
        <header>
            <div>
                <Link to="/">News Reduxs</Link>
                <Link to="/food">Food</Link>
            </div>
        </header>
    )
}

export default Header;