import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Vans from './Vans';
import { Routes , Route } from 'react-router-dom'

export default function Front(){
    return(
        <div className="front">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/vans' element={<Vans />} />
            </Routes>
            <Footer />
        </div>
    )
}