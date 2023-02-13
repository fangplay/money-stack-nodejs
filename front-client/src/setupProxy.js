const { setupMiddlewares } = import('http-proxy-middleware')

exports = function(app) {
  app.use('/api/', setupMiddlewares({
    target: 'http://localhost:8000',
    changeOrigin: true
  }));
}