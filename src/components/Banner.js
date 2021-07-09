import React from 'react';
import './../styles/Banner.css';
import logo from './../assets/logo.png';

const Banner = () => {

    const title = "La maison de la jungle";    
    return (
        <div className = "lmj-banner">
            <img src = {logo} alt= "La maison de la jungle" className = "lmj-logo" />
            <h1 className = "lmj-title">{title}</h1>
        </div>
    );
};

export default Banner;

