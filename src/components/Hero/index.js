import React from 'react';
import './Hero.scss'
import Genres from "../Genres";
const Hero = () => {
    return (
        <>
        <div id="Hero">

                <div className="Hero">
                    <h1 className="Hero-tittle">Welcome to our Bookshops</h1>
                    <h4 className="Hero-text">A place where you can get all the books you want!</h4>

            </div>
        </div>

            <Genres/>
        </>
    );

};

export default Hero;