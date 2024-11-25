import mongoose from "mongoose";

let Home; // Declare the model variable

const homeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      
    },
    github_url: {
      type: String,
      required: true,
    },
    linkedin_url: {
      type: String,
      required: true,
    },
    leadcode_url: {
      type: String,
      required: true,
    },
    whatsapp_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Singleton pattern for Mongoose model
if (mongoose.models.Home) {
  Home = mongoose.models.Home; // Use existing model
} else {
  Home = mongoose.model("Home", homeSchema); // Create and assign the model
}

export default Home;
