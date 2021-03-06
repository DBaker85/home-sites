const path = require('path');
const nodeExternals = require('webpack-node-externals');
const nodeExternals = require('webpack-node-externals');
const PnpPlugin = require('pnp-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    app: ['./server/server.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,

        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'server', 'tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
    plugins: [PnpPlugin],
  },
  resolveLoader: {
    plugins: [PnpPlugin.moduleLoader(module)],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
};
