import webpack from 'webpack';

const WORKDIR = `${__dirname}/../`;
const INDEXJS = WORKDIR + 'app/index.js';
const OUTDIR = WORKDIR + 'dist/';

export default {
  entry: {
    app: INDEXJS
  },
  output: {
    path: OUTDIR,
    publicPath: '/'
  },
  debug: true,
  noInfo: true,
  target: 'web',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [],
      loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'html?attrs[]=img:src'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.html']
  }
};
