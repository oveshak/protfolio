import mongoose from "mongoose";






const protfolioSchema = new mongoose.Schema({ 

    image:{
        type: String,
        // required: true,
    },
    title:{
        type: String,
        required: true,
    },
    skills:{
        type: String,
        required: true,
    },
    live_link:{
        type: String,
        required: true,
    },
    github_link:{
        type: String,
        required: true,
    },
    my_work:{
        type: String,
        required: true,
    },
    subtitle:{
        type: String,
        required: true,
    }


}, { timestamps: true });


export const Protfolio = mongoose.model('Protfolio', protfolioSchema);