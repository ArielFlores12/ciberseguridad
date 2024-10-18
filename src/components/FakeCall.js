import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone'; // Icono de teléfono

function FakeCall() {
  const handleFakeCall = () => {
    alert('Simulando llamada falsa...');
  };

  return (
    <Box
      textAlign="center"
      mt={5}
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
        margin: '0 auto',
        backgroundColor: '#e3f2fd', // Fondo suave azul claro
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }} // Color azul para el título
      >
        Simulación de Llamada Falsa
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFakeCall}
        size="large"
        startIcon={<PhoneIcon />} // Ícono de teléfono
        sx={{
          padding: '10px 20px',
          fontSize: '1.2rem',
        }}
      >
        Activar Llamada Falsa
      </Button>
    </Box>
  );
}

export default FakeCall;
