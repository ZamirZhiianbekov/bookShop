import React from "react";
import pro1 from "../../../img/Product Image.svg"
import "./style.scss"
import {AiOutlineHeart} from "react-icons/ai";
import {TbVectorTriangle} from "react-icons/tb";



const Box = () => {
    return (
        <>
            <div id="card">
                <div className="container">
                        <div className="card">
                            <img src={pro1} width="300" />
                            <div className="card--texts">
                                <div className="card--texts__title">
                                    <div className="title">
                                        <h1 className="h1">THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                        <div className="icons">
                                            <AiOutlineHeart/>
                                            <TbVectorTriangle/>
                                        </div>
                                    </div>

                                    <p className="p1">by Charlie Mackesy</p>
                                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="add">
                                    <p className="p2">Quantity: 1</p>
                                    <p className="p3">$99</p>
                                </div>
                                <div className="icon">
                                    <button>Add to Cart </button>
                                    <div className="number">
                                        <h1 className="title">-</h1>
                                        <h3 className="text">1</h3>
                                        <h1 className="title">+</h1>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Box;