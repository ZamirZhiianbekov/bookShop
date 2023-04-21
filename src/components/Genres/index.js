import React from 'react';
import '../../style/Geners.scss'
import {NavLink} from "react-router-dom";
const Genres = () => {
    return (
        <div id='Genres'>
            <div className="container">
                <div className="Genres">
                    <div className="Genres--text">
                            <h1 className="Genres--text__first">Genres</h1>
                        <div className="Genres--text__nav">
                            <NavLink to={"/All"}>
                                View all books
                            </NavLink>
                            <NavLink to={"/Box"}>
                               Box
                            </NavLink>
                            <NavLink to={"/Cart"}>
                                Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genres;