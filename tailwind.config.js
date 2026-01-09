/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neurops-black': '#000000',
        'neurops-green': '#79B58C',
        'neurops-yellow': '#F7DD54',
        'neurops-blue': '#7EAAD7',
        'neurops-royal': '#6E7DB7',
        'neurops-red': '#CF634C',
        'neurops-orange': '#D67D2B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'IBM Plex Serif', 'Playfair Display', 'Times New Roman', 'serif'],
        'times': ['Times New Roman', 'serif'],
        'ibm': ['IBM Plex Serif', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
