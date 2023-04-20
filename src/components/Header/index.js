import React from 'react';
import '../../style/Header.scss'
import {BsSearch} from "react-icons/bs";
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
                    <div className="header--input">

                        <BsSearch className="header--input__search"/>
                        <RiShoppingBagLine className="header--input__bags"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;