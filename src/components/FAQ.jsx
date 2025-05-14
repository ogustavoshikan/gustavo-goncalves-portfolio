import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'Quanto tempo leva para desenvolver um agente de IA?',
    answer: 'O prazo varia conforme a complexidade do projeto, mas geralmente leva de 2 a 6 semanas, desde o diagnóstico inicial até a implementação completa. Projetos mais simples podem ser entregues mais rapidamente, enquanto soluções altamente customizadas podem demandar um tempo maior para garantir a qualidade e eficiência esperadas. (Lorem Ipsum).'
  },
  {
    id: 2,
    question: 'É possível integrar com sistemas já existentes?',
    answer: 'Sim, os agentes de IA podem ser integrados com a maioria dos sistemas através de APIs, incluindo ERPs, CRMs, plataformas de e-commerce e sistemas de mensageria. Nossa equipe realiza uma análise detalhada para garantir uma integração fluida e eficiente. (Lorem Ipsum).'
  },
  {
    id: 3,
    question: 'Como é o processo de manutenção dos agentes?',
    answer: 'O processo de manutenção inclui monitoramento contínuo, atualizações de segurança, otimizações de performance e ajustes para garantir que os agentes continuem funcionando corretamente e evoluindo conforme as necessidades do negócio. Oferecemos planos de suporte e manutenção personalizados. (Lorem Ipsum).'
  },
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-text-main hover:text-accent-secondary transition-colors focus:outline-none"
      >
        <span className="text-lg font-semibold">{item.question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-3 text-text-secondary text-sm">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-main mb-12 text-center">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
