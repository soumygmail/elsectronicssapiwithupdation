const mongoose = require('mongoose')

const connectDB = () => {

   
    mongoose.connect("mongodb://127.0.0.1:27017/productapiii")
.then(()=>{
    console.log("I am connected")
}).catch((err) => {
    console.log(err)
})

}
module.exports = connectDB;