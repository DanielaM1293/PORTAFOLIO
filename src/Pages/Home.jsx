import React from "react";
import 'animate.css';

export const Home = () => {
  
  const mainImage = "https://wallpaper.forfun.com/fetch/fe/fe50d9ab02d910402b6a1882f483345e.jpeg";
  
  // URLs de imágenes y enlaces de tus proyectos
  const projectImages = [
    {
      image: "https://science.nasa.gov/wp-content/uploads/2023/09/M31_Layered_UV_and_Optical-details.jpg?w=800",
      link: "https://github.com/DanielaM1293/KeyCode_GrupoF.git",
    },
    {
      image: "https://science.nasa.gov/wp-content/uploads/2023/04/c103-3b.png?w=1014",
      link: "https://github.com/JhosepCastro/RAN-.git",
    },
    {
      image: "https://science.nasa.gov/wp-content/uploads/2023/09/Westerlund.gif?w=540",
      link: "https://via.placeholder.com/300x200.png?text=Proyecto+3",
    },
  ];

  const skills = [
    "React", 
    "JavaScript", 
    "CSS", 
    "HTML", 
    "Microsoft Azure", 
    "PowerShell", 
    "Hyper-V", 
    "Excel", 
    "SQL", 
    "Access",
    "Redux",
    "Tailwind",
  ];

  return (
    
    <div className="min-h-screen bg-black text-white p-6">
      {/* Imagen Principal */}
      <div className="relative mb-10">
        <img 
          src={mainImage} 
          alt="Portafolio" 
          className="w-full h-auto rounded-lg shadow-lg object-cover mb-8"
        />
        <h1 className="text-4xl font-bold text-purple-500 text-center animate__animated animate__fadeInDown">
          ¡Bienvenidos a Mi Portafolio!
        </h1>
      </div>
      <div className="flex justify-center space-x-10 mt-10">
      {/* Círculo para Hoja de Vida */}
      <a 
        href="/ruta-a-tu-hoja-de-vida" 
        className="flex items-center justify-center w-24 h-24 bg-cover bg-center rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
        style={{ backgroundImage: "url('/ruta-a-tu-imagen-hoja-de-vida.jpg')" }} // Reemplaza con tu imagen
      >
        <span className="text-white text-xl font-bold text-center">Hoja de Vida</span>
      </a>
      
      {/* Círculo para Certificados */}
      <a 
        href="/ruta-a-tus-certificados" 
        className="flex items-center justify-center w-24 h-24 bg-cover bg-center rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
        style={{ backgroundImage: "url('/ruta-a-tu-imagen-certificados.jpg')" }} // Reemplaza con tu imagen
      >
        <span className="text-white text-xl font-bold text-center">Certificados</span>
      </a>
    </div>

      {/* Sección de Proyectos */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4 animate__animated animate__fadeInDown">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image} 
                alt={`Proyecto ${index + 1}`} 
                className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Sección de Habilidades */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-purple-400 mb-6 animate__animated animate__fadeInDown">
          Mis Habilidades
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* Sección de Formación */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4 animate__animated animate__fadeInDown">
          Formación
        </h2>

        {/* Contenedor de fichas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ficha 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Get Connected
            </h3>
            <p className="text-gray-400">CISCO</p>
            <p className="text-gray-400">2019</p>
          </div>

          {/* Ficha 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Introducción a la Ciberseguridad
            </h3>
            <p className="text-gray-400">CISCO</p>
            <p className="text-gray-400">2020</p>
          </div>

          {/* Ficha 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Fundamentos de Redes
            </h3>
            <p className="text-gray-400">CISCO</p>
            <p className="text-gray-400">2020</p>
          </div>

          {/* Ficha 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Fundamentos de Redes
            </h3>
            <p className="text-gray-400">CISCO</p>
            <p className="text-gray-400">2021</p>
          </div>

          {/* Ficha 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              CCNAv7: Introducción a Redes
            </h3>
            <p className="text-gray-400">CISCO</p>
            <p className="text-gray-400">2022</p>
            <p className="text-gray-400">Distinción: Carta de Mérito</p>
          </div>

          {/* Ficha 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Programación en Python 
            </h3>
            <p className="text-gray-400">SENA</p>
            <p className="text-gray-400">2023</p>
          </div>

          {/* Fichas adicionales */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              English Does Work - Level 9
            </h3>
            <p className="text-gray-400">SENA</p>
            <p className="text-gray-400">2024</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Manejo de Herramientas Microsoft Office: Excel
            </h3>
            <p className="text-gray-400">SENA</p>
            <p className="text-gray-400">2024</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-purple-600 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              SQL y Herramientas para la Visualización de Datos
            </h3>
            <p className="text-gray-400">SENA</p>
            <p className="text-gray-400">2024</p>
          </div>
        </div>
      </div>

  {/* Sección de Contacto */}
<div className="text-center">
  <h2 className="text-3xl font-semibold text-purple-400 mb-4 animate__animated animate__fadeInDown">
    Contacto
  </h2>
  <p className="mb-4">Puedes encontrarme en:</p>
  <div className="flex justify-center gap-4">
    <a href="https://www.linkedin.com/in/estefany-martinez" target="_blank" rel="noopener noreferrer">
      <button className="bg-purple-500 text-white py-2 px-4 rounded-lg transition hover:bg-purple-600">
        LinkedIn
      </button>
    </a>
    <a href="mailto:estefanydanielamartineznino@gmail.com">
      <button className="bg-purple-500 text-white py-2 px-4 rounded-lg transition hover:bg-purple-600">
        Email
      </button>
    </a>
    <a href="https://github.com/DanielaM1293" target="_blank" rel="noopener noreferrer">
      <button className="bg-purple-500 text-white py-2 px-4 rounded-lg transition hover:bg-purple-600">
        GitHub
      </button>
    </a>
  </div>
</div>

    </div>
  );
};
