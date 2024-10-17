import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenida a SafeHer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tu aplicación de seguridad personal.
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" component={Link} to="/panic-button">
          Botón de Pánico
        </Button>
        <Button variant="outlined" component={Link} to="/risk-map">
          Mapa de Zonas de Riesgo
        </Button>
      </Stack>
    </div>
  );
}

export default Home;
