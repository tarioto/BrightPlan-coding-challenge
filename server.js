const express = require('express');

const app = express();

const fullPath = `${__dirname}/app`;
app.use(express.static(fullPath));


app.listen(3000, () => {
  console.log('listening on port 3000!');
});
