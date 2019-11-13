const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://shielded-spire-60169.herokuapp.com',
      changeOrigin: true,
      secure: false,
      headers: {
        Connection: 'keep-alive',
      },
    })
  )
}
