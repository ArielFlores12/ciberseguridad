import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';

function PanicButton() {
  const [timer, setTimer] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [isKeywordRecording, setIsKeywordRecording] = useState(false);

  useEffect(() => {
    if (timer && secondsLeft > 0) {
      const countdown = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }

    if (secondsLeft === 0 && timer) {
      handleConfirmPanic();
    }
  }, [secondsLeft, timer]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();

        setRecording(true);

        recorder.ondataavailable = (e) => {
          console.log('Grabando audio...', e.data);
        };

        recorder.onstop = () => {
          console.log('Grabación finalizada');
          setRecording(false);
          setMediaRecorder(null);
        };
      })
      .catch((error) => console.error('Error al acceder al micrófono', error));
  };

  const handleConfirmPanic = () => {
    alert('¡Alerta enviada a usuarios cercanos y autoridades!');
    startRecording();
    setTimer(null);
    setSecondsLeft(5);
  };

  const handleCancelPanic = () => {
    setTimer(null);
    setSecondsLeft(5);
    alert('Alerta cancelada.');
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      alert('Grabación de audio detenida.');
    }
  };

  const handlePanic = () => {
    setTimer(true);
  };

  const recordKeyword = () => {
    setIsKeywordRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();

        recorder.ondataavailable = (e) => {
          console.log('Grabando palabra clave...', e.data);
          // Simulamos que convertimos el audio a texto
          const simulatedKeyword = "seguridad"; // Aquí se haría el reconocimiento de voz real
          setKeyword(simulatedKeyword);
        };

        recorder.onstop = () => {
          console.log('Grabación de palabra clave finalizada.');
          setIsKeywordRecording(false);
          setMediaRecorder(null);
        };

        setTimeout(() => {
          recorder.stop();
        }, 3000); // Grabar durante 3 segundos para capturar la palabra clave
      })
      .catch((error) => console.error('Error al acceder al micrófono', error));
  };

  const triggerPanicByKeyword = (spokenWord) => {
    if (spokenWord === keyword) {
      handlePanic();
    } else {
      alert('Palabra clave incorrecta.');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: '#f2f2f7', // Fondo claro como en iOS
        padding: 4,
      }}
    >
      <Box
        textAlign="center"
        sx={{
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: '20px', // Bordes redondeados
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Sombra suave
          maxWidth: 350,
          width: '100%', // Asegura que el contenedor sea fluido
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: '#d32f2f', fontWeight: 'bold' }}
        >
          Botón de Pánico
        </Typography>

        {!timer ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePanic}
            size="large"
            startIcon={<WarningIcon />}
            sx={{
              backgroundColor: '#ff3b30',
              color: '#fff',
              padding: '15px 30px',
              fontSize: '1.2rem',
              borderRadius: '50px', // Botón más redondeado
              boxShadow: '0px 8px 15px rgba(255, 59, 48, 0.3)', // Sombra roja suave
              '&:hover': {
                backgroundColor: '#ff453a',
              },
            }}
          >
            Activar Alerta
          </Button>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: '#d32f2f', marginBottom: 2 }}>
              {`Alerta en ${secondsLeft} segundos...`}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCancelPanic}
              size="large"
              sx={{
                padding: '10px 20px',
                fontSize: '1rem',
                borderRadius: '50px',
                boxShadow: '0px 4px 10px rgba(0, 122, 255, 0.3)', // Sombra azul suave
                '&:hover': {
                  backgroundColor: '#007aff',
                },
              }}
            >
              Cancelar Alerta
            </Button>
          </>
        )}

        {recording && (
          <>
            <Typography
              variant="subtitle1"
              sx={{ color: '#d32f2f', marginTop: 2 }}
            >
              <MicIcon /> Grabando audio...
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleStopRecording}
              size="large"
              startIcon={<StopIcon />}
              sx={{
                marginTop: 2,
                padding: '10px 20px',
                fontSize: '1rem',
                borderRadius: '50px',
                backgroundColor: '#ff3b30',
                boxShadow: '0px 8px 15px rgba(255, 59, 48, 0.3)',
                '&:hover': {
                  backgroundColor: '#ff453a',
                },
              }}
            >
              Detener Grabación
            </Button>
          </>
        )}

        <Box mt={4}>
          <Typography variant="h6" sx={{ color: '#333', marginBottom: 2 }}>
            Palabra Clave: {keyword || 'No establecida'}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={recordKeyword}
            disabled={isKeywordRecording}
            size="large"
            startIcon={<MicIcon />}
            sx={{
              backgroundColor: '#007aff',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              boxShadow: '0px 4px 10px rgba(0, 122, 255, 0.3)',
              '&:hover': {
                backgroundColor: '#005bb5',
              },
            }}
          >
            {isKeywordRecording ? 'Grabando...' : 'Grabar Palabra Clave'}
          </Button>
        </Box>

        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => triggerPanicByKeyword('seguridad')}
            size="large"
            sx={{
              backgroundColor: '#34c759',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              boxShadow: '0px 4px 10px rgba(52, 199, 89, 0.3)',
              '&:hover': {
                backgroundColor: '#28a745',
              },
            }}
          >
            Probar Activación por Voz
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PanicButton;
