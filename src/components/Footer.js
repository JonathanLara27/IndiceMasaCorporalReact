import React from 'react';

import { Typography, IconButton, Grid } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Grid container item xs={12} md={12} lg={12} align='center' style={{ marginTop: '20px' }}>
            {/*Icono de github */}
            <Grid item xs={12} md={12} lg={12} align='center'>
            <IconButton aria-label="github" href="https://github.com/JonathanLara27" target='_blank'>
                <GitHubIcon />
            </IconButton>
            {/*Icono de linkedin */}
            <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/jonathan-brain-lara-zatta-57609b263/" target='_blank'>
                <LinkedInIcon />
            </IconButton>
            </Grid>
            <Grid item xs={12} md={12} lg={12} align='center'>
            <Typography>
                Creado por Jonathan Lara Zatta © 2023 - IMC
            </Typography>
            </Grid>
        </Grid>
    );
}