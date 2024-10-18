import React from 'react';
import { Typography, Box } from '@mui/material';

function RiskMap() {
  return (
    <Box
      textAlign="center"
      mt={6}
      sx={{
        padding: 4,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra más suave y amplia
        maxWidth: 800, // Aumenta el ancho máximo
        margin: '0 auto',
        backgroundColor: '#fafafa', // Fondo blanco para mayor contraste
      }}
    >
      {/* Título */}
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ 
          color: '#d91d64', // Color distintivo del esquema de color
          fontWeight: 'bold',
          fontSize: '2rem', // Tamaño de fuente ajustado para mayor impacto
        }}
      >
        Mapa de Zonas de Riesgo
      </Typography>

      {/* Descripción */}
      <Typography 
        variant="body1" 
        gutterBottom
        sx={{ 
          marginBottom: 3, 
          color: '#555', // Texto secundario más oscuro
          fontSize: '1.1rem',
        }}
      >
        Consulta las áreas de riesgo en tu localidad.
      </Typography>

      {/* Contenedor para el mapa */}
      <Box
        sx={{
          height: '450px', // Altura del contenedor del mapa
          width: '100%',
          borderRadius: '12px',
          backgroundColor: '#e8f5e9', // Fondo verde claro
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Sombra para el contenedor del mapa
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Imagen del mapa */}
        <Box
          component="img"
          src="/mapa_zonas.png"
          alt="Simulación de mapa de zonas de riesgo"
          sx={{
            height: '100%', // Ajustar imagen a la altura del contenedor
            width: '100%',
            objectFit: 'cover', // Cubrir el espacio sin deformar la imagen
          }}
        />
      </Box>
    </Box>
  );
}

export default RiskMap;
