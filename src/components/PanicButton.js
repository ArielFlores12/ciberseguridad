import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function PanicButton() {
  const handlePanic = () => {
    alert('¡Alerta enviada a tus contactos y autoridades!');
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Botón de Pánico
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handlePanic}
        size="large"
      >
        Activar Alerta
      </Button>
    </Box>
  );
}

export default PanicButton;
