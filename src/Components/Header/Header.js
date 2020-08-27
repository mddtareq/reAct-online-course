import React from 'react';
import './Header.css';
import logo from '../../Images/logo.svg';
const Header = () => {
    return (
        <div className="header">
            <div className="logoImage">
                <img src={logo} alt=""></img>
            </div>
            <div className="navbar">
                <a href="">Courses</a>
                <a href="">Blog</a>
                <a href="">About</a>
                <a className="sign">Sign In</a>
            </div>
        </div>
    );
};

export default Header;