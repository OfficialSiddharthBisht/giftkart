const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    listOfImages: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    options: [],
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true
    },
    Quantity: String,
    Rating: {
        type: Number,
        default: 1
    },
    BrandName: String
})

module.exports = mongoose.model("Product",productSchema);
/*
listOfImages: [],
options : [ ] //this will be list used for dropdown,
name : “”,
description: “”,
_id: “”,
Productid: “”,
Quantity: “”,
Rating: number, // possible values – 1,2,3,4,5
brandName: “”}
*/