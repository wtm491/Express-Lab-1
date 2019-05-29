const express = require("express");
const cartItems = express.Router();
const cartData = require(`./cart_data`); 


cartItems.get("/", (req, res) => {
    console.log("Cart Data:  ")
    res.send(cartData);
});


cartItems.post("/", (req, res) => {
    console.log(req.body); 
    res.send("Added Cart Item");
});


cartItems.put("/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send("Updated Cart Item");
});


cartItems.delete("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Deleted cart item")
});

module.exports = cartItems, cartData; 