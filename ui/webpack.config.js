"use strict";

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader?presets[]=es2015!ts-loader",
      },
      {
        test: /\.(scss|sass)$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    port: 23000
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "API_SERVER"
    ])
  ]
};
