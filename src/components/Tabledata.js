import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(imc, nivelpeso) {
    return { imc, nivelpeso };
}

const rows = [
    createData('Por debajo de 18.5', 'Bajo peso'),
    createData('Entre 18.5 y 24.9', 'Peso Saludable'),
    createData('Entre 25 y 29.9', 'Sobrepeso'),
    createData('30 o más', 'Obesidad'),
];

export default function Tabledata(imc) {
    // verficar el imc para pintar la tabla
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        if (imc.imc < 18.5) {
            setIndex(0);
            setLoading(false);
        }
        if (imc.imc >= 18.5 && imc.imc <= 24.9) {
            setIndex(1);
            setLoading(false);
        }
        if (imc.imc >= 25 && imc.imc <= 29.9) {
            setIndex(2);
            setLoading(false);
        }
        if (imc.imc >= 30) {
            setIndex(3);
            setLoading(false);
        }
    }, [imc]);
    return (
        <TableContainer component={Paper} sx={{ maxWidth: '450px' }}>
            {loading ? <h1>Espedando al IMC...</h1> :
                (<Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>IMC</b></TableCell>
                            <TableCell><b>Nivel de peso</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {imc && rows.map((row, i) => (
                            <TableRow
                                key={row.imc}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={{ backgroundColor: i === index && (index === 0 || index === 2) ? '#FFFF00' : i === index && index === 1 ? '#00FF00' : i === index && index === 3 ? '#FF0000' : '' }}
                            >
                                <TableCell component="th" scope="row"
                                style={{color: i === index && (index === 0 || index === 2) ? '#000000' : i === index && index === 1 ? '#000000' : i === index && index === 3 ? '#FFFFFF' : '' }}
                                >
                                    {row.imc}
                                </TableCell>
                                <TableCell align="left"
                                style={{color: i === index && (index === 0 || index === 2) ? '#000000' : i === index && index === 1 ? '#000000' : i === index && index === 3 ? '#FFFFFF' : '' }}
                                >{row.nivelpeso}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>)}
        </TableContainer>
    );
}