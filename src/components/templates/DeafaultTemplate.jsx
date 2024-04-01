import React from "react";
import Header from "../atoms/Header";
import Footer from "../atoms/Footer";

const DeafaultTemplate = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default DeafaultTemplate;