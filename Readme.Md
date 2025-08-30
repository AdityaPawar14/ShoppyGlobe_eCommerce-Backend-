ShoppyGlobe eCommerce Backend
Overview
ShoppyGlobe is a backend API for an eCommerce platform, built with Node.js and Express. It provides authentication, product management, and cart functionality.

Features
User authentication (register, login)
Product CRUD operations
Cart management (add, remove, update items)
Middleware for route protection
Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
JWT for authentication

Project Structure
Controller/
  authController.js
  cartController.js
  productController.js
Middleware/
  authMiddleware.js
Model/
  Cart.js
  Product.js
  User.js
Routes/
  authRoutes.js
  cartRoutes.js
  productRoutes.js
server.js


Setup Instructions
1. Clone the repository:
cd backend SHoppyGlobe

2. Install dependencies:
npm install

API Endpoints
Auth
POST /api/auth/register - Register a new user
POST /api/auth/login - Login
Products
GET /api/products - List all products
POST /api/products - Add a product
PUT /api/products/:id - Update a product
DELETE /api/products/:id - Delete a product
Cart
GET /api/cart - Get user cart
POST /api/cart - Add item to cart
PUT /api/cart/:itemId - Update cart item
DELETE /api/cart/:itemId - Remove item from cart


## MY SERVER IS STARTING WITHIN 5000 ms 