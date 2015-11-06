const express = require('express');
const app = express();

app.use(express.static('./'));

const server = app.listen(3000, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Listening at ${host}:${port}`)
});
