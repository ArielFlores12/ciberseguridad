import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import Home from './components/Home';
import PanicButton from './components/PanicButton';
import RiskMap from './components/RiskMap';
import SupportNetwork from './components/SupportNetwork';
import EmergencyVoice from './components/EmergencyVoice';
import FakeCall from './components/FakeCall';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/panic-button" element={<PanicButton />} />
            <Route path="/risk-map" element={<RiskMap />} />
            <Route path="/support-network" element={<SupportNetwork />} />
            <Route path="/emergency-voice" element={<EmergencyVoice />} />
            <Route path="/fake-call" element={<FakeCall />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
