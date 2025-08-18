import Product from "../Model/Product.js";


// Creates new product
export const createProduct = async (req, res) => {
  const { name, price, description, quantity } = req.body;

  // Validation step
  if (!name || !price || !description || !quantity) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const product = new Product({ name, price, description, quantity });
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err.message });
  }
};

//  Fetch all products currently listed in the database system.
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

//New: Fetch a specific product record based on the given ID.
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};