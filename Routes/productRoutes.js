import express from "express";
import { getAllProducts, getProductById,createProduct } from "../Controller/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);         // Get all products
router.get("/products/:id", getProductById);     //  Get a single product by ID
router.post("/products", createProduct);       //  Add a new product

export default router;