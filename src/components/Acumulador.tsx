// src/components/Acumulador.tsx
import React, { useState } from 'react';

const Acumulador: React.FC = () => {
  const [acumulador, setAcumulador] = useState<number>(5);

  return (
    <div>
      <h2>Acumulador</h2>
      <p>Valor: {acumulador}</p>
      <button onClick={() => setAcumulador(acumulador + 1)}>Incrementar</button>
      <button onClick={() => setAcumulador(acumulador - 1)}>Disminuir</button>
    </div>
  );
};

export default Acumulador;

