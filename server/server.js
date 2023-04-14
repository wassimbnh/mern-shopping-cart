const express = require("express")
const app = express();
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const productRoutes = require("./routes/productRoutes")

const port = process.env.PORT || 5000

//db
mongoose.connect(process.env.MONGO_URL,
        console.log(`db connected on port `))

app.listen(port,
    console.log(`Server active on port ${port}`))


//mw
app.use(express.json())
app.use(productRoutes)