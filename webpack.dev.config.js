var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
    sourceMapFilename: "[file].map"
  },
  devServer: {
    publicPath: '/static/',
    hot: true,
  },
  module: {
   loaders: [
     { 
       test: /\.js$/, 
       loaders: ['react-hot', 'babel-loader'],
       include: path.join(__dirname, 'src')
     }
     //{ test: /\.css$/, loader: 'style-loader!css-loader' },
     //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
   ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
