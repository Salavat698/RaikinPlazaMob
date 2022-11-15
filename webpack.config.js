const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean:true,
      filename: '[name].[contenthash].js',


    },
    module: {
        rules: [
          {
            test: /\.(html)$/,
            loader: 'html-loader',
          },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            {
              test: /\.(c|sa|sc)ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
 
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        })
    ],
    mode : 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 3000,
      open: true,
      hot:true,
    }
}