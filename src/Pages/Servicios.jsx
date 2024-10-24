import React from "react";

export const Servicios = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-8 mt-12">
        Mis Servicios
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Desarrollo Frontend",
            description: "Creación de interfaces de usuario atractivas y funcionales.",
            icon: "https://cdn-icons-png.flaticon.com/512/2721/2721616.png",
          },
          {
            title: "Experiencia en Azure",
            description: "Asesoramiento en la implementación de soluciones en la nube.",
            icon: "https://regmedia.co.uk/2021/05/10/new_azure_icon.jpg",
          },
          {
            title: "Automatización con PowerShell",
            description: "Scripts y automatizaciones para optimizar procesos.",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr5bUESmf2aPIc-jhj8QzKae1W8d-_6aSJmqXuYfL-fX9L5jSeePUtM1tHEuDW_wVoYI&usqp=CAU",
          },
          {
            title: "Gestión de Bases de Datos",
            description: "Diseño y administración de bases de datos SQL.",
            icon: "data:image/png;base64,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",
          },
          {
            title: "Ciberseguridad",
            description: "Implementación de medidas de seguridad para proteger tus datos.",
            icon: "data:image/png;base64,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",
          },

        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer"
          >
            <img src={service.icon} alt={service.title} className="w-20 h-20 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-purple-300 mb-2 text-center">{service.title}</h2>
            <p className="text-gray-400 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
