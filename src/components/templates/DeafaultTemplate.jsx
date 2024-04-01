import React from "react";
import Header from "../atoms/Header";
import Footer from "../atoms/Footer";

const DeafaultTemplate = ({ children }) => {
    return (
        <div className="defaultTemplate">
            <Header />
            <div className="contentContainer">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default DeafaultTemplate;