import React from 'react';

const stepsData = [
  {
    id: '01',
    title: 'Diagnóstico',
    description: 'Análise de necessidades e identificação dos processos que podem ser otimizados com IA. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '02',
    title: 'Planejamento',
    description: 'Definição de escopo, arquitetura da solução, tecnologias a serem utilizadas e cronograma de implementação. Lorem ipsum dolor sit amet.',
  },
  {
    id: '03',
    title: 'Desenvolvimento',
    description: 'Criação dos agentes de IA, modelos de machine learning e integrações necessárias. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '04',
    title: 'Implementação',
    description: 'Implantação da solução em ambiente de produção, testes e validação. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '05',
    title: 'Monitoramento e Otimização',
    description: 'Acompanhamento contínuo do desempenho e ajustes para garantir a máxima eficiência e resultados. Lorem ipsum dolor sit amet.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-main mb-12 text-center">
          Como Trabalho
        </h2>
        <div className="relative">
          {/* Linha do tempo visual (opcional, pode ser adicionada com mais CSS/SVG) */}
          {/* <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-accent-secondary transform -translate-x-1/2"></div> */}
          
          <div className="space-y-12">
            {stepsData.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-center ${(index % 2 === 0) ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                  <div className={`p-6 bg-primary-bg rounded-lg shadow-xl border-l-4 ${index % 2 === 0 ? 'border-accent-main' : 'border-accent-secondary'} max-w-md`}>
                    <span className="text-5xl font-bold text-accent-main opacity-50">{step.id}</span>
                    <h3 className="text-2xl font-semibold text-text-main mt-2 mb-3">{step.title}</h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  {/* Placeholder para ilustração ou ícone da etapa, se desejado */}
                  {/* <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center text-text-main text-3xl">{step.id}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
