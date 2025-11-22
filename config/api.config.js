/**
 * API configuration for OneDrive Vercel Index
 * Configurado para tu Microsoft 365 y multi-cuenta
 */

module.exports = {
  // Client ID de la aplicación registrada en Azure
  clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d',

  // Client Secret recién generado (valor, no ID)
  obfuscatedClientSecret: '35T8Q~j3Isv.ulDtMl.9K2Dcw3UQGjJYiLJaWcjr',

  // URL de redirección configurada en Azure
  redirectUri: 'http://localhost',

  // Endpoints de Microsoft Graph API (OneDrive internacional)
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // Scope necesario para las cuentas delegadas
  scope: 'User.Read Files.Read.All Files.ReadWrite.All offline_access',

  // Cache-control header para Vercel
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
