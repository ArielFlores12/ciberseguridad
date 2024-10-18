import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WomanHelp
          </Typography>
          <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Inicio</Link>
          <Link to="/panic-button" style={{ color: 'white', marginRight: '15px' }}>Botón de Pánico</Link>
          <Link to="/risk-map" style={{ color: 'white', marginRight: '15px' }}>Mapa de Riesgo</Link>
          <Link to="/fake-call" style={{ color: 'white', marginRight: '15px' }}>Llamada Falsa</Link>
          <Link to="/support-network" style={{ color: 'white', marginRight: '15px' }}>Mapa de Auxilio</Link>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Layout;
