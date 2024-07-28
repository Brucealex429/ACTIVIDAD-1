// src/components/SumarArreglo.tsx
import React, { useState } from 'react';

const SumarArreglo: React.FC = () => {
  const [arreglo, setArreglo] = useState<number[]>([]);
  const [suma, setSuma] = useState<number | null>(null);

  const calcularSuma = () => {
    const total = arreglo.reduce((acc, num) => acc + num, 0);
    setSuma(total);
  };

  return (
    <div>
      <h2>Sumar elementos de un arreglo</h2>
      <input 
        type="text" 
        onChange={(e) => setArreglo(e.target.value.split(',').map(Number))} 
        placeholder="Ingrese números separados por coma" 
      />
      <button onClick={calcularSuma}>Calcular</button>
      {suma !== null && <p>Suma: {suma}</p>}
    </div>
  );
};

export default SumarArreglo;
