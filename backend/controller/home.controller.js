import  Home  from "../model/home.model.js";

//add home data
export const addHomeData = async (req, res) => {
  try {
    const { name, position, desc,  github_url, linkedin_url, leadcode_url, whatsapp_url } = req.body;
    const images = req.file ? req.file.path : null; 
        if( !name|| !position|| !desc|| !github_url|| !linkedin_url|| !leadcode_url|| !whatsapp_url){
            return res.status(400).json({ message: "Please enter all fields" });
        }


        const existingData = await Home.findOne({});
    if (existingData) {
      return res.status(409).json({
        message: "Home data already exists. Please update the existing data.",
      });
    }
    // Create a new home data
    const newHomeData = await Home.create({
      name,
      position,
      desc,
      images,
      github_url,
      linkedin_url,
      leadcode_url,
      whatsapp_url,
    });

    // Send back the created home data
    res.status(201).json({ homeData: newHomeData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

//get the home data
export const getHomeData = async (req, res) => {
  try {
    const homeData = await Home.find();
    res.json(homeData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

//delete the home data
export const deleteHomeData = async (req, res) => {
    try {
      const homeData = await Home.findByIdAndDelete(req.params.id);
      if (!homeData) {
        return res.status(404).json({ message: "Home data not found" });
      }
      res.json({ message: "Home data deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };

  //update the home data
  export const updateHomeData = async (req, res) => {
    try {
      // Extract data from request body
      const { name, position, desc, github_url, linkedin_url, leadcode_url, whatsapp_url } = req.body;
  
      // Handle uploaded image
      const images = req.file ? req.file.path : null;
  
      // Create the updates object dynamically
      const updates = { name, position, desc, github_url, linkedin_url, leadcode_url, whatsapp_url };
  
      // Add the images field only if an image was uploaded
      if (images) {
        updates.images = images;
      }
  
      // Find and update the singleton document
      const homeData = await Home.findOneAndUpdate(
        {}, // Empty query to target the singleton document
        { $set: updates },
        { new: true } // Return the updated document
      );
  
      if (!homeData) {
        return res.status(404).json({ message: "Home data not found" });
      }
  
      res.json({ homeData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };
  