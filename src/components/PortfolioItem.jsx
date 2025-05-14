import React from 'react';

const PortfolioItem = ({ title, description, image, link }) => {
  return (
    <div className="bg-secondary-bg rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      {image && (
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-accent-secondary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">{description}</p>
        <a 
          href={link} 
          className="mt-auto inline-block text-accent-main hover:text-accent-secondary font-semibold transition-colors self-start"
        >
          Ver Detalhes &rarr;
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
