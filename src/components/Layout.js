import React from 'react';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#d91d64' }}> {/* Cambia el color de fondo */}
        <Toolbar>
          <Box 
            component="img" 
            src="/WomanHelpLogo.png" // Cambia la ruta a tu imagen
            alt="Logo WomanHelp"
            sx={{ 
              width: 100, // Ajusta el tamaño del logo
              marginRight: 2 // Espacio entre el logo y los botones
            }} 
          />
          
          {/* Enlaces de navegación como botones */}
          <Box>
            {['/', '/panic-button', '/risk-map', '/fake-call', '/support-network'].map((path, index) => {
              const titles = ['Inicio', 'Botón de Pánico', 'Mapa de Riesgo', 'Llamada Falsa', 'Mapa de Auxilio'];
              return (
                <Button
                  key={index}
                  component={Link}
                  to={path}
                  sx={{
                    color: 'white',
                    marginRight: '15px',
                    fontWeight: 'bold',
                    backgroundColor: '#d91d64', // Color de fondo del botón
                    '&:hover': {
                      backgroundColor: '#ff4081', // Color de fondo al pasar el mouse
                    },
                    transition: 'background-color 0.3s, color 0.3s', // Transición suave
                  }}
                >
                  {titles[index]}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Layout;
