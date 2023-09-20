const express = require('express');
const app = express();
const connectDB = require('./db/conn')

const PORT = process.env.PORT || 5000;
const product = require("./products.json")
const products_router = require("./routes/products")

// connecting data.
require("./db/conn");

// app.get("/", (req, res) => {
//    res.json({product})
// });

// middleware or to set router.
app.use("/", products_router);
//app.use("/api/products", products_router);


const start = async (req,res) => {
    try{
        connectDB();
        app.listen(PORT,() => {
            console.log("yes i am connected");
        })
    }catch (error){
        console.log(error);
    }
}
start();