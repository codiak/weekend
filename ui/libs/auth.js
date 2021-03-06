import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri:
    process.env.REDIRECT_URL || "http://localhost:3000/api/auth0-callback",
  postLogoutRedirectUri:
    process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: process.env.SESSION_COOKIE_LIFETIME,
  },
});
