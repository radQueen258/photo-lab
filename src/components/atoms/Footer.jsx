import React from "react";
import { Typography } from '@mui/material';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{ marginTop: '20px', backgroundColor: '#171517', color: '#FFFFFF', padding: '20px 0', textAlign: 'center' }}>
        <Typography variant="body2">
            Footer content here
        </Typography>
        </footer>
        // <footer>
        //     <p>Footer content here</p>
        // </footer>
    );
};

export default Footer;