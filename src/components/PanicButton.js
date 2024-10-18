import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning'; // Icono de alerta

function PanicButton() {
  const handlePanic = () => {
    alert('¡Alerta enviada a usuarios cercanos y autoridades!');
  };

  return (
    <Box
      textAlign="center"
      mt={5}
      sx={{
        backgroundColor: '#fff3f4', // Fondo suave de alerta
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ color: '#d32f2f', fontWeight: 'bold' }} // Título más destacable
      >
        Botón de Pánico
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handlePanic}
        size="large"
        startIcon={<WarningIcon />} // Icono de advertencia
        sx={{
          backgroundColor: '#d32f2f',
          color: '#fff',
          padding: '15px 30px', // Aumentar tamaño del botón
          fontSize: '1.2rem', // Tamaño del texto más grande
          '&:hover': {
            backgroundColor: '#b71c1c', // Color al pasar el mouse
          },
        }}
      >
        Activar Alerta
      </Button>
    </Box>
  );
}

export default PanicButton;
