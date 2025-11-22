/**
 * Configuración de la API para tu OneDrive-vercel-index
 */
module.exports = {
  // Tu Application (client) ID
  clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d',

  // Valor del client secret que generaste en Azure (NO el ID)
  obfuscatedClientSecret: 'nRH8Q~KXCBSGD1IiTZBYzS1P0Y2dej9hsBCOrds4',

  // Redirect URI configurado en Azure
  redirectUri: 'http://localhost',

  // URLs de autenticación y del Drive API
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // Permisos requeridos
  scope: 'user.read files.read.all offline_access',

  // Cache-Control para Vercel
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
