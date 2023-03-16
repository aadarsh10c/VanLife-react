import React from "react";
import Header from "./Header";
//import Home from "./Home";
import Footer from "./Footer";
import About from "./About";

export default function Front(){
    return(
        <div className="front">
            <Header />
            <About />
            <Footer />
        </div>
    )
}