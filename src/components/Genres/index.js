import React from 'react';
import '../../style/Geners.scss'
import Slider from "react-slick";
import Book1 from '../../img/image 8 (1).png'
import {NavLink} from "react-router-dom";


const Genres = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };
    return (
        <div id='Genres'>
            <div className="container">
                <div className="Genres">
                    <div className="Genres--text">
                            <h1 className="Genres--text__first">Genres</h1>
                        <div className="Genres--text__desc">
                            <NavLink to={"/all"}>
                                View all
                            </NavLink>
                        </div>
                    </div>
                    <div className="Genres--slider">
                        <Slider {...settings}>
                            <div className="Genres--slider__book">
                                <div className="Genres--slider__book--img">
                                    <img src={Book1} alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Genres;