const Product = require("../models/schema")


const getAllProducts = async(req,res) => {
const {company, name, featured, sort, select}  = req.query;
const queryObject = {};

if(company){
    queryObject.company = company;
    console.log(queryObject.company)
}

if(featured){
 queryObject.featured = featured;
}


if(name){
    queryObject.name = { $regex: name, $options: "i"};
   
}


let apiData = Product.find(queryObject);

if(sort){
    let sortFix = sort.split(",").join(" ") //replace(",", " ");
    //queryObject.sort = sortFix;
    apiData = apiData.sort(sortFix);
}



if(select){
   // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" "); //(",", " ");
    //queryObject.sort = sortFix;
    apiData = apiData.select(selectFix);
}



console.log(queryObject);


let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 3;


let skip = (page - 1) * limit;



apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;   //.find(queryObject).sort(sort);
   
    console.log(req.query);
    res.status(200).json({myData});
}



const getAllProductsTesting = async(req,res) => {

    const myData = await Product.find(req.query).select("name company")   // .sort("name -price"); // ?company=apple // test in url filter
    // sort = name ,price;
    //one or more query we use &

    console.log(req.query);

    res.status(200).json({myData})
}

// req.params  => url main request
// req.query   => mostly used for searching sorting, key value pair.
// req.body    =>  post/put

module.exports = { getAllProducts, getAllProductsTesting}


