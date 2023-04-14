const { Schema, model} = require("mongoose")

const productShema = new Schema({

    name : {
        type : String,
        required : [true,"Please enter the name"],
        trim: true
    },
    description : {
        type : String,
        required : [true,"Please enter the description"],
        trim: true
    },
    price : {
        type: Number,
        required: [true, "Please enter the price"],
    },
    quantity : {
        type: Number,
        required: [true, "Please enter the quantity"],
    },
    likes : {
        type: Number,
        default: 0,
    }
}, {timestamp : true}
)

const Product = model("Product", productShema)
module.exports = Product;