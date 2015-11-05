const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(config), {
  stats: {
    colors: true
  }
}).listen(port, host, err => {
  if (err) throw err;

  console.log(`Listening at ${host}:${port}`);
});
