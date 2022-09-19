const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");

// Create Product
exports.createProduct = async(req , res, next) =>{
    const product = await Product.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
}

// Get all products
exports.getAllProducts = async (req, res) =>{
    const apiFeature = new ApiFeatures(Product.find(),req.query).search();
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products
    })
}

// get product detalils
exports.getProductDetails = async(req , res,next) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message: "Product Not Found"
        })
    }
    res.status(200).json({
        success:true,
        product
    })

}