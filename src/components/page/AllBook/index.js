import React, {useState} from 'react';
import "../../page/AllBook/style.scss"
import BookImg2 from "../../../img/2img.png"
import BookImg3 from "../../../img/3img.png"
import BookIm5 from "../../../img/5img.png"
import BookImg6 from "../../../img/6img.png"
import BookIm7 from "../../../img/7img.png"
import BookIm8 from "../../../img/8img.png"
import BookIm9 from "../../../img/9img.png"
import BookIm1 from "../../../img/1img.png"
import BookImg from "../../../img/book.png"
import {NavLink} from "react-router-dom";

const AllBook = () => {
    return (
        <div id="allBooks">
            <div className="container">
                <div className="allBooks">
                    <div className="allBooks--name">
                        <h1>All Books</h1>
                        <h5>Here you can find all the books you need</h5>
                    </div>

                    <div className="allBooks--tabs">
                        <div className="allBooks--tabs__right">
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 0",
                            }}>
                                <h2>Filter</h2>
                                <a style={{
                                    padding: "0 10px",
                                }} href="#">Clear filters</a>
                            </div>
                            <h3>Genres</h3>
                            <div className="allBooks--tabs__right--input">
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Autographed Books</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Sci-Fi</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">For kids</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">For teenagers</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Finance</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Detective</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Romantic</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Psychology</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Self-Improvement</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Educational</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Literature</label> <br/>
                                <input type="radio" id="autographed" name="autographed"/>
                                <label htmlFor="autographed">Religion</label> <br/>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column"
                        }} className="allBooks--tabs__left">
                            <div style={{
                                display: "flex",
                                justifyContent: "end"
                            }}>
                                <select style={{
                                    border: "1px solid #818EEA",
                                    borderRadius: "8px",
                                    color: "#818EEA",
                                    padding: "7px"
                                }} name="cars" id="cars">
                                    <option value="volvo">Sort By Popular</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gridTemplateRows: "repeat(3, 1fr)",
                                fontSize: "13px",
                                gridColumnGap: "35px",
                                gridRowGap: "0px"
                            }}>
                                <div style={{
                                    padding: "20px 0"
                                }}>
                                    <img src={BookIm1} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>THE SUBTLE ART OF <br/>NOT GIVING A F*CK</h2>
                                        <p>by Mark Manson</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookImg2} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>8 RULES OF LOVE</h2>
                                        <p>by Jay Shetty</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookImg3} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>THE CREATIVE ACT</h2>
                                        <p>by Rick Rubin with Neil Strauss</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                   <NavLink to={"/Box"}> <img src={BookImg} alt=""/></NavLink>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>"THE BOY, THE
                                        MOLE,<br/> THE FOX AND
                                        THE <br/>HORSE"</h2>
                                        <p>by Charlie Mackesy</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookIm5} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>HARRY POTTER</h2>
                                        <p>by J.K. Rowling</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookImg6} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>IT ENDS WITH US</h2>
                                        <p>by Colleen Hoover</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookIm7} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>IT STARTS WITH US</h2>
                                        <p>by Colleen Hoover</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookIm8} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>HEART BONES</h2>
                                        <p>by Colleen Hoover</p>
                                    </div>

                                </div>
                                <div style={{
                                    padding: "20px 20px"
                                }}>
                                    <img src={BookIm9} alt=""/>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start"
                                    }}><h2>SOMEONE ELSE'S <br/> SHOES</h2>
                                        <p>by Jojo Moyes</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllBook;