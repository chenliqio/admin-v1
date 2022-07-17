const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack  = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),//通过webpack打包的文件所在的文件夹
    publicPath:'/dist/',
    filename: 'js/app.js',
  },
  resolve:{
    alias:{
      page     :path.resolve(__dirname, 'src/page'),
      component:path.resolve(__dirname, 'src/component'),
      util     :path.resolve(__dirname, 'src/util'),
      service  :path.resolve(__dirname, 'src/service'),

    }
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
    //   css文件的处理
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          })
      },
// sass文件的配置
      {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader','sass-loader']
          })
      },
    //   图片的配置
    {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      },
    ]
  },
 plugins:[
    // 处理html文件
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    // 独立css文件
    new ExtractTextPlugin("css/[name].css"),
    // 提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name : 'common',
        filename:'js/base.js'
    }),
],
devServer:{
 port : 8086,
 historyApiFallback:{
  index:'/dist/index.html'
 },
 proxy :{
  '/manage': {
    target:'http://admintest.happymmall.com',
    changeOrigin : true
  },
  '/user/logout.do': {
    target:'http://admintest.happymmall.com',
    changeOrigin : true
  }
 }
}
};