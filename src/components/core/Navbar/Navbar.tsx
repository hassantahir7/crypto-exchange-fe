import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Typography variant="h6" className={styles.logo}>
                        Crypto Exchange
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
