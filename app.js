//import products from "./data";
//import router from "./router";

const express = require("express");

const app = express();
app.use(express.json());

const products = require("./data");

app.get("/api/products", (req, res) => res.json(products));
//app.put("/api/products", (req, res) => res.json(products));

const NUM = 8000;
app.listen(NUM, () => {
  console.log(`a ${NUM}`);
});
