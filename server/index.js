const express = require('express');
const getProducts = require('./getProducts');

const app = express();

const port = 6660;

app.get('/api/products', getProducts);

app.listen(port, () => {
    console.log(`${port} is Haunted!`)
});
