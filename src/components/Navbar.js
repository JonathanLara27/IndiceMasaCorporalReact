import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Grid } from '@mui/material';
import { NavLink } from "react-router-dom";
import '../App.css'
export default function Navbar() {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar color="inherit">
                <Grid container align='center'>
                    <Grid item xs={6} md={6} lg={6} align='center'>
                        <Typography variant="h6">
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}
                                activeClassName="active">
                                Home
                            </NavLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} align='center'>
                        <Typography variant="h6">
                            <NavLink to="/imc" style={{ textDecoration: 'none', color: 'black' }}
                                activeClassName="active">
                                Calcula IMC
                            </NavLink>
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}