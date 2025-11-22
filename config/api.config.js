/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth.
clientId: 'c91885c5-a194-40f7-ac67-14524e73a35d',
clientSecret: 'xBb8Q~qoZ67rrW2fla0aPGW.2Fxba-IIbm-.5aCp', // valor plano generado en Azure


  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header for Vercel edge.
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
