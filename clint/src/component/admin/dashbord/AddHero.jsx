import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const AddHero = () => {
    const token = Cookies.get('token');
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        desc: "",
        github_url: "",
        linkedin_url: "",
        leadcode_url: "",
        whatsapp_url: "",
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));
        if (image) data.append("image", image);

        try {
            const response = await axios.post("http://127.0.0.1:5050/home/add", data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            e.target.reset()
            alert("Hero added successfully!");
           
        } catch (error) {
            console.error("Error adding hero:", error);
            alert("Failed to add hero. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Hero</h2>

                {/* Text Fields */}
                {["name", "position", "desc", "github_url", "linkedin_url", "leadcode_url", "whatsapp_url"].map((field) => (
                    <div className="mb-4" key={field}>
                        <label className="block text-gray-700 font-medium mb-2 capitalize">{field.replace("_", " ")}</label>
                        <input
                            type={field === "desc" ? "textarea" : "text"}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}

                {/* Image Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddHero;
