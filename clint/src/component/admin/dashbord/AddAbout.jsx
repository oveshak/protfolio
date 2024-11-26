import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const AddAbout = () => {
    const token = Cookies.get('token');
  const [image, setImage] = useState(null); // Changed to store the file
  const [desc, setDesc] = useState('');
  const [experienceYear, setExperienceYear] = useState('');
  const [completedProject, setCompletedProject] = useState('');
  const [cvUrl, setCvUrl] = useState('');

  // Handle file input change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected image file
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare FormData to send the image and other data
    const formData = new FormData();
    formData.append('image', image); // Appending image file
    formData.append('desc', desc);
    formData.append('experience_year', experienceYear);
    formData.append('completed_project', completedProject);
    formData.append('cv_url', cvUrl);

    try {
      const response = await axios.post('http://127.0.0.1:5050/about/add', formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      });
      
      // Optionally reset the form fields
      setImage(null);
      setDesc('');
      setExperienceYear('');
      setCompletedProject('');
      setCvUrl('');
    } catch (error) {
      console.error('There was an error adding the about data:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add About Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange} // Handle image selection
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experienceYear" className="block text-sm font-medium text-gray-700">Years of Experience</label>
          <input
            type="number"
            id="experienceYear"
            value={experienceYear}
            onChange={(e) => setExperienceYear(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter years of experience"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="completedProject" className="block text-sm font-medium text-gray-700">Completed Projects</label>
          <input
            type="number"
            id="completedProject"
            value={completedProject}
            onChange={(e) => setCompletedProject(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter number of completed projects"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cvUrl" className="block text-sm font-medium text-gray-700">CV URL</label>
          <input
            type="text"
            id="cvUrl"
            value={cvUrl}
            onChange={(e) => setCvUrl(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter CV URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add About Info
        </button>
      </form>
    </div>
  );
}

export default AddAbout;
