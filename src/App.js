import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import Hero from "./components/Hero";
import Genres from "./components/Genres";
import NewBook from "./components/NewBooks";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"
import AllBook from "./components/page/AllBook";
import Box from "./components/page/Box"
import Cart from "./components/page/Cart"


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                <Route path={'/genres'} element={<Genres/>}/>
                <Route path={'/newBooks'} element={<NewBook/>}/>
                <Route path={'/Books'} element={<Books/>}/>
                <Route path={'/aboutUs'} element={<AboutUs/>}/>
                <Route path={'/all'} element={<AllBook/>}/>
                <Route path={'/Box'} element={<Box/>}/>
                <Route path={'/Cart'} element={<Cart/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;