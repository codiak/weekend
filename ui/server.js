/* eslint-disable no-console */
const express = require('express')
const next = require('next')

const apiProxy = {
  '/proxy': {
    target: process.env.API_URL || 'http://localhost:8000',
    pathRewrite: { '^/proxy': '/' },
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
})

const { initAuth0 } = require("@auth0/nextjs-auth0");
let auth0 = initAuth0({
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
    storeIdToken: true,
    // storeAccessToken: true,
  },
});


const nextRouteHandler = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()


    // Provide auth for proxied API calls
    server.use('/proxy', async function (req, res, next) {
      console.log('Request Type:', req.method)
      try {
        const session = await auth0.getSession(req);
        const idToken = session.idToken;
        // Attach JWT header
        req.headers['authorization'] = idToken;
        console.log("did set?", req.headers);
      } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
      }
      next()
    })

    // Set up the proxy.
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(apiProxy).forEach(function (context) {
      server.use(proxyMiddleware(context, apiProxy[context]))
    })

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => nextRouteHandler(req, res))

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })