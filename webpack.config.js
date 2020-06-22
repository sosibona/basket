const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /.jsx?$/,
          use: ["babel-loader"]
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new PrettierPlugin({
        printWidth: 80,             
        tabWidth: 2,                
        useTabs: false,             
        semi: true,                 
        encoding: 'utf-8',          
        extensions: [ ".js", ".jsx" ]
      }),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      hot: true
    }
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    );
  }

  return config;
};