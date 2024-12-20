import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: String, 
        required: true,
        minlength: 8 
    },
      
    

}, { timestamps: true }); // Adds createdAt and updatedAt fields

export const User = mongoose.model('User', userSchema);