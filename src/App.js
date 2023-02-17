import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IMC from './components/IMC';
import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/imc" element={<IMC />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
