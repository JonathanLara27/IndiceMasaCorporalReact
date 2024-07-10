import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Grid, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import '../App.css'
export default function Navbar() {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar color="inherit">
                <Grid container align='center'>
                    <Grid item xs={6} md={6} lg={6} align='center'>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Button>
                                <Typography variant="h6">
                                    Home
                                </Typography>
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} align='center'>
                        <NavLink to="/imc" style={{ textDecoration: 'none', color: 'black' }}>
                            <Button>
                                <Typography variant="h6">
                                    Calcula IMC
                                </Typography>
                            </Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}