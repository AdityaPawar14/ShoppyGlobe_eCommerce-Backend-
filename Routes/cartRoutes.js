
import express from "express";
import { authenticate } from "../Middleware/authMiddleware.js";
import { addToCart,updateCartQuantity,deleteCartItem } from "../Controller/cartController.js";

const router = express.Router();

router.post("/cart",authenticate, addToCart);    ///  Add to cart via POST request – the cart route is protected and needs a valid user token.
router.put("/cart/:id",authenticate, updateCartQuantity);  /// Update the cart item quantity using a PUT request in this route.
router.delete("/cart/:id", authenticate, deleteCartItem);  // Handle delete request to permanently remove an item from the collection.

export default router;
