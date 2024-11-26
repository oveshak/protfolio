import React, { useEffect, useState } from 'react';
import SectionBar from '../other/SectionBar';
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import axios from 'axios';

const Protfolio = () => {

   


      const [projectData, setHeroData] = useState([]);


  useEffect(() => {
      const fetchHeroData = async () => {
          try {
              const response = await axios.get("http://127.0.0.1:5050/protfolio/");
              setHeroData(response.data);
              
          } catch (error) {
              console.error("Error fetching hero data:", error);
              alert("Failed to fetch hero data.");
          }
      };

      fetchHeroData();
  }, []);
    return (
        <section className='py-[5rem]'>
            <SectionBar title="Protfolio" desc="My Work"/>



<div className='pt-2'>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {projectData.map((project, index) => (
        <div 
          key={index} 
          className="bg-white border-solid border-2 border-[#a8a8a8] rounded-xl overflow-hidden transform transition-all duration-300  hover:shadow-xl"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover hover:-scale75"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                e.target.className = 'w-full h-full bg-gray-200 object-contain p-4';
              }}
            />
          </div>

          {/* Project Details */}
          <div className="p-5">
            <div className="flex justify-center items-center mb-3 ">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
             
            </div>
            

            <p className="text-gray-600 text-sm mb-4">{project.subtitle}</p>

            <div className="mb-4 flex justify-center">
              
              <p className="text-gray-500 text-sm">{project.my_work}</p>
            </div>

            <div className='flex justify-center my-4'>
            <span className=" text-gray-600 text-center ">
                {project.skills}
              </span>
            </div>

            {/* Project Links */}
            <div className="flex justify-between ">
              <a 
                href={project.
                  github_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg transition-colors"
              >
                 < FaGithub size={18} className="mr-2" /> 
                GitHub
              </a>
              <a 
                href={project.live_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#000] hover:bg-gray-700 transition-all duration-300 text-white px-3 py-2 rounded-lg "
              >
                 <IoMdLink size={18} className="mr-2" /> 
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>


        </section>
    );
}

export default Protfolio;
