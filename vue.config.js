module.exports = {
    //关闭eslint代码校验
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                assests: "@/assests",
                components: "@/components",
                view: "@/view",
                network: "@/network",
            }
        }
    },
    // 配置跨域代理
    devServer: {
        // Paths
        host: 'localhost',
        port: '8080',
        https: false,
        open: true,
        proxy: {
            '/api': { // 匹配所有以 '/api'开头的请求路径
                target: 'http://localhost:8081', // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
                    '^/api': ''
                }
            }
        },
    }
}