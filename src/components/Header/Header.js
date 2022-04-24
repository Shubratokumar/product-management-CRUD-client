import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Link className='links' to="/">Add Products</Link>
            <Link className='links' to="/product">Products</Link>
            <Link className='links' to="/manage">Manage Products</Link>
            <Link className='links' to="/update">Update Products</Link>
        </div>
    );
};

export default Header;