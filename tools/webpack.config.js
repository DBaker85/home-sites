const path = require('path');
const nodeExternals = require('webpack-node-externals');
const PnpPlugin = require('pnp-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    app: ['./builder.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,

        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    plugins: [PnpPlugin],
  },
  resolveLoader: {
    plugins: [PnpPlugin.moduleLoader(module)],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'builder.js',
  },
  externals: [nodeExternals()],
};
