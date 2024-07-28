// src/App.tsx
import React from 'react';
import AreaCuadrado from './components/AreaCuadrado';
import SumarArreglo from './components/SumarArreglo';
import DividirArreglo from './components/DividirArreglo';
import PromedioCalificaciones from './components/PromedioCalificaciones';
import Acumulador from './components/Acumulador';

const App: React.FC = () => {
  return (
    <div className="App">
      <AreaCuadrado />
      <SumarArreglo />
      <DividirArreglo />
      <PromedioCalificaciones />
      <Acumulador />
    </div>
  );
}

export default App;

