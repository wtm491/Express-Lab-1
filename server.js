const express = require("express");
const app = express();
app.use(express.json());

const cartItems = require("./cart_items");


app.use(express.json());
app.use('/', cartItems);
app.use(express.static('./public'));

const port = 5000;
app.listen(port, _ => console.log(`Listening on port: ${port}.`));