import React from 'react';
import './AboutUs.scss'
import Star from "../../img/image 9.png"
const AboutUs = () => {
    return (
        <div id="AboutUs">
            <div className="container">
                <div className="AboutUs">
                    <h1 className="AboutUs--us">About Us</h1>
                    <div className="AboutUs--lorem">
                        <img src={Star} alt=""/>
                        <p className="AboutUs--lorem__page">We believe that books have the power to change lives and books, and <br/>  we're dedicated to helping our customers find the perfect <br/>  book for them. Whether you're looking for an escape from <br/> reality, an educational read, or a book to inspire you, we've <br/>  got you covered.<br/>
                            Thank you so much for choosing our service to shop with us. We look forward to <br/>helping you discover your next favorite book ok!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;