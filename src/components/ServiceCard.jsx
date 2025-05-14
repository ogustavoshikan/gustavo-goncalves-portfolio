import React from 'react';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-secondary-bg rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      {/* Se for usar ícones SVG ou componentes de ícone, renderize aqui */}
      {/* Exemplo com emoji como placeholder */}
      {icon && <span className="text-4xl mb-4">{icon}</span>}
      <h3 className="text-xl font-semibold text-accent-secondary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
