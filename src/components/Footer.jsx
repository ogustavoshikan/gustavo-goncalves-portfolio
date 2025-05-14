import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-text-secondary py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} GUSTAVO GONCALVES. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          {/* Links para Redes Sociais (Opcional) - Adicionar ícones e links reais se fornecidos */}
          {/* <a href="#" className="text-text-secondary hover:text-accent-main mx-2 transition-colors">LinkedIn</a>
          <a href="#" className="text-text-secondary hover:text-accent-main mx-2 transition-colors">GitHub</a> */}
        </div>
        <p className="text-xs mt-2">
          {/* Link para Política de Privacidade/Termos (Placeholder) */}
          {/* <a href="#" className="hover:text-accent-main transition-colors">Política de Privacidade</a> 
          <span className="mx-1">|</span> 
          <a href="#" className="hover:text-accent-main transition-colors">Termos de Uso</a> */}
          Site desenvolvido com paixão por IA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
