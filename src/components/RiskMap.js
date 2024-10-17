import React from 'react';
import { Typography, Box } from '@mui/material';

function RiskMap() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Mapa de Zonas de Riesgo
      </Typography>
      <Typography variant="body1">
        Aquí se mostrará un mapa con las áreas peligrosas.
      </Typography>
    </Box>
  );
}

export default RiskMap;
