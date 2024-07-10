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

const imcRanges = [
    { range: [0, 18.5], index: 0 },
    { range: [18.5, 25], index: 1 },
    { range: [25, 30], index: 2 },
    { range: [30, Infinity], index: 3 }
];

const getColorConfig = (index) => {
    const colorConfigs = {
        0: { backgroundColor: '#FFFF00', textColor: '#000000' }, // Yellow
        1: { backgroundColor: '#00FF00', textColor: '#000000' }, // Green
        2: { backgroundColor: '#FFFF00', textColor: '#000000' }, // Yellow
        3: { backgroundColor: '#FF0000', textColor: '#000000' }  // Red
    };
    return colorConfigs[index] || { backgroundColor: '', textColor: '' };
};

const getIndexForIMC = (imcValue) => {
    for (const entry of imcRanges) {
        if (imcValue >= entry.range[0] && imcValue < entry.range[1]) {
            return entry.index;
        }
    }
    return 0;
};

export default function Tabledata(imc) {
    // verficar el imc para pintar la tabla
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const newIndex = getIndexForIMC(imc.imc);
        setIndex(newIndex);
        setLoading(false);
    }, [imc]);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '450px' }}>
            {loading ? <h1>Espedando al IMC...</h1> :
                (<Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>IMC</b></TableCell>
                            <TableCell><b>Nivel de peso</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {imc && rows.map((row, i) => {
                            const isActiveRow = i === index;
                            const { backgroundColor, textColor } = isActiveRow ? getColorConfig(index) : { backgroundColor: '', textColor: '' };

                            return (
                                <TableRow
                                    key={row.imc}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={{ backgroundColor }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ color: textColor }}
                                    >
                                        {row.imc}
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ color: textColor }}
                                    >
                                        {row.nivelpeso}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>)}
        </TableContainer>
    );
}