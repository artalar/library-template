const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.join(
      __dirname,
      process.env.BABEL_ENV === 'commonjs' ? 'lib' : 'es',
    ),
    library: 'template',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  stats: {
    colors: true,
  },
};
