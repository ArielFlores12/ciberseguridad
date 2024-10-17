import React from 'react';

function FakeCall() {
  const handleFakeCall = () => {
    alert('Simulando llamada falsa...');
  };

  return (
    <div>
      <h2>Simulación de Llamada Falsa</h2>
      <button onClick={handleFakeCall}>
        Activar Llamada Falsa
      </button>
    </div>
  );
}

export default FakeCall;
