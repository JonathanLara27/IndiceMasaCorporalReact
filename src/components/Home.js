import React from 'react';
import Footer from './Footer';
import { Typography, Grid, Card, CardContent } from '@mui/material';

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={6} align='center'>
                <Card style={{ marginTop: '100px', width: '90%' }}>
                    <CardContent>
                        <Typography variant="h4" style={{ marginTop: '30px' }}>
                            ÍNDICE DE MASA CORPORAL
                        </Typography>
                        <Typography align='justify' style={{ width: '50%', marginTop: '30px' }}>
                            El IMC es un método de evaluación fácil y económico para la categoría de peso: bajo peso, peso saludable, sobrepeso, y obesidad.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={6} style={{ marginTop: '10px' }} align='center'>
                <img src={require("../img/imc2.jpg")} alt="IMC" style={{ width: 'inherit', height: 'auto' }} />
            </Grid>
            <Footer />
        </Grid>
    );
}