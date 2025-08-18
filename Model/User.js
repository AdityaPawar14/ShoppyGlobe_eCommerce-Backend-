import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  //Defining schema validation here with required fields to ensure proper data entry.
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);  // Initialize the user collection based on the schema for storing user records.
export default User;