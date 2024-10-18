import React from 'react';
import { Box, Typography } from '@mui/material';

function NotFound() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" color="error">
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1">
        Lo sentimos, la página que buscas no existe.
      </Typography>
    </Box>
  );
}

export default NotFound;
