import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
   
    image: {
        type: String,
        //required: true,
        
    },
    desc: { 
        type: String, 
        required: true,
         
    },
    experience_year: {
        type: Number,
        required: true,
    },
    completed_project:{
        type: Number,
        required: true,
    },
    cv_url:{
        type: String,
        // required: true,
    }
      
    

}, { timestamps: true }); // Adds createdAt and updatedAt fields

export const About = mongoose.model('About', aboutSchema);