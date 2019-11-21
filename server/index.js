const express = require('express');
const getProducts = require('./getProducts');
const getProducts = require('./getProduct');

const app = express();

const port = 6660;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Running on port: ${port}☠️`);
});
