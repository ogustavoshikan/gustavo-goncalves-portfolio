import React from 'react';
import HeroImage from '../assets/images/hero_image_v1.png'; // Certifique-se que o caminho está correto

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-primary-bg">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-6">
          Desvendando o Futuro com <span className="text-accent-main">Inteligência Artificial</span> e <span className="text-accent-secondary">Automação Estratégica</span>.
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto">
          Transformando negócios e otimizando processos através de soluções inovadoras em agentes inteligentes e automações personalizadas.
        </p>
        <a 
          href="#services" 
          className="bg-accent-main text-primary-bg px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-colors shadow-lg"
        >
          Explore as Possibilidades
        </a>
      </div>
    </section>
  );
};

export default Hero;
