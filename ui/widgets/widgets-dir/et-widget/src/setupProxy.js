const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/entando-template-node-api/api',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            pathRewrite: {
                '^/entando-template-node-api/api': '/api', // remove base path
            },
            changeOrigin: true,
        })
    );
};
