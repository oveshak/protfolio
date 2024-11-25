import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

const AddQualification = () => {
  const [qualifications, setQualifications] = useState({
    education: [],
    experience: [],
    training: [],
  });
  const [selectedQualifications, setSelectedQualifications] = useState({
    education: [],
    experience: [],
    training: [],
  });

  // Fetch qualifications data
  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5050/api/');
        const groupedQualifications = {
          education: response.data.filter(item => item.type === 'education'),
          experience: response.data.filter(item => item.type === 'experience'),
          training: response.data.filter(item => item.type === 'training'),
        };
        setQualifications(groupedQualifications);
      } catch (error) {
        console.error('Error fetching qualifications:', error);
      }
    };

    fetchQualifications();
  }, []);

  // Handle multi-select changes
  const handleChange = (e, type) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedQualifications(prevState => ({
      ...prevState,
      [type]: selectedOptions,
    }));
  };

  // Submit selected qualifications
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        education: selectedQualifications.education,
        experience: selectedQualifications.experience,
        training: selectedQualifications.training,
      };
      const token = Cookies.get('token');
      const response = await axios.post('http://127.0.0.1:5050/api/qualification/add', payload,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      });
      
      alert('Qualifications added successfully!');
    } catch (error) {
      console.error('Error submitting qualifications:', error);
      alert('Failed to add qualifications.');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Qualification</h2>
      <form onSubmit={handleSubmit}>
        {/* Education Selector */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Education</label>
          <select
            multiple
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => handleChange(e, 'education')}
          >
            {qualifications.education.map(item => (
              <option key={item._id} value={item._id}>
                {item.institution_company} - {item.position}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Selector */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Experience</label>
          <select
            multiple
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => handleChange(e, 'experience')}
          >
            {qualifications.experience.map(item => (
              <option key={item._id} value={item._id}>
                {item.institution_company} - {item.position}
              </option>
            ))}
          </select>
        </div>

        {/* Training Selector */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Training</label>
          <select
            multiple
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => handleChange(e, 'training')}
          >
            {qualifications.training.map(item => (
              <option key={item._id} value={item._id}>
                {item.institution_company} - {item.position}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQualification;
