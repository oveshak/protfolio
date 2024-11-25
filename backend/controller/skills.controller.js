

import { Skills } from "../model/skills.model.js";

//add skills data
export const addSkillsData = async (req, res) => {
    try {
        const { type, skillsName } = req.body;
        if (!type ||!skillsName) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        const existingSkillsData = await Skills.findOne({ skillsName });
        if (existingSkillsData) {
            return res.status(409).json({
                message: "Skills data already exists. Please update the existing data.",
            });
        }

        // Create a new skills data
        const newSkillsData = await Skills.create({ type, skillsName });

        // Send back the created skills data
        res.status(201).json({ skillsData: newSkillsData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}

//get the skills data
export const getSkillsData = async (req, res) => {
    try {
        const skillsData = await Skills.find();
        res.json(skillsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}

//delete the skills data
export const deleteSkillsData = async (req, res) => {
    try {
        const skillsData = await Skills.findByIdAndDelete(req.params.id);
        if (!skillsData) {
            return res.status(404).json({ message: "Skills data not found" });
        }
        res.json({ message: "Skills data deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}