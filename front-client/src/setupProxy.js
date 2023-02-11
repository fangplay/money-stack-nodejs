const { createProxyMiddleware } = import('http-proxy-middleware')

exports = function(app) {
  app.use('/api/', createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true
  }));
}