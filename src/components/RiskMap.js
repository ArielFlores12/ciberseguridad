import React from 'react';
import { Typography, Box } from '@mui/material';

function RiskMap() {
  return (
    <Box
      textAlign="center"
      mt={5}
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
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
          height: '300px',
          width: '100%',
          backgroundColor: '#c8e6c9', // Fondo verde claro para el mapa simulado
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Mapa de Zonas de Riesgo (en desarrollo)
        </Typography>
      </Box>
    </Box>
  );
}

export default RiskMap;
