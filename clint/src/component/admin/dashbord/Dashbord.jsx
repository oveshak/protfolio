import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Dummy components for routing

const Dashboard = () => {
    return (
       
            <div className="min-h-screen bg-gray-100 flex flex-col">
                {/* Navbar */}
                <header className="bg-white shadow-md py-4 px-6">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </header>

                {/* Main Content */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white shadow-md p-4">
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        to="/dashboard/addhero"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add hero
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/addabout"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add about
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/addskill"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add skills
                                    </Link>
                                </li>

<li>
                                    <Link
                                        to="/dashboard/addprotfolio"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add protfolio
                                    </Link>
                                </li>

<li>
                                    <Link
                                        to="/dashboard/addcontactinfo"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add contactInfo
                                    </Link>
                                </li>
                              <li>
                                    <Link
                                        to="/dashboard/getallmessage"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        get all message
                                    </Link>
                                </li>  
                                <li>
                                    <Link
                                        to="/dashboard/add"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add entry
                                    </Link>
                                </li> 

                                 <li>
                                    <Link
                                        to="/dashboard/addqulification"
                                        className="block text-gray-700 hover:text-blue-500 font-medium"
                                    >
                                        add Qulification
                                    </Link>
                                </li>
                                 
                            </ul>
                        </nav>
                    </aside>

                    {/* Dashboard Content */}
                    <main className="flex-1 p-6">
                        <Outlet/>
                    </main>
                </div>
            </div>
        
    );
};

export default Dashboard;
