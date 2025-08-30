import express from "express"
import mongoose from "mongoose"
import authRoutes from "./Routes/authRoutes.js"
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";

const app = new express();
app.use(express.json());   // Using express.json() to automatically parse JSON data from requests.
app.use("/", productRoutes); //Use the productRoutes file to handle and serve all product-specific routes.
app.use("/", cartRoutes);     //  Use the cartRoutes file to handle and serve all cart-specific routes.
app.use("/", authRoutes);

app.listen(4040,() =>{
    console.log("Sever is running on port 4040")  //Server is successfully created and listening for requests at port 4040.
});



mongoose.connect("mongodb+srv://ap14052003:lOLXH9icnDWoDAXJ@cluster0.95csodb.mongodb.net/")  // Making a connection with the MongoDB database using mongoose.

.then(() => console.log("DB successfuly connected"))
.catch(error => console.log(error))


