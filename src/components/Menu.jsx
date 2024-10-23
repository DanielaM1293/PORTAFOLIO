import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold text-purple-500">
          <Link to="/" className="hover:text-purple-300 transition-colors duration-300">
            Mi Portafolio
          </Link>
        </div>

        {/* Links de navegación */}
        <div className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/acerca"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Acerca de mí
          </Link>
          <Link
            to="/servicios"
            className="hover:text-purple-300 transition-colors duration-300"
          >
            Servicios
          </Link>
        
        </div>

        {/* Botón para conectar */}
        <div>
        <a
  href="https://www.linkedin.com/in/estefany-daniela-martínez-niño-b0832b209"
  className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-transform transform hover:scale-110 duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  Contacto 
</a>

        </div>
      </div>
    </nav>
  );
};

export default Menu;
