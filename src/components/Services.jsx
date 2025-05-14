import React from 'react';
import ServiceCard from './ServiceCard'; // Componente para cada card de serviço

// Importar imagens dos serviços
import chatbotImg from '../assets/images/servico_chatbots.png';
import automacaoImg from '../assets/images/servico_automacao_fluxos.png';
import modelosIaImg from '../assets/images/servico_modelos_ia.png';
import agentesAutonomosImg from '../assets/images/servico_agentes_autonomos.png';
import consultoriaIaImg from '../assets/images/servico_consultoria_ia.png';

const servicesData = [
  {
    id: 1,
    title: 'Chatbots Inteligentes',
    description: 'Desenvolvimento de assistentes virtuais treinados com o conhecimento de sua empresa para fornecer suporte 24/7 e automatizar respostas com precisão.',
    image: chatbotImg,
    icon: '🤖', // Placeholder para ícone, pode ser um SVG ou componente de ícone
  },
  {
    id: 2,
    title: 'Automação de Fluxos de Trabalho',
    description: 'Criação de sistemas automáticos que eliminam tarefas repetitivas, reduzem erros humanos e aumentam a produtividade da sua equipe.',
    image: automacaoImg,
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Modelos de IA Personalizados',
    description: 'Desenvolvimento de modelos específicos para o seu nicho de mercado, capacitando sua empresa para executar tarefas específicas com alta precisão e eficiência.',
    image: modelosIaImg,
    icon: '🧠',
  },
  {
    id: 4,
    title: 'Agentes Autônomos',
    description: 'Criação de agentes de IA capazes de executar processos complexos de forma autônoma, tomando decisões inteligentes para resolver problemas específicos.',
    image: agentesAutonomosImg,
    icon: '🧑‍🚀',
  },
  {
    id: 5,
    title: 'Consultoria Estratégica em IA',
    description: 'Assessoria especializada para identificar oportunidades de aplicação de inteligência artificial e desenvolver um roteiro personalizado de transformação.',
    image: consultoriaIaImg,
    icon: '📈',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-main mb-12 text-center">
          Soluções Inteligentes para o Seu Negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon} // Passar o ícone como prop
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
