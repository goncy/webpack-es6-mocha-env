import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
import UnusedFilesWebpackPlugin from 'unused-files-webpack-plugin';

const WORKDIR = `${__dirname}/../`;
const INDEXHTML = WORKDIR + 'public/index.html';

export default {
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [{
      test: /\.(scss|sass)$/,
      loader: 'style!css!sass'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: INDEXHTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      __DEV__: true
    }),
    new UnusedFilesWebpackPlugin(),
    new Visualizer()
  ]
};
