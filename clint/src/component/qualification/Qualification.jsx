import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionBar from "../other/SectionBar";
import axios from "axios";

const Qualification = () => {
  const category = [
    {
      id: 1,
      name: "education",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-[#a8a8a8]"
        >
          <path
            fill="black"
            d="m21.49 10.19l-1-.55l-9-5h-.11a1 1 0 0 0-.19-.06h-.37a1 1 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87M16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5l.15.06h.09a1 1 0 0 0 .25 0a1 1 0 0 0 .25 0h.09a.5.5 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5L11 6.64l6.94 3.86Z"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: " experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21 21 0 0 0 3 .94v.59a1 1 0 0 0 2 0v-.21a23 23 0 0 0 3 .21a23 23 0 0 0 3-.21v.21a1 1 0 0 0 2 0v-.59a21 21 0 0 0 3-.94Zm0-7.69a20.4 20.4 0 0 1-3 1v-.31a1 1 0 0 0-2 0v.74a20.1 20.1 0 0 1-6 0v-.74a1 1 0 0 0-2 0v.33a20.4 20.4 0 0 1-3-1V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: "training",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16ZM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2"
          ></path>
        </svg>
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [data, setQualifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5050/api/qualification');
        setQualifications(response.data); // Assuming the API returns an array of qualifications
      } catch (err) {
        setError('Failed to fetch qualifications. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchQualifications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  // const data=[
  //   {
  //       "education": [
  //         {
  //           "name": "BSC in CSE",
  //           "institution": "Jashore University of Science and Technology",
  //           "date": "2015 - 2019",
  //           "position": "Graduated"
  //         },
  //         {
  //           "name": "Bachelor of Science in Computer Science",
  //           "institution": "Jashore University of Science and Technology",
  //           "date": "2015 - 2019",
  //           "position": "Graduated"
  //         },
  //         {
  //           "name": "Master of Science in Software Engineering",
  //           "institution": "University of ABC",
  //           "date": "2020 - 2022",
  //           "position": "Completed"
  //         }
  //       ],
  //       "experience": [
  //         {
  //           "name": "Software Engineer",
  //           "company": "TechCorp",
  //           "date": "2019 - 2021",
  //           "position": "Junior Developer"
  //         },
  //         {
  //           "name": "Senior Software Engineer",
  //           "company": "InnovateTech",
  //           "date": "2021 - Present",
  //           "position": "Lead Developer"
  //         }
  //       ],
  //       "training": [
  //         {
  //           "name": "Full Stack Web Development",
  //           "institution": "Tech Academy",
  //           "date": "2020",
  //           "position": "Completed"
  //         },
  //         {
  //           "name": "Machine Learning Specialization",
  //           "institution": "Coursera",
  //           "date": "2022",
  //           "position": "Completed"
  //         }
  //       ]
  //     }
      
  // ]

  return (
    <section className="py-[4rem]">
    <SectionBar title={"Qualification"} desc={"My Personal Journey"} />
    <Tabs>
      <TabList className="flex gap-4 lg:gap-10 pb-[30px] justify-center">
        {category.map((item, index) => (
          <Tab
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`flex gap-1 lg:gap-2 justify-center items-center cursor-pointer outline-none ${
              activeTab === index
                ? 'text-[#000] border-0'
                : 'text-[#a8a8a8] border-0'
            }`}
            style={{ border: 'none' }}
          >
            <div
              className={`text-[1.2rem] lg:text-[1.5rem] ${
                activeTab === index ? 'text-[#000]' : 'text-[#757575]'
              }`}
            >
              {item.icon}
            </div>
            <div
              className={`text-[1.2rem] lg:text-[1.5rem] font-medium capitalize ${
                activeTab === index ? 'text-[#000]' : 'text-[#a8a8a8]'
              }`}
            >
              {item.name}
            </div>
          </Tab>
        ))}
      </TabList>
  
      {category.map((item, index) => (
        <TabPanel key={item.id} >
          <div className="relative mt-10 max-w-xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-200" />
            
            {data.data[0][item.name.trim()]?.map((entry, i) => (
              <div key={i} className="relative grid grid-cols-2 gap-8 mb-8">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                </div>
  
                {/* Content Box */}
                {i % 2 === 0 ? (
                  <>
                    {/* Left Side Content */}
                    <div className="text-left pr-3 lg:pr-8">
                      <h3 className="font-medium text-[1.2rem] text-[#000] ">{entry.position
                      }</h3>
                      <p className="text-gray-600">
                        {entry.institution_company}
                      </p>
                      <div className="flex items-center justify-start gap-2 text-gray-500 mt-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{entry.start_date
                        } - {entry.last_date}</span>
                      </div>
                    </div>
                    <div></div> {/* Empty div for right side */}
                  </>
                ) : (
                  <>
                    <div></div> {/* Empty div for left side */}
                    {/* Right Side Content */}
                    <div className="pl-3 lg:pl-8">
                      <h3 className="font-medium text-[1.2rem] text-[#000]">{entry.position}</h3>
                      <p className="text-gray-600">
                        {entry.institution_company}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 mt-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{entry.start_date
                        } - {entry.last_date}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  </section>
  );
};

export default Qualification;
