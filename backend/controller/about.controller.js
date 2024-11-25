import { About } from "../model/about.model.js";




//add about
export const addAboutData = async (req, res) => {
  try {
    const {  desc, experience_year, completed_project,cv_url } = req.body;
    const image = req.file ? req.file.path : null; 
   
        if(  !desc|| !experience_year|| !completed_project){
            return res.status(400).json({ message: "Please enter all fields" });
        }

        const existingData = await About.findOne({});
        if (existingData) {
          return res.status(409).json({
            message: "about data already exists. Please update the existing data.",
          });
        }

    const about = new About({ image, desc, experience_year, completed_project, cv_url });
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//get about data
export const getAboutData = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//delete about data
export const deleteAboutData = async (req, res) => {
  try {
    const about = await About.findByIdAndDelete(req.params.id);
    if (!about) return res.status(404).json({ message: "About data not found" });
    res.json({ message: "About data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//update about data
export const updateAboutData = async (req, res) => {
    try {
      const { desc, experience_year, completed_project,cv_url } = req.body;
  
      // Check if a file is uploaded and assign the appropriate paths
      const image = req.file ? req.file.path : null; 
     
  
      // Create the updated data object with optional file paths
      const updateData = {
        desc,
        experience_year,
        completed_project,
        image,
        cv_url
      };
  
      // Remove any fields that have null values to avoid overwriting them
      Object.keys(updateData).forEach(key => updateData[key] === null && delete updateData[key]);
  
      // Update the About data
      const about = await About.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
  
      if (!about) {
        return res.status(404).json({ message: "About data not found" });
      }
  
      res.json(about);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
