import React from 'react';
import '../../style/Books.scss'
import {NavLink} from "react-router-dom";
import the from "../../img/ee.png"
import pub from "../../img/eee.png"
import Rick from "../../img/eeee.png"
import Neil from "../../img/eb.png"
import nm from "../../img/bn.png"

const Books = () => {
    return (
        <div id="Books">
            <div className="container">
                <div className="Books">
                    <div className="Books--texts">
                        <h1 className="Books--texts__first">Books</h1>
                        <div className="Books--texts__nav">
                            <NavLink to={"/All"}>
                                View all
                            </NavLink>

                        </div>
                    </div>
                    <div className="Books--categories">
                        <div className="Books--categories__task">
                            <img src={the} alt=""/>
                            <h5 className="Books--categories__task--name">THE SUBTLE ART OF NOT GIVING A F*CK</h5>
                            <h5 className="Books--categories__task--second">by Mark Manson</h5>
                        </div>
                        <div className="Books--categories__task">
                            <img src={pub} alt=""/>
                            <h5 className="Books--categories__task--name">8 RULES OF LOVE</h5>
                            <h5 className="Books--categories__task--second">by Jay Shetty</h5>
                        </div>
                        <div className="Books--categories__task">
                            <img src={Rick} alt=""/>
                            <h5 className="Books--categories__task--name">THE CREATIVE ACT</h5>
                            <h5 className="Books--categories__task--second">by Rick Rubin with Neil Strauss</h5>
                        </div>
                        <div className="Books--categories__task">
                            <img src={Neil} alt=""/>
                            <h5 className="Books--categories__task--name">THE BOY, THE MOLE, THE FOX AND THE HORSE</h5>
                            <h5 className="Books--categories__task--second">by Charlie Mackesy</h5>
                        </div>
                        <div className="Books--categories__task">
                            <img src={nm} alt=""/>
                            <h5 className="Books--categories__task--name">HARRY POTTER</h5>
                            <h5 className="Books--categories__task--second">by J.K. Rowling</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;