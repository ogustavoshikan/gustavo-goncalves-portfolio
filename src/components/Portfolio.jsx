import React from 'react';
import PortfolioItem from './PortfolioItem'; // Componente para cada item do portfólio
import portfolioImg1 from '../assets/images/portfolio_placeholder_1.png';
// Adicione mais imagens de portfólio conforme necessário
// import portfolioImg2 from '../assets/images/portfolio_placeholder_2.png';
// import portfolioImg3 from '../assets/images/portfolio_placeholder_3.png';

const portfolioData = [
  {
    id: 1,
    title: 'Agente Inteligente para Otimização Logística',
    description: 'Desenvolvimento de um agente autônomo para otimizar rotas e processos logísticos, resultando em redução de custos e aumento de eficiência. (Lorem Ipsum).',
    image: portfolioImg1,
    link: '#',
  },
  {
    id: 2,
    title: 'Sistema de Recomendação Personalizado',
    description: 'Criação de um modelo de IA para recomendações personalizadas em uma plataforma de e-commerce, aumentando o engajamento e as vendas. (Lorem Ipsum).',
    image: portfolioImg1, // Usando placeholder, idealmente ter imagens diferentes
    link: '#',
  },
  {
    id: 3,
    title: 'Chatbot de Atendimento ao Cliente com IA',
    description: 'Implementação de um chatbot inteligente para atendimento ao cliente, capaz de resolver dúvidas comuns e encaminhar casos complexos. (Lorem Ipsum).',
    image: portfolioImg1, // Usando placeholder
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-main mb-12 text-center">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="border border-accent-main text-accent-main px-6 py-3 rounded-lg hover:bg-accent-main hover:text-primary-bg transition-colors font-semibold"
          >
            Ver Todos os Projetos (Em Breve)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
