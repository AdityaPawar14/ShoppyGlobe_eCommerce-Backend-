import jwt from "jsonwebtoken";   //This is used to verify and decode JWT tokens for user validation.
const SECRET_KEY = "your_jwt_secret";  // Ensure this is the same secret key used to sign() the JWT during user login.



//// Middleware Function
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];   //Extract JWT the Token

  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);  //Indicates the token is valid, unchanged, and free from any tampering attempts.
    req.user = decoded;
    next();           //When the token is verified as valid → continue execution towards the next route handler..
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};