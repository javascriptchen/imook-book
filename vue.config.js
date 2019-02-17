const path = require("path");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const IS_PROD = process.env.NODE_ENV === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  publicPath: IS_PROD ? './' : '/',
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  },

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      // plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         warnings: false,
      //         drop_console: true,
      //         drop_debugger: false,
      //         pure_funcs: ['console.log'] //移除console
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true
      //   })
      // )
      //开启gzip
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [
        ...config.plugins,
        ...plugins
      ];
    }
  },
  css: {
    modules: false,
    extract: IS_PROD,
    // 为css后缀添加hash
    // extract: {
    //  filename: 'css/[name].[hash:8].css',
    //  chunkFilename: 'css/[name].[hash:8].css'
    // },
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 40, // 换算的基数
            selectorBlackList: ['weui', 'el'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    },

  }
};
