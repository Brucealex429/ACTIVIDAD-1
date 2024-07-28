// src/components/DividirArreglo.tsx
import React from 'react';

const DividirArreglo: React.FC = () => {
  const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const nuevoArreglo = arreglo.map(num => num / 5);

  return (
    <div>
      <h2>Dividir valores de un arreglo por 5</h2>
      <p>Original: {arreglo.join(', ')}</p>
      <p>Dividido: {nuevoArreglo.join(', ')}</p>
    </div>
  );
};

export default DividirArreglo;

