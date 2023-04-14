const Products = require("../Models/productModel")


const productController = {
    getAllProducts : async (req, res) =>{
        const products = await Products.find()
        res.status(200).json(products)
    },

    getSingleProduct : async (req, res) =>{
        const name = req.params.name;
        const product = await Products.findOne({name})

        if(product){
            return res.status(200).json(product)
        }
        return res.status(401).json({msg : "Product not found"})
    },

    addProduct : async (req, res) =>{
        //get product
        //const  {name,desc,} = req.body
        //verify fields
        if(!req.body){
            return res.status(400).json({msg : "Please fill in all fields"})

        }
        //add
        const newProduct = await Products.create({
            name:req.body.name,
            description : req.body.description,
            price : req.body.price,
            quantity: req.body.quantity
        })

        res.status(200).json(newProduct)
    },

    deleteProduct : async (req, res) =>{
        try
        {
        const idDel = req.params.id;
        const prod = await Products.findById(idDel)
        if(!prod){
            res.status(400).json({msg : "Product does not exists"})
            return;
        }
         await Products.findByIdAndRemove(idDel)
         res.status(200).json({msg : "Product deleted"})
         return;
        }
        catch(err){
            res.status(500).json({msg: err.message})
        }
    },

    updateProduct : async (req, res) =>{
        try{
            const id = req.params.id;
            const prod = await Products.findById(id)
            if(!prod){
                res.status(400).json({msg : "Product does not exists"})
                return;
            }
        //update
        await Products.findByIdAndUpdate(id,req.body)
        res.status(200).json({msg : "Product updated"})
        }
        catch(err){
            res.status(500).json({msg : err.message})
        }
       

    }

}

module.exports = productController;