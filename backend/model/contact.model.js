import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({ 
    email_value:{
        type: String,
        required: true,
    },
    message_value:{
        type: String,
        required: true,
    },
    whatapp_value:{
        type: String,
        required: true,
    },
    email_link:{
        type: String,
        required: true,
    },
    message_link:{
        type: String,
        required: true,
    },
    whatapp_link:{
        type: String,
        required: true,
    }



}, { timestamps: true });


export const Contact = mongoose.model('Contact', contactSchema);



const contactMessageSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }


}, { timestamps: true });

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);