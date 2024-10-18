import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate

function LandingPage() {
  const navigate = useNavigate(); // Cambia useHistory por useNavigate

  const goToHome = () => {
    navigate('/home'); // Redirige a la página de Home
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Color de fondo
      }}
    >
      {/* Cuadro para el logo */}
      <Box
        component="img"
        src="/Logo.png" // Asegúrate de cambiar esto por la ruta de tu logo
        alt="Logo"
        sx={{
          width: 300, // Ajusta el tamaño del logo
          marginBottom: 2, // Espacio entre el logo y el eslogan
        }}
      />

      {/* Eslogan */}
      <Typography variant="h4" component="h1" sx={{ marginBottom: 3, color: '#d91d64' }}>
      Tú aliada digital en cada paso
      </Typography>

      {/* Contenedor para alinear el botón a la derecha */}
      <Box
        sx={{
          width: '100%', // Ocupa todo el ancho
          display: 'flex',
          justifyContent: 'flex-end', // Alinea el contenido a la derecha
          padding: '0 20px', // Opcional: añade un poco de espacio en los lados
        }}
      >
        {/* Botón con flecha */}
        <Button
          variant="contained"
          onClick={goToHome}
          sx={{
            backgroundColor: '#ff4081',
            color: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: '#f50057',
            },
          }}
        >
          <span style={{ marginRight: 8 }}>➔</span> {/* Flecha a la derecha */}
          
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
