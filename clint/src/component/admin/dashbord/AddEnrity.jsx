import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AddEntity = () => {
    const [type, setType] = useState('education');
    const [institution, setInstitution] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [position, setPosition] = useState('');
    const token = Cookies.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEntity = {
            type,
            institution_company: institution,
            start_date: startDate,
            last_date: endDate,
            position,
        };

        try {
            const response = await axios.post('http://127.0.0.1:5050/api/add', newEntity, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Handle successful response
            

            // Reset the form fields after successful submission
            setType('education');
            setInstitution('');
            setStartDate('');
            setEndDate('');
            setPosition('');

        } catch (error) {
            console.error('Error adding entity:', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">Add Education/Training Entry</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Type Selection */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="education">Education</option>
                        <option value="training">Training</option>
                        <option value="experience">Experience</option>
                    </select>
                </div>

                {/* Institution/Company */}
                <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution/Company</label>
                    <input
                        type="text"
                        id="institution"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {/* Start Date */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="text"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {/* End Date */}
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="text"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {/* Position */}
                <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">job Position/study</label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Entry
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEntity;
