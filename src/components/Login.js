import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      onLogin(user);
      navigate("/home"); // Redirige a la página de inicio después de iniciar sesión
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Redirige a la página de registro
  };

  return (
    <Box sx={{ width: 300, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Correo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Iniciar sesión
        </Button>
      </form>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        ¿No tienes una cuenta?{" "}
        <Button onClick={handleRegisterClick} color="secondary">
          Regístrate aquí
        </Button>
      </Typography>
    </Box>
  );
}

export default Login;
