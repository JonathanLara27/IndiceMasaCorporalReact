import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Typography, Grid, TextField, Box, Card, CardContent } from '@mui/material';
import Tabledata from './Tabledata';
import Swal from 'sweetalert2';

function calculateCategory(imc) {
    for (const entry of imcCategories) {
        if (imc >= entry.range[0] && imc < entry.range[1]) {
            return entry.category;
        }
    }
    return 'Categoría no encontrada';
}
const imcCategories = [
    { range: [0, 18], category: 'Bajo Peso' },
    { range: [18, 25], category: 'Peso Saludable' },
    { range: [25, 30], category: 'Sobrepeso' },
    { range: [30, Infinity], category: 'Obesidad' }
];
export default function IMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(20);
    const [categoria, setCategoria] = useState('');
    const [pesoIdealMenor, setPesoIdealMenor] = useState(0);
    const [pesoIdealMayor, setPesoIdealMayor] = useState(0);
    const [errorpeso, setErrorpeso] = useState(false);
    const [erroraltura, setErroraltura] = useState(false);
    
    useEffect(() => {
        if (peso > 0 && altura > 0) {
            // seteamos el imc pero con 2 decimales
            setImc((peso / (altura * altura)).toFixed(2));
            setCategoria(calculateCategory(imc));
        }
        setErrorpeso(peso < 0);
        setErroraltura(altura < 0);
    }, [peso, altura,imc]);
    // validar que no se ingrese mas de 3 metros de altura
    useEffect(() => {
        if (altura > 2.70 || altura < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La altura debe estar en un rango de [0 - 2.70] metros!',
                timer: 5000,
                timerProgressBar: true,
            })
            setAltura(0);
        }
        // seteamos el peso ideal
        setPesoIdealMenor((18.5 * (altura * altura)).toFixed(2));
        setPesoIdealMayor((24.9 * (altura * altura)).toFixed(2));
    }, [altura]);
    // validamos que el peso no sea mayor a 300
    useEffect(() => {
        if (peso > 300 || peso <0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El peso debe estar en un rango de [0 - 300] kilogramos!',
                timer: 5000,
                timerProgressBar: true,
            })
            setPeso(0);
        }
    }, [peso]);

    return (
        <Grid container>
            <Grid item xs={12} md={6} lg={6} align='center' style={{ padding: '10px' }}>
                {/*Formulario para ingresar peso y altura*/}
                <Card>
                    <CardContent>
                        <Grid item xs={12} md={12} lg={12} align='center'>
                            <Typography variant="h4">
                                Calculadora de IMC para adultos
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} align='center'>
                            <TextField
                                id="outlined-number"
                                label={errorpeso ? 'Error' : 'Peso'}
                                type="number"
                                inputProps={{ step: 0.1 }}
                                variant="outlined"
                                style={{ marginTop: '20px' }}
                                value={peso}
                                // defaultValue={peso}
                                color={errorpeso ? 'error' : 'primary'}
                                error={errorpeso}
                                focused
                                onChange={(e) => setPeso(e.target.value)}
                                helperText={errorpeso ? 'El peso no puede ser negativo' : 'Peso en kilogramos.'}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} align='center'>
                            <TextField
                                id="outlined-number"
                                label={erroraltura ? 'Error' : 'Altura'}
                                type="number"
                                inputProps={{ step: 0.01, }}
                                variant="outlined"
                                color={erroraltura ? 'error' : 'primary'}
                                error={erroraltura}
                                value={altura}
                                // defaultValue={altura}
                                style={{ marginTop: '20px' }}
                                onChange={(e) => setAltura(e.target.value)}
                                helperText={erroraltura ? 'La altura no puede ser negativa' : 'Altura en metros.'}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} align='center'>
                            <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                El IMC se calculará cuando ingreses tu peso y altura correctamente.
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>
                {pesoIdealMenor > 0 && pesoIdealMayor > 0 && peso > 0 && altura > 0 && (
                    <Card style={{ marginTop: '20px', padding: '30px' }}>
                        <CardContent>
                            <Typography variant="h5" align='center'>
                                <b>Peso ideal para su estatura de {altura} : </b>
                            </Typography>
                            <Typography variant="h6" align='center'>
                                Entre {pesoIdealMenor} y {pesoIdealMayor} kilogramos
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Grid>
            {/*Resultados*/}
            {peso > 0 && altura > 0 &&
                (
                    <Grid item xs={12} md={6} lg={6} style={{ padding: '10px' }}>
                        <Card style={{ marginBottom: '20px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" align='center'>
                                    Para la información que ingresó:
                                </Typography>
                                <Typography>
                                    <b>Estatura:</b> {altura} metros
                                </Typography>
                                <Typography>
                                    <b>Peso:</b> {peso} kilogramos
                                </Typography>
                                <Typography component="div" align='justify'>
                                    Su IMC es <b>{imc}</b>, lo que indica que su peso esta en la categoría de <b>{categoria}</b> para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos.
                                </Typography>
                                <Typography component="div" align='justify'>
                                    Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece.
                                </Typography>
                            </CardContent>
                        </Card>
                        {/* Cuadrito para IMC */}
                        <Box align='center'>
                            <Tabledata imc={imc} />
                        </Box>
                    </Grid>
                )}
            {/* Como pie de pagina */}
            <Footer />
        </Grid>
    );
}