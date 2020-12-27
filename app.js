const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('mac is a pain in tne ass World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
