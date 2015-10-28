const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');

const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(config), {
  // publicPath: '/',
  // hot: true,
  // historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, host, err => {
  if (err) throw err;

  console.log(`Listening at ${host}:${port}`);
});
