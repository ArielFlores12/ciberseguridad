import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic'; // Ícono de micrófono

function EmergencyVoice() {
  const handleVoiceCommand = () => {
    alert('Emergencia activada por comando de voz');
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
        backgroundColor: '#fffde7', // Fondo suave amarillo claro
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ color: '#f57f17', fontWeight: 'bold' }} // Color amarillo fuerte para el título
      >
        Activación de Emergencia por Voz
      </Typography>
      <Button
        variant="contained"
        color="warning"
        onClick={handleVoiceCommand}
        size="large"
        startIcon={<MicIcon />} // Ícono de micrófono
        sx={{
          padding: '10px 20px',
          fontSize: '1.2rem',
        }}
      >
        Simular Comando de Voz
      </Button>
    </Box>
  );
}

export default EmergencyVoice;
