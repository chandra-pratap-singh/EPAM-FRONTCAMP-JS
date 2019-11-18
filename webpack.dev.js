const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require("path");
 module.exports = merge(common, {
   mode: 'development',
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "dist/dev")
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
 });