import React from 'react';
import './NewBooks.scss'
import shop from "../../img/image 6.png"
import pro from "../../img/image 7.png"
import max from "../../img/image 5.png"
import Books from "../Books";
const NewBook = () => {
    return (
        <>
        <div id="NewBook">
            <div className="container">
                <div className="NewBook">
                    <h1 className="NewBook--name">New Books</h1>
                    <div className="NewBook--author">
                        <div className="NewBook--author__first">
                            <img src={shop} alt=""/>
                            <h5 className="NewBook--author__first--tittle">The Climate Book: The Facts and the Solutions</h5>
                            <h5 className="NewBook--author__first--space">by Greta Thunberg</h5>
                        </div>
                        <div className="NewBook--author__second">
                            <img src={max} alt=""/>
                            <h5 className="NewBook--author__second--tittle">Rest Is Resistance: A Manifesto</h5>
                            <h5 className="NewBook--author__second--space">by Tricia Hersey</h5>
                        </div>
                        <div className="NewBook--author__third">
                            <img src={pro} alt=""/>
                            <h5 className="NewBook--author__third--tittle">A New Name: Septology VI-VII</h5>
                            <h5 className="NewBook--author__third--space">by Jon Fosse</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            <Books/>
        </>
    );
};

export default NewBook;