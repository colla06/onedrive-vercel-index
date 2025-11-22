module.exports = {
  clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d', // tu app de Azure
  obfuscatedClientSecret: 'xBb8Q~qoZ67rrW2fla0aPGW.2Fxba-IIbm-.5aCp', // el valor real del secret
  redirectUri: 'http://localhost',
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
  scope: 'user.read files.read.all offline_access',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
