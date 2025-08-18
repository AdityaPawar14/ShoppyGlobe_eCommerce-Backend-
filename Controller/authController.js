
import bcrypt from "bcryptjs";   //Used for hash and compare passwords securely
import jwt from "jsonwebtoken";    //Used to generate tokens (for login sessions)
import User from "../Model/User.js";

const SECRET_KEY = "your_jwt_secret";  // This key signs JWT tokens.
   // Register a New User
export const register = async (req, res) => {                   
  const { email, password } = req.body;        //Takes email and password from request body 

  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "User already exists" });  /// Searches MongoDB for existing user by email.

    const hash = await bcrypt.hash(password, 10); //Hashes the password using bcrypt.
    const newUser = await User.create({ email, password: hash });   //Stores the user in MongoDB 

    res.status(201).json({ message: "User registered", userId: newUser._id });  // successfully created user’s ID.
  } catch (err) {
    res.status(500).json({ message: "Error registering", error: err.message });
  }
};
///// login (Authenticate User)

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });   //Checks if user with email exists.
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password); // Compares entered password with hashed password in DataBase.
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" }); // Creates a JWT token that includes the user’s ID.
    res.json({ message: "Login successful", token });   //Token is signed,Token expires in 1 hour
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
};
