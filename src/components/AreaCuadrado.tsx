// src/components/AreaCuadrado.tsx
import React, { useState } from 'react';

const AreaCuadrado: React.FC = () => {
  const [lado, setLado] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = () => {
    setArea(lado * lado);
  };

  return (
    <div>
      <h2>Calcular el área de un cuadrado</h2>
      <input 
        type="number" 
        value={lado} 
        onChange={(e) => setLado(Number(e.target.value))} 
        placeholder="Lado del cuadrado" 
      />
      <button onClick={calcularArea}>Calcular</button>
      {area !== null && <p>Área: {area}</p>}
    </div>
  );
};

export default AreaCuadrado;
