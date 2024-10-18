import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import Loading from './components/Loading'; // Asegúrate de que la ruta sea correcta

// Lazy loading de componentes
const LandingPage = lazy(() => import('./components/LandingPage')); // Importa LandingPage
const Home = lazy(() => import('./components/Home'));
const PanicButton = lazy(() => import('./components/PanicButton'));
const RiskMap = lazy(() => import('./components/RiskMap'));
const SupportNetwork = lazy(() => import('./components/SupportNetwork'));
const EmergencyVoice = lazy(() => import('./components/EmergencyVoice'));
const FakeCall = lazy(() => import('./components/FakeCall'));
const NotFound = lazy(() => import('./components/NotFound')); // Componente de 404
const Login = lazy(() => import('./components/Login')); // Asegúrate de que la ruta sea correcta
const Register = lazy(() => import('./components/Register')); // Asegúrate de que la ruta sea correcta

const theme = createTheme({
  palette: {
    primary: {
      main: '#d91d64',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState(null); // Almacena el usuario actual

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}> {/* Componente de carga */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              {/* Redirige a Home si el usuario está autenticado */}
              <Route path="/home" element={currentUser ? <Home /> : <Navigate to="/login" />} />
              <Route path="/panic-button" element={currentUser ? <PanicButton /> : <Navigate to="/login" />} />
              <Route path="/fake-call" element={currentUser ? <FakeCall /> : <Navigate to="/login" />} />
              <Route path="/risk-map" element={currentUser ? <RiskMap /> : <Navigate to="/login" />} />
              <Route path="/support-network" element={currentUser ? <SupportNetwork /> : <Navigate to="/login" />} />
              <Route path="/emergency-voice" element={currentUser ? <EmergencyVoice /> : <Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} /> {/* Manejo de errores */}
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
