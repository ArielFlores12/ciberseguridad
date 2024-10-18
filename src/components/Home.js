import React from 'react';
import { Typography, Button, Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      className="home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Fondo suave
        padding: 2,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/path-to-your-logo.png" // Ruta del logo
        alt="Logo SafeHer"
        sx={{
          width: 150, // Ajusta el tamaño del logo
          marginBottom: 4, // Espacio entre el logo y el título
        }}
      />
      
      {/* Título */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: '#2E3B55', fontWeight: 'bold' }}
      >
        Bienvenida a SafeHer
      </Typography>
      
      {/* Descripción */}
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#555', marginBottom: 3 }}
      >
        Tu aplicación de seguridad personal.
      </Typography>
      
      {/* Botones */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          component={Link}
          to="/panic-button"
          sx={{
            backgroundColor: '#ff4081',
            color: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#f50057',
            },
          }}
        >
          Botón de Pánico
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/risk-map"
          sx={{
            borderColor: '#ff4081',
            color: '#ff4081',
            borderRadius: '20px',
            padding: '10px 20px',
            '&:hover': {
              borderColor: '#f50057',
              color: '#f50057',
            },
          }}
        >
          Mapa de Zonas de Riesgo
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
