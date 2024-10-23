import React from "react";

export const Burbujas = () => {
  const estrellas = Array.from({ length: 50 }); // Puedes aumentar o disminuir el número de estrellas

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {estrellas.map((_, index) => (
        <div
          key={index}
          className="estrella bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-80 shadow-lg animate-flotar"
          style={{
            left: `${Math.random() * 100}vw`, // Posición horizontal aleatoria
            animationDuration: `${Math.random() * 5 + 5}s`, // Duración aleatoria entre 5 y 10 segundos
            width: `${Math.random() * 6 + 8}px`, // Tamaño de la estrella (más grande y variable)
            height: `${Math.random() * 6 + 8}px`, // Tamaño de la estrella (más grande y variable)
            bottom: `-${Math.random() * 100}px`, // Posición inicial desde abajo
            filter: `blur(${Math.random() * 2 + 1}px)`, // Efecto de difuminado para dar sensación de brillo
            boxShadow: `0 0 ${Math.random() * 3 + 2}px rgba(255, 255, 255, 0.8)`, // Sombra para efecto de resplandor
          }}
        />
      ))}
    </div>
  );
};

export default Burbujas;
