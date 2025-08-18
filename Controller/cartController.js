import Cart from "../Model/Cart.js";
import Product from "../Model/Product.js";

  ////  making a function used for add to cart items
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Product ID and quantity are required." });
  }

  try {
    // Checks if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Add to cart
    const newCartItem = new Cart({ productId, quantity });
    await newCartItem.save();

    res.status(201).json({ message: "Product added to cart", cartItem: newCartItem });
  } catch (err) {
    res.status(500).json({ message: "Failed to add product to cart", error: err.message });
  }
};


/// Function to update the quantity of product

export const updateCartQuantity = async (req, res) => {
  const { id } = req.params;        // Gets the cart item's MongoDB _id directly from the request URL parameter.
  const { quantity } = req.body;   // Gets the new quantity value directly from the request body data.
          
  // validate quantity
  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: "Valid quantity is required" });
  }

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      id,                                 // find by _id
      { quantity },                       // update the `quantity` field
      { new: true }                       // return the updated document
    );
      
    
    ///  validate updatecart
    if (!updatedCart) {
      return res.status(404).json({ message: "Cart item not found" });
    }
       //Send back the updated cart item along with a confirmation success message.
    res.json({ message: "Cart quantity updated", updatedCart });
  } catch (err) {
    res.status(500).json({ message: "Error updating cart item", error: err.message });  //If error occurs
  }
};

//// Making a function for deletion of item from the database

export const deleteCartItem = async (req, res) => {
  const { id } = req.params;         // Gets the cart item's MongoDB _id value directly from the request URL   

  try {
    const deletedItem = await Cart.findByIdAndDelete(id);   // find by id
      ///  validate item
    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
      //  Send a response confirming successful deletion of the requested item.
    res.json({ message: "Cart item deleted successfully", deletedItem });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete cart item", error: err.message });  //If error occurs
  }
};