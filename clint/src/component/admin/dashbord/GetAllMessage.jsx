import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const GetAllMessage = () => {
    const [messages, setMessages] = useState([]);
    const token = Cookies.get('token');

    // Fetch all messages when the component mounts
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5050/contact/all-contact-message', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessages(response.data);  // Set the fetched data in state
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [token]);

    // Handle delete message
    
    const deleteMessage = async (id) => {
 
        try {
            await axios.delete(`http://127.0.0.1:5050/contact/contact-message/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Remove the deleted message from the state
            setMessages(messages.filter((message) => message._id !== id));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        <div className="w-full mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">All Contact Messages</h2>
            
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Message</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Created At</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message) => (
                        <tr key={message._id}>
                            <td className="px-4 py-2 border border-gray-300">{message.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{message.email}</td>
                            <td className="px-4 py-2 border border-gray-300">{message.message}</td>
                            <td className="px-4 py-2 border border-gray-300">{new Date(message.createdAt).toLocaleString()}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button 
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => deleteMessage(message._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetAllMessage;
