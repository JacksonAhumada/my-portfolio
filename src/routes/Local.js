import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalComp from "../components/LocalComp";

const Local = () => {
    return (
        <div>
            <Navbar />
            
            <LocalComp />

            <Footer />
        </div>
    );
};

export default Local;