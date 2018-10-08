const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require("path");
const app = express();
const port = 3000;

let buildFolder = path.join(__dirname,'../build');

app.use(express.static(buildFolder));
app.use(fallback('index.html', { root: buildFolder }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
