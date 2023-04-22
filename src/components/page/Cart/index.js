import React from 'react';
import "../../page/Cart/style.scss"
import pro1 from "../../../img/Product Image.svg"
import pro2 from "../../../img/Product Image (1).svg"
import pro3 from "../../../img/Product Image (2).svg"
const Cart = () => {
    return (
        <div id="card">
            <div className="container">
                <div className="flex">
                    <div className="cards">
                        <div className="card">
                            <img src={pro1} width="300" />
                            <div className="card--texts">
                                <div className="card--texts__title">
                                    <div className="title">
                                        <h1 className="h1">THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                        <h2><a href="">Remove</a></h2>
                                    </div>

                                    <p className="p1">by Charlie Mackesy</p>
                                </div>
                                <div className="add">
                                    <p className="p2">Quantity: 1</p>
                                    <p className="p3">$99</p>
                                </div>

                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="card">
                            <img src={pro2} width="300px" alt=""/>
                            <div className="card--texts">
                                <div className="card--texts__title">
                                    <div className="title">
                                        <h1 className="h1">THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                                        <h2><a href="">Remove</a></h2>
                                    </div>

                                    <p className="p1">by Mark Manson</p>
                                </div>
                                <div className="add">
                                    <p className="p2">Quantity: 1</p>
                                    <p className="p3">$99</p>

                                </div>
                            </div>

                        </div>
                        <div className="line"></div>
                        <div className="card">
                            <img src={pro3} width="300" alt=""/>
                            <div className="card--texts">
                                <div className="card--texts__title">
                                    <div className="title">
                                        <h1 className="h1">HARRY POTTER</h1>
                                        <h2><a href="">Remove</a></h2>
                                    </div>

                                    <p className="p1">by J.K. Rowling</p>
                                </div>
                                <div className="add">
                                    <p className="p2">Quantity: 1</p>
                                    <p className="p3">$99</p>

                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="summary">
                        <h1>Order Summary</h1>
                        <div className="order">
                            <h3>Shipping</h3>


                        </div>
                        <div className="order">
                            <h3>Payment</h3>

                        </div>

                        <div className="order">
                            <h3 className="orTitle">Total</h3>
                            <h3 className="h3">$188</h3>
                        </div>
                        <button className="btn">Continue to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;