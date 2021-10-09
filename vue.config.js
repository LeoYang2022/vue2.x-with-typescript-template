const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

// 项目主要配置文件
module.exports = {
    lintOnSave: true,

    // 路径别名配置
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))
        // 需要重启 IDE
        .set('@apis', resolve('src/network/api-manager.js'))
        .set('@comps',resolve('src/components'))
        // 这里只写了两个，可以再加，按这种格式.set('', resolve(''))
        .set('@views', resolve('src/views'))
    },

    productionSourceMap: true,

    // 代理配置
    devServer: {
        proxy: {
            "/api": {
                target: "http://www.axzqzg.com",
                changeOrigin: true,     // 允许跨域
                ws: true,
                pathRewrite: {
                    "^/api": "/api",
                }
            }
        }
    }
}
