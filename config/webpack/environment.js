const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
environment.plugins.prepend (
  'provide',
  new webpack.providePlugin({
    $: 'jquery/src/jquery',
    jquery: 'jwuery/src/jquery',
    popper: 'popper.js'
  })
)
