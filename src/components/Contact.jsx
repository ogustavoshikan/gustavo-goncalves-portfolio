import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch() para uma API ou um serviço como EmailJS
    console.log('Form data submitted:', formData);
    alert('Mensagem enviada! (Simulação)');
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-main mb-6 text-center">
          Vamos Conversar?
        </h2>
        <p className="text-lg text-text-secondary mb-10 text-center max-w-2xl mx-auto">
          Pronto para transformar seu negócio com inteligência artificial? Entre em contato para discutirmos como posso ajudar a automatizar processos e impulsionar a eficiência da sua empresa.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-secondary-bg p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-text-secondary text-sm font-semibold mb-2">Nome Completo</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-primary-bg text-text-main border border-gray-700 rounded-md focus:ring-accent-main focus:border-accent-main outline-none transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-text-secondary text-sm font-semibold mb-2">Seu Melhor Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-primary-bg text-text-main border border-gray-700 rounded-md focus:ring-accent-main focus:border-accent-main outline-none transition-colors"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-text-secondary text-sm font-semibold mb-2">Sua Mensagem</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-primary-bg text-text-main border border-gray-700 rounded-md focus:ring-accent-main focus:border-accent-main outline-none transition-colors resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-accent-main text-primary-bg px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-colors shadow-lg w-full md:w-auto"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
        {/* Informações de Contato Alternativas (Opcional) */}
        {/* <div className="text-center mt-10 text-text-secondary">
          <p>Ou entre em contato por:</p>
          <p>Email: seuemail@example.com</p>
          <p>WhatsApp: (XX) XXXXX-XXXX</p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
