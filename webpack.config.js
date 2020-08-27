const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //doesnt work with hot module, ideally just use in production


 
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js' 
    },
    module: {
        rules: [{
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          use: ['babel-loader']
        },
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ]
      },
    devtool: 'eval-source-map',
    devServer: {
      // publicPath: '/',
      contentBase:  path.resolve(__dirname, 'public'),
      historyApiFallback: true, //redirects everything back to index.html (important for routing)
      port: 9000,
      hot: true
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html", //source html
        title: 'titleee',
        filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({filename: 'name.css', disable: true})
    ]
}