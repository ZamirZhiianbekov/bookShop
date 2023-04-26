import React, {useState} from 'react';
import './Header.scss'
import {RiShoppingBagLine} from "react-icons/ri";
import {Link, NavLink} from "react-router-dom";
import focs from "../../img/Vector.svg"
import { HiOutlineSearch } from "react-icons/hi";




const Header = () => {
    const [click, setClick] = useState(false)
    console.log(click)
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
                        <div className="header--inputs__search" style={{
                        }}>
                            <HiOutlineSearch className="icon" onClick={() => setClick(!click)} style={{
                            position: "absolute",
                                margin: "0 5px",
                                cursor: "pointer"
                            }
                            }/>
                            <input type="search" placeholder="search" style={{
                              width: click ? "200px": "",
                                height: click ? "30px" : "",
                                border: "",
                                fontSize: "17px",
                                borderRadius: "12px",
                                boxShadow: "2px 3px 6px gray",
                                background : "#f5f2f2",
                                paddingLeft: click ? "30px" : ""



                            }
                            }/>
                        </div>
                        <Link onClick={() => window.scroll(0,0)} to="/Cart"> <RiShoppingBagLine className="header--inputs__bags"/></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;