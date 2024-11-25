import mongoose from "mongoose";






const skillSchema = new mongoose.Schema({
        type:{
            type: String,
            required: true,
            enum: ['Frontend', 'Backend']
        },
        skillsName:{
            type: String,
            required: true,
            unique: true,
            
        }
    }, { timestamps: true }); // Adds createdAt and updatedAt fields

    export const Skills = mongoose.model('Skills', skillSchema);