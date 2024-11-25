import { Protfolio } from "../model/protfolio.model.js";

//add the protfolio
export const addProtfolio =async (req,res)=>{
    try {
        const { title, skills, live_link, github_link, my_work, subtitle } = req.body;
        
        const image = req.file ? req.file.path : null; 
        if(!title || !skills || !my_work || !live_link || !github_link || !subtitle) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }
        const newProtfolio = new Protfolio({
            image,
            title,
            skills,
            live_link,
            github_link,
            my_work,
            subtitle
        });

        await newProtfolio.save();
        res.json(newProtfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


//get the protfolio data
export const getProtfolio = async (req,res)=>{
    try {
        const protfolio = await Protfolio.find();
        res.json(protfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


//delete the protfolio data
export const deleteProtfolio = async (req,res)=>{
    try {
        const protfolio = await Protfolio.findByIdAndDelete(req.params.id);
        if(!protfolio) {
            return res.status(404).json({ message: "Protfolio data not found." });
        }
        res.json({ message: "Protfolio data deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


//update the protfolio data
export const updatePortfolio = async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File:", req.file);

        const { title, skills, live_link, github_link, my_work, subtitle } = req.body;
        const image = req.file ? req.file.path : null;

        const portfolio = await Protfolio.findByIdAndUpdate(
            req.params.id,
            { image, title, skills, live_link, github_link, my_work, subtitle },
            { new: true }
        );

        if (!portfolio) {
            return res.status(404).json({ message: "Portfolio data not found." });
        }

        res.json(portfolio);
    } catch (error) {
        console.error("Error updating portfolio:", error);
        res.status(500).json({ error: "An error occurred while updating the portfolio." });
    }
};




