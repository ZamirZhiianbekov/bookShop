import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import Hero from "./components/Hero";
import Genres from "./components/Genres";
import NewBook from "./components/NewBooks";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"
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
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;