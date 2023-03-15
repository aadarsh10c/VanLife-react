import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

export default function Front(){
    return(
        <div className="front">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}