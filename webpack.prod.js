// webpack.prod.js
const config = require('./webpack.config')
const path = require('path')
const { merge } = require('webpack-merge')

module.exports = merge(config, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
