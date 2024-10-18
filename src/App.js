import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import Loading from './components/Loading'; // Asegúrate de que la ruta sea correcta

// Lazy loading de componentes
const Home = lazy(() => import('./components/Home'));
const PanicButton = lazy(() => import('./components/PanicButton'));
const RiskMap = lazy(() => import('./components/RiskMap'));
const SupportNetwork = lazy(() => import('./components/SupportNetwork'));
const EmergencyVoice = lazy(() => import('./components/EmergencyVoice'));
const FakeCall = lazy(() => import('./components/FakeCall'));
const NotFound = lazy(() => import('./components/NotFound')); // Componente de 404

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}> {/* Componente de carga */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/panic-button" element={<PanicButton />} />
              <Route path="/fake-call" element={<FakeCall />} />
              <Route path="/risk-map" element={<RiskMap />} />
              <Route path="/support-network" element={<SupportNetwork />} />
              <Route path="/emergency-voice" element={<EmergencyVoice />} />
              <Route path="*" element={<NotFound />} /> {/* Manejo de errores */}
            </Routes>
          </Suspense>
          {/* no borrar */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
