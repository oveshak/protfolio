import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
const AddPortfolio = () => {
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [myWork, setMyWork] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState(null);
  const token = Cookies.get('token');
  // Handle file upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Submit the form data
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create form data to send the image and other form fields
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('skills', skills);
    formData.append('live_link', liveLink);
    formData.append('github_link', githubLink);
    formData.append('my_work', myWork);
    formData.append('subtitle', subtitle);

    try {
      const response = await axios.post('http://127.0.0.1:5050/protfolio/add', formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      });

      
      // You can redirect or reset the form here as needed
    } catch (error) {
      console.error('Error adding portfolio:', error);
      alert('Failed to add portfolio.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Project Skills</label>
          <input
            type="text"
            id="skills"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="liveLink" className="block text-sm font-medium text-gray-700">Live Link</label>
          <input
            type="url"
            id="liveLink"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">GitHub Link</label>
          <input
            type="url"
            id="githubLink"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="myWork" className="block text-sm font-medium text-gray-700">My Work</label>
          <textarea
            id="myWork"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={myWork}
            onChange={(e) => setMyWork(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            id="image"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={handleImageChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Portfolio
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;

