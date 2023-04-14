const express = require('express')
const router = express.Router();
const productController = require("../controllers/productController")


router.get("/api/products", productController.getAllProducts)
router.get("/api/products/:name",productController.getSingleProduct)
router.post("/api/products/add",productController.addProduct)
router.delete("/api/products/delete/:id",productController.deleteProduct)
router.put("/api/products/update/:id",productController.updateProduct)


module.exports = router;