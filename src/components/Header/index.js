import React from 'react';
import '../../style/Header.scss'
import {RiShoppingBagLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";




const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--nav">
                        <NavLink to={"/"}>
                            Bookshop
                          </NavLink>
                        <NavLink to={"/genres"}>
                            Categories
                        </NavLink>
                        <NavLink to={"/newBooks"}>
                            Recent
                        </NavLink>
                        <NavLink to={"/Books"}>
                            Books
                        </NavLink>
                        <NavLink to={"/aboutUs"}>
                            About Us
                        </NavLink>

                    </div>
                    <div className="header--inputs">
                        <input  className="header--inputs__search" type="text" placeholder=""/>
                        <RiShoppingBagLine className="header--inputs__bags"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;