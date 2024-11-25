import { Contact } from "../model/contact.model.js";
import { ContactMessage } from "../model/contact.model.js";
// Add contact data
export const addContactData = async (req, res) => {
    try {
        const { email_value, message_value, whatapp_value, email_link, message_link, whatapp_link } = req.body;

        if (!email_value ||!message_value ||!whatapp_value ||!email_link ||!message_link ||!whatapp_link) {
            return res.status(400).json({ message: "Please enter all fields" });
        }


        const existingData = await Contact.findOne({});
        if (existingData) {
          return res.status(409).json({
            message: "contact data already exists. Please update the existing data.",
          });
        }
        const newContactData = new Contact({
            email_value,
            message_value,
            whatapp_value,
            email_link,
            message_link,
            whatapp_link,
        });

        await newContactData.save();

        res.json({ message: "Contact data added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


// Get all contact data
export const getContactData = async (req, res) => {
    try {
        const contactData = await Contact.find();
        res.json(contactData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}

//delete  contact data
export const deleteContactData = async (req, res) => {
    try {
        const contactData = await Contact.findByIdAndDelete(req.params.id);

        if (!contactData) {
            return res.status(404).json({ message: "Contact data not found" });
        }

        res.json({ message: "Contact data deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}


//post contact Message
export const postContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name ||!email ||!message) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        const newMessage = new ContactMessage({
            name,
            email,
            message,
        });

        await newMessage.save();

        res.json({ message: "Contact message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}

// Get all contact messages
export const getContactMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}

//delete  contact message
export const deleteContactMessage = async (req, res) => {
    try {
        const message = await ContactMessage.findByIdAndDelete(req.params.id);

        if (!message) {
            return res.status(404).json({ message: "Contact message not found" });
        }

        res.json({ message: "Contact message deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
}



