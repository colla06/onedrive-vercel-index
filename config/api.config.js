module.exports = {
  clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d',
  obfuscatedClientSecret: '35T8Q~j3Isv.ulDtMl.9K2Dcw3UQGjJYiLJaWcjr',

  redirectUri: 'http://localhost',

  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  scope: 'user.read files.read.all offline_access',

  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
