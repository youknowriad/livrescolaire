var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map', // for faster builds use 'eval'
  debug: true,

  // our Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    contentBase: 'src/public',
    publicPath: '/build'
  },

  entry: {
    style: './src/js/style',
    app: './src/js/index'
  },

  // Config for our build files
  output: {
    path: root('src/public/build'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    publicPath: "build/"
  },

  resolve: {
    extensions: ['','.js','.json', '.css', '.html', 'ttf', 'otf', 'eot', 'svg', 'woff', 'woff2']
  },

  module: {
    loaders: [
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw' },

      // Support for Less as raw text
      { test: /\.less$/, loader: "style!css!less" },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw' },

      // support for fonts as files
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[name].[ext]' },

      // Support for .js files.
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify(require('./package.json').version)
    })
  ]
};

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
