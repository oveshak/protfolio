import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
const AddSkill = () => {
  const [type, setType] = useState('Backend'); // Default value "Backend"
  const [skillsName, setSkillsName] = useState('');
  const token = Cookies.get('token');
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const skillData = {
      type,
      skillsName
    };

    try {
      const response = await axios.post('http://127.0.0.1:5050/skill/add', skillData,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      });
      
      
      // Optionally reset the form
      setType('Backend');
      setSkillsName('');
    } catch (error) {
      console.error('There was an error adding the skill:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Skill</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Type Dropdown */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Skill Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
          </select>
        </div>

        {/* Skill Name Input */}
        <div className="mb-4">
          <label htmlFor="skillsName" className="block text-sm font-medium text-gray-700">Skill Name</label>
          <input
            type="text"
            id="skillsName"
            value={skillsName}
            onChange={(e) => setSkillsName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter skill name"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;

