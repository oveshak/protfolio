import { Qulification } from "../model/qulification.model.js";
import { Entry } from "../model/qulification.model.js";


//add all entries
export const addAllEntriesData = async (req, res) => {
    try{

        const {type,institution_company,start_date,last_date,position} = req.body
        if(!type ||!institution_company ||!start_date ||!position){
            return res.status(400).json({ message: "Please enter all fields" });
        }
        const newEntry = new Entry({
            type,
            institution_company,
            start_date,
            last_date,
            position,
        });
        await newEntry.save();
        res.json({message: "Data added successfully"});


    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
}

//get all entries
export const getAllEntriesData = async (req, res) => {
    try{
        const entries = await Entry.find();
        res.json(entries);
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
}





//add all qualifications
export const addAllQualificationsData = async (req, res) => {
  
        try {
            const { education, experience, training } = req.body;
    
            // Validate the input data
            if (!education || !experience || !training) {
                return res.status(400).json({ message: "All fields (education, experience, training) are required." });
            }
            const existingData = await Qulification.findOne({});
            if (existingData) {
              return res.status(409).json({
                message: "Qulification data already exists. Please update the existing data.",
              });
            }
            // Create a new qualification document
            const qulification = new Qulification({
                education,
                experience,
                training,
            });
    
            // Save the document to the database
            const savedQulification = await qulification.save();
            res.status(201).json(savedQulification);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server Error" });
        }
    };


//get all qualifications
export const getAllQualificationsData = async (req, res) => {
    try {
        const qulifications = await Qulification.find()
            .populate('education')
            .populate('experience')
            .populate('training');

        res.json({ data: qulifications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

//update qualifications
export const updateQualificationsData = async (req, res) => {
    try {
        const { education, experience, training } = req.body;

        const updatedQulification = await Qulification.findByIdAndUpdate(
            req.params.id,
            { education, experience, training },
            { new: true }
        )
            .populate('education')
            .populate('experience')
            .populate('training');

        if (!updatedQulification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }

        res.json({ message: 'Qualification updated successfully', data: updatedQulification });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

//delete qualifications
export const deleteQualificationsData = async (req, res) => {
    try {
        const deletedQulification = await Qulification.findByIdAndDelete(req.params.id);

        if (!deletedQulification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }

        res.json({ message: 'Qualification deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

}


