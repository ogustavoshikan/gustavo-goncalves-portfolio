import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary-bg sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <a href="#" className="text-accent-main text-2xl font-bold">
            GUSTAVO GONCALVES
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-text-main hover:text-accent-main transition-colors">Sobre Mim</a>
          <a href="#services" className="text-text-main hover:text-accent-main transition-colors">Serviços</a>
          <a href="#how-it-works" className="text-text-main hover:text-accent-main transition-colors">Como Trabalho</a>
          <a href="#portfolio" className="text-text-main hover:text-accent-main transition-colors">Portfólio</a>
          <a href="#faq" className="text-text-main hover:text-accent-main transition-colors">FAQ</a>
          <a href="#contact" className="bg-accent-main text-primary-bg px-4 py-2 rounded hover:bg-opacity-80 transition-colors font-semibold">
            Contato
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - to be implemented later */}
          <button className="text-text-main focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
