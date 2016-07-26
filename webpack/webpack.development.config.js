import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
import UnusedFilesWebpackPlugin from 'unused-files-webpack-plugin';
import autoprefixer from 'autoprefixer';

const WORKDIR = `${__dirname}/../`;
const INDEXHTML = WORKDIR + 'public/index.html';

export default {
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css', 'postcss', 'sass?sourceMap']}
    ]
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
  ],
  postcss: ()=> [autoprefixer]
};
