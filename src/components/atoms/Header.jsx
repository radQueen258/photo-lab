import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography,Button } from "@mui/material";
import styles from './Header.module.css'
const Header = () => {
    return (
        <AppBar position="static" style={{ background: '#03152d', color: '#FFFFFF' }}>
            <Toolbar className={styles.root}>
                    <Typography variant="h6" component={Link} to="/"  className={styles.title}>
                        Photo Lab
                    </Typography>
                    <Button component={Link} to="/photos" color="inherit">Photos</Button>
                    <Button component={Link} to="/info" color="inherit">Info</Button>
                </Toolbar>
        </AppBar>
    );
};

export default Header;