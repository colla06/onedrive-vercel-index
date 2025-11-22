/**
 * Configuración de la API para OneDrive-Vercel-Index
 */
module.exports = {
  // ID de la app registrada en Azure
  clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d',

  // Valor del client secret generado en Azure (no el ID)
  obfuscatedClientSecret: '35T8Q~j3Isv.ulDtMl.9K2Dcw3UQGjJYiLJaWcjr',

  // URI de redirección registrada en Azure
  redirectUri: 'http://localhost',

  // Endpoints de autenticación y API de OneDrive
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // Alcance necesario
  scope: 'user.read files.read.all offline_access',

  // Cache control
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
