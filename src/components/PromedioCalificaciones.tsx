// src/components/PromedioCalificaciones.tsx
import React from 'react';

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const PromedioCalificaciones: React.FC = () => {
  const alumnos: Alumno[] = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 },
  ];

  const promedio = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0) / alumnos.length;

  return (
    <div>
      <h2>Promedio de calificaciones</h2>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>{alumno.name} - Calificación: {alumno.calificacion}</li>
        ))}
      </ul>
      <p>Promedio: {promedio.toFixed(2)}</p>
    </div>
  );
};

export default PromedioCalificaciones;

