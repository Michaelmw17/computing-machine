const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// CRA loads .env files automatically; the custom `npm run dev` webpack build
// doesn't, so references like process.env.REACT_APP_* would explode at
// runtime (webpack 5 dropped the Node `process` polyfill).
const NODE_ENV = process.env.NODE_ENV || 'development';
const envFiles = [
  `.env.${NODE_ENV}.local`,
  NODE_ENV !== 'test' && '.env.local',
  `.env.${NODE_ENV}`,
  '.env',
].filter(Boolean);
for (const file of envFiles) {
  require('dotenv').config({ path: path.resolve(__dirname, file) });
}

const clientEnv = Object.keys(process.env)
  .filter((key) => /^REACT_APP_/.test(key))
  .reduce(
    (acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
      return acc;
    },
    {
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || ''),
    }
  );

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // This pulls in favicon and manifest links
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      linkType: 'text/css',
    }),

    new webpack.DefinePlugin(clientEnv),
  ],

  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
      },
      {
        directory: path.resolve(__dirname, 'public'), // 👈 Serve assets from /public
        publicPath: '/',
        watch: true,
      },
    ],
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
  },

  devtool: 'inline-source-map',
};
