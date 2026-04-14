module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tropical: ['Pacifico', 'cursive'],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        tropicalGreen: '#3FAF7A',     // desaturated green
        tropicalBlue: '#5EC2D9',      // soft aqua
        sandyBeige: '#F5E6C8',        // warm neutral base
        sunsetOrange: '#F28C38',      // toned-down sunset
        oceanWave: '#2C6E91',         // slate ocean blue
      },
      backgroundImage: {
        'tropical-pattern': "url('/public/xtours.webp')",
      },
      boxShadow: {
        'tropical': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
