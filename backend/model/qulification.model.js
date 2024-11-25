import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({ 
    type:{
        type: String,
        required: true,
        enum: ['education', 'experience',"training"]
    },
    institution_company: { type: String , required: true},
   
    start_date: { type: String, required: true },
    last_date: { type: String},
    position: { type: String, required: true }
}, { timestamps: true }); 

export const Entry = mongoose.model('Entry', entrySchema);

const qulificationSchema = new mongoose.Schema({  

    education:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entry',
        },
    ],
    experience:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entry',
        },
    ],
    training:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entry',
        },
    ],

}, { timestamps: true }); 

export const Qulification = mongoose.model('Qulification', qulificationSchema);

