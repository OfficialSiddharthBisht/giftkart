const ApiFeatures = require("../utils/apiFeatures");
const Product = require("../models/productModel")

// Get all products
exports.getAllProducts = async (req, res) =>{
    const apiFeature = new ApiFeatures(Product.find(),req.query).search();
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products
    })
}