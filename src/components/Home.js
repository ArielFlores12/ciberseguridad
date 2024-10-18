import React from 'react';
import { Typography, Button, Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      className="home"
      sx={{
        position: 'relative',  // Necesario para el posicionamiento absoluto de las imágenes
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Cambiado a minHeight para ajustar el espacio en blanco
        padding: 2,
      }}
    >
      {/* Imagen en la esquina superior izquierda */}
      <Box
        component="img"
        src="/SecretariaDeSeguridadPublicaLogo.png" // Cambia la ruta a tu imagen
        alt="SSP Logo"
        sx={{
          position: 'absolute',
          top: 20, // Espacio desde la parte superior
          left: 20, // Espacio desde la parte izquierda
          width: 150, // Tamaño de la imagen
        }}
      />

      {/* Imagen en la esquina superior derecha */}
      <Box
        component="img"
        src="/C5Logo.png" // Cambia la ruta a tu imagen
        alt="C5 Logo"
        sx={{
          position: 'absolute',
          top: 20, // Espacio desde la parte superior
          right: 20, // Espacio desde la parte derecha
          width: 150, // Tamaño de la imagen
        }}
      />

      {/* Logo central */}
      <Box
        component="img"
        src="/WomanHelpLogo.png" // Ruta del logo
        alt="Logo WomanHelp"
        sx={{
          width: 500, // Ajusta el tamaño del logo
          marginBottom: 4, // Espacio entre el logo y el título
        }}
      />

      {/* Título */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: '#d91d64', fontWeight: 'bold' }}
      >
        Bienvenida a WomanHelp
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
      <Stack spacing={2} direction="row" sx={{ marginBottom: 0 }}> {/* Ajustado el margen inferior */}
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

        {/* Nuevo botón para llamada falsa */}
        <Button
          variant="contained"
          component={Link}
          to="/fake-call"
          sx={{
            backgroundColor: '#4caf50', // Color verde para diferenciarlo
            color: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#388e3c',
            },
          }}
        >
          Llamada Falsa
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
