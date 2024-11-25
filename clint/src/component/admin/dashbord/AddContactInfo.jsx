import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AddContactInfo = () => {
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [whatsappValue, setWhatsappValue] = useState('');
  const [messengerValue, setMessengerValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if all fields are filled
    if (!emailValue.trim() || !messageValue.trim() || !whatsappValue.trim() || !messengerValue.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }
  
    const token = Cookies.get('token');
  
    // Generate the dynamic links
    const emailLink = `mailto:${emailValue}?subject=Hello&body=${encodeURIComponent(messageValue)}`;
    const whatsappLink = `https://wa.me/${whatsappValue.replace('+', '')}?text=${encodeURIComponent(messageValue)}`;
    const messageLink = messengerValue;
  
    const contactData = {
        email_value: emailValue,
        message_value: messageValue,
        whatapp_value: whatsappValue,
        email_link: emailLink,
        message_link: messageLink,
        whatapp_link: whatsappLink,
    };
  
    try {
       
      const response = await axios.post('http://127.0.0.1:5050/contact/add', contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      alert('Contact information added successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to add contact information.';
      console.error('Error adding contact information:', errorMessage);
      alert(errorMessage);
    }
  };
  
  
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add Contact Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
            WhatsApp Number
          </label>
          <input
            type="text"
            id="whatsapp"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={whatsappValue}
            onChange={(e) => setWhatsappValue(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="messenger" className="block text-sm font-medium text-gray-700">
            Messenger Link
          </label>
          <input
            type="text"
            id="messenger"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            value={messengerValue}
            onChange={(e) => setMessengerValue(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Contact Info
        </button>
      </form>
    </div>
  );
};

export default AddContactInfo;
