import React from 'react';

function EmergencyVoice() {
  const handleVoiceCommand = () => {
    alert('Emergencia activada por comando de voz');
  };

  return (
    <div>
      <h2>Activación de Emergencia por Voz</h2>
      <button onClick={handleVoiceCommand}>
        Simular Comando de Voz
      </button>
    </div>
  );
}

export default EmergencyVoice;
