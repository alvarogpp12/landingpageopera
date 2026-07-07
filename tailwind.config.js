/**
 * Paleta de marca "Tierra Salvaje" (extraída del cartel oficial).
 *
 * NOTA: el sitio es HTML estático con CSS inline (sin paso de build).
 * Estos tokens se dejan preparados por si se conecta Tailwind más adelante.
 * La fuente de verdad del color en producción son las CSS custom properties
 * de :root en index.html; estos valores deben mantenerse en paralelo.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'rojo-verismo':   '#C50319', // primario: titulares, CTAs, acentos de tinta
        'rojo-cinabrio':  '#BC2C20', // secundario
        'rojo-sangre':    '#8F1516', // profundidad, hover, sombras
        'granate-oscuro': '#451110', // transición a fondo
        'oro-trigo':      '#D1BB97', // texto sobre rojo/oscuro, detalles premium
        'bronce-estepa':  '#8A7256', // texturas, bordes secundarios
        'negro-carmin':   '#1A0D0A', // fondo principal
        'negro-absoluto': '#0D0606', // contraste máximo
        hueso:            '#F5ECDB', // blanco cálido: texto sobre rojo / hover
      },
    },
  },
  plugins: [],
}
