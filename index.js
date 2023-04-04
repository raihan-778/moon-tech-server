const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

const products = require("./products/products.json");

//middleware
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.send({ products });
});

app.get("/", (req, res) => {
  res.send({ express: "Local server is runnig perfectly" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
