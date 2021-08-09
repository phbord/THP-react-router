import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (<>
        <header>
            <nav>
                <Link to="/" className="navbar-brand me-2">Home</Link>
                <Link to="/about" className="navbar-brand me-2">About</Link>
                <Link to="/contact" className="navbar-brand me-2">Contact</Link>
                <Link to="/works" className="navbar-brand">Works</Link>
            </nav>
        </header>
    </>)
}

export default Navigation