require("dotenv").config();
const connectDB = require("./db/conn");
const Product = require("./models/schema");
//const mongoose = require("mongoose");
const ProductJson = require("./products.json")


const start = async () => {
    try{

    await connectDB(process.env.MONGO);
    // previous data delete in database
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
    } catch (err) {
        console.log(err);
    }
}
start();