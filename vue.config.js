// const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  configureWebpack: config => {
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        console.log(val);
        console.log(val.options.templateParameters.toString());
      }
    });
  },
  devServer: {
    open: process.platform === "darwin",
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: null // 设置代理
    // before : app => {
    // }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // patterns: [path.resolve(__dirname, "./src/assets/styles/common.less")]
      }
    }
  }
};
