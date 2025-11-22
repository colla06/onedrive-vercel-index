/**
 * Configuration file for customizing your OVI website
 */
module.exports = {
  // Fallback principal account (usado solo si se accede directamente sin multi-config)
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'colla@3lwrsm.onmicrosoft.com',

  // Website icon (colócalo en /public/icons/128.png)
  icon: '/icons/128.png',

  // Prefijo para Redis
  kvPrefix: process.env.KV_PREFIX || 'animeyseriesdo',

  // Nombre de la web
  title: "Anime y Series DO",

  // Carpeta base de la cuenta principal (se puede ignorar con multi-config)
  baseDirectory: '/Anime',

  // Máximo de elementos listados por carpeta
  maxItems: 100,

  // Google Fonts
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: [
    'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'
  ],

  // Footer
  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',

  // Carpetas protegidas
  protectedRoutes: [],

  // Email de contacto
  email: '',

  // Links sociales o de GitHub
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/tu_usuario/tu_fork',
    },
  ],

  // Formato de fecha/hora
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
