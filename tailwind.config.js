/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#121212', // Preto suave
        'secondary-bg': '#1E1E1E', // Cinza escuro
        'accent-main': '#00E6A0', // Verde menta vibrante
        'accent-secondary': '#8A2BE2', // Azul violeta
        'text-main': '#F5F5F5', // Branco suave
        'text-secondary': '#A0A0A0', // Cinza médio
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemplo, podemos ajustar
      },
    },
  },
  plugins: [],
}
