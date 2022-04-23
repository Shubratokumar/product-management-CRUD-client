import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/manage">Manage Products</Link>
        </div>
    );
};

export default Header;