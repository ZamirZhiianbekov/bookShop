import React from 'react';
import './Geners.scss'
import {Link, NavLink, useNavigate} from "react-router-dom";
import  Sci from "../../img/image 8.png"
import  kids from "../../img/image 8 (1).png"
import  Psychology from "../../img/image 8 (2).png"
import  Roman from "../../img/image 8 (3).png"
import  Detective from "../../img/image 8 (4).png"
import  Finance from "../../img/image 8 (5).png"
import NewBook from "../NewBooks";

const Genres = () => {
    const navigate = useNavigate()
    return (
        <>
        <div id='Genres'>
            <div className="container">
                <div className="Genres">
                    <div className="Genres--text">
                            <h1 className="Genres--text__first">Genres</h1>
                        <div className="Genres--text__nav">
                            <Link onClick={() => window.scroll(0,0)} to="/All"> View all</Link>

                        </div>
                    </div>
                    <div className="Genres--categories">
                        <div className="Genres--categories__task">
                            <img src={Sci} alt=""/>
                            <h4 className="Genres--categories__task--name">Sci-Fi</h4>
                        </div>
                        <div className="Genres--categories__task">
                            <img src={kids} alt=""/>
                            <h4 className="Genres--categories__task--name">For kids</h4>
                        </div>
                        <div className="Genres--categories__task">
                            <img src={Psychology} alt=""/>
                            <h4 className="Genres--categories__task--name">Psychology</h4>
                        </div>
                        <div className="Genres--categories__task">
                            <img src={Roman} alt=""/>
                            <h4 className="Genres--categories__task--name">Romantic</h4>
                        </div>
                        <div className="Genres--categories__task">
                            <img src={Detective} alt=""/>
                            <h4 className="Genres--categories__task--name">Detective</h4>
                        </div>
                        <div className="Genres--categories__task">
                            <img src={Finance} alt=""/>
                            <h4 className="Genres--categories__task--name">Finance</h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            <NewBook/>
        </>
    );
};

export default Genres;