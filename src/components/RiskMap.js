import React from 'react';
import { Typography, Box } from '@mui/material';

function RiskMap() {
  return (
    <Box
      textAlign="center"
      mt={6}
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 700,
        margin: '0 auto',
        backgroundColor: '#f0f4c3', // Fondo suave amarillo claro
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ color: '#558b2f', fontWeight: 'bold' }} // Color verde para el título
      >
        Mapa de Zonas de Riesgo
      </Typography>
      <Typography 
        variant="body1" 
        gutterBottom
        sx={{ marginBottom: 3 }}
      >
        Aquí se mostrará un mapa con las áreas peligrosas.
      </Typography>

      {/* Placeholder para el mapa */}
      <Box
        sx={{
          height: '400px',
          width: '100%',
          backgroundColor: '#c8e6c9', // Fondo verde claro para el mapa simulado
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
        component="img"
        src="/mapa_zonas.png"
        alt="MZ simulacion"
        sx={{
          height: '400px',
          width: '100%',
          backgroundColor: '#c8e6c9', // Fondo verde claro para el mapa simulado
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Box>
      </Box>
    </Box>
  );
}

export default RiskMap;
