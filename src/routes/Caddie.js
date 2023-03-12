import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaddieComp from "../components/CaddieComp";

const Caddie = () => {
    return (
        <div>
            <Navbar />
            
            <CaddieComp />

            <Footer />
        </div>
    );
};

export default Caddie;