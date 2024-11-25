import { User } from "../model/user.model.js";

import jwt from 'jsonwebtoken'
import  bcrypt  from "bcryptjs";





export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const image = req.file ? req.file.path : null; // Get the image path from the uploaded file
  
        // Check if all fields are provided
        if (!email || !password ) {
            return res.status(400).json({ message: "Please enter all fields" });
        }
  
        // Check if the password length is at least 8 characters
        if (password.length < 8) {
            return res.status(400).json({ message: "Password should be at least 8 characters long" });
        }
  
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
  
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
  
        // Create new user
        const newUser = await User.create({
            
            email,
            password: hashedPassword,
            
        });
  
        // Respond with the created user
        return res.status(201).json({ user: newUser });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server Error" });
    }
  };



export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if all fields are provided
      if (!email || !password ) {
        return res.status(400).json({ message: "Please enter all fields" });
      }
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      //check role
      
  
      // Create and return JWT
      const token = jwt.sign(
        { id: user._id }, 
        process.env.JWT_SECRET,  // Ensure this is defined correctly
        { expiresIn: '1h' }
      );
  
      // Set the cookie with the token
      return res
        .status(200)
        .cookie("token", token, {
          maxAge: 50 * 60 * 1000,   // 50 minutes
          httpOnly: true,           // Client-side JS can't access it
          sameSite: 'strict',       // Helps prevent CSRF
          // secure: process.env.NODE_ENV === 'production',  // Uncomment in production for HTTPS
        })
        .json({ user, token }); // Also returning the token in the response body
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  

  export const logout=async(req,res)=>{
    try{
        res.clearCookie("token","",{maxAge:0})
        return res.status(200).json({message:"Logged out"})
    }catch(e){
        console.error(e);
        res.status(500).json({error: 'Server Error'})
    }
}



export const loginUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            
  
        if (!user) return res.sendStatus(404); // User not found
  
        res.json({ user }); // Return user data
    } catch (error) {
        console.error('Error fetching user:', error);
        res.sendStatus(500); // Internal server error
    }
  };
  