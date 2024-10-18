import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === email)) {
      setError("El correo ya está registrado.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    // Navega al login después de registrarse
    navigate("/login");
  };

  return (
    <Box sx={{ width: 300, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Registrar
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
        <TextField
          label="Confirmar Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Registrarse
        </Button>
      </form>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        ¿Ya tienes una cuenta?{" "}
        <Button onClick={() => navigate("/login")} color="secondary">
          Inicia sesión aquí
        </Button>
      </Typography>
    </Box>
  );
}

export default Register;
