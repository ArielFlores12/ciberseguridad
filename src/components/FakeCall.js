import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaMicrophoneSlash, FaKeyboard, FaVolumeUp, FaPhone, FaPause, FaPhoneSlash } from 'react-icons/fa';

const Fakecall = () => {
  const [callEnded, setCallEnded] = useState(false);
  const [callTime, setCallTime] = useState(0); // Para rastrear el tiempo de la llamada en segundos
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCallTime((prevTime) => prevTime + 1); // Incrementa el tiempo cada segundo
    }, 1000);

    // Limpiar el intervalo cuando la llamada termina o el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  const handleHangUp = () => {
    setCallEnded(true);
    // Redirige a la página de inicio (Home) después de 5 segundos
    setTimeout(() => {
      navigate('/'); 
    }, 5000);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  if (callEnded) {
    return (
      <div style={styles.endCallMessage}>
        <h1>Call Ended</h1>
        <p>Returning to Home...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.numberSection}>
        <h2>900 902 934</h2>
        <p>{formatTime(callTime)}</p> {/* Mostrando el tiempo formateado */}
      </div>
      <div style={styles.buttonsSection}>
        <IconContext.Provider value={{ size: '2em' }}>
          <div style={styles.button}>
            <FaMicrophoneSlash />
            <p>Silenciar</p>
          </div>
          <div style={styles.button}>
            <FaKeyboard />
            <p>Teclado</p>
          </div>
          <div style={styles.button}>
            <FaVolumeUp />
            <p>Altavoz</p>
          </div>
          <div style={styles.button}>
            <FaPhone />
            <p>Añadir</p>
          </div>
          <div style={styles.button}>
            <FaPause />
            <p>Pausar</p>
          </div>
        </IconContext.Provider>
      </div>
      {/* Botón de colgar centrado */}
      <div style={styles.centerHangupButton} onClick={handleHangUp}>
        <FaPhoneSlash color="white" size="2em" />
      </div>
    </div>
  );
};

// Estilos básicos
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#1c1c1c',
    color: 'white',
    padding: '10px',
  },
  numberSection: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  buttonsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerHangupButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  endCallMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1c1c1c',
    color: 'white',
  },
};

export default Fakecall;
