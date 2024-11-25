import React, { useEffect, useState } from 'react';
import SectionBar from '../other/SectionBar';
import { getBaseUrl } from '../../utils/baseUrl.js';
import axios from 'axios';


const About = () => {


    const [heroData, setHeroData] = useState('');


  useEffect(() => {
      const fetchHeroData = async () => {
          try {
              const response = await axios.get(`${getBaseUrl()}/about`);
              setHeroData(response.data[0]);
              
          } catch (error) {
              console.error("Error fetching hero data:", error);
              alert("Failed to fetch hero data.");
          }
      };

      fetchHeroData();
  }, []);





    return (
        <section className='py-[1.5rem] lg:py-[4rem]' id='#about'>
            <SectionBar title={"About Me"} desc={"My introduction"}/>



            <div className='flex gap-5 flex-col lg:flex-row '>


                <div className='w-full flex justify-center items-center lg:w-1/2'>
                    <img src={heroData.image} alt=""  className='w-[350px] rounded-[1.5rem] bg-cover bg-center bg-no-repeat grayscale-[40%] hover:grayscale-[0%]'/>
                </div>

                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='grid  gap-[.5rem] grid-cols-[repeat(3,_115px)] lg:grid-cols-[repeat(3,_150px)] mb-[2rem] justify-center'>
                    <div className='bg-[#fff] border border-[#0000001a] rounded-[0.75rem]  p-[1rem_1.25rem] text-center'>
                        <div className='text-[1.5rem] mb-3 flex justify-center text-[#000]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8.999c0 1.902.765 3.627 2 4.89V21a.998.998 0 0 0 1.447.895L12 20.118l3.553 1.776a.99.99 0 0 0 .972-.043c.295-.183.475-.504.475-.851v-7.11a6.98 6.98 0 0 0 2-4.891C19 5.14 15.86 2 12 2S5 5.14 5 8.999m7.447 9.106a1 1 0 0 0-.895 0L9 19.382v-4.067c.911.434 1.926.685 3 .685s2.089-.25 3-.685v4.066zM12 4c2.756 0 5 2.242 5 4.999A5.006 5.006 0 0 1 12 14c-2.757 0-5-2.243-5-5.001A5.005 5.005 0 0 1 12 4"></path></svg>
                        </div>
                            <h6 className='text-[1rem] font-medium '>Experience</h6>
                            <p className='text-[0.625rem]'>{heroData.experience_year}+ Years Working</p>
                        </div>



                        <div className='bg-[#fff] border border-[#0000001a] rounded-[0.75rem]  p-[1rem_1.25rem] text-center'>
                        <div className='text-[1.5rem] mb-3 flex justify-center text-[#000]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-4 2v11H8V8zm-1-4v2H9V4zM4 8h2v11H4zm14 11V8h2l.001 11z"></path></svg>
                        </div>
                            <h6 className='text-[1rem] font-medium '>Completed</h6>
                            <p className='text-[0.625rem]'>{heroData.completed_project
                            } + Projects</p>
                        </div>



                        <div className='bg-[#fff] border border-[#0000001a] rounded-[0.75rem]  p-[1rem_1.25rem] text-center'>
                        <div className='text-[1.5rem] mb-3 flex justify-center text-[#000]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10"></path></svg>
                        </div>
                            <h6 className='text-[1rem] font-medium '>Support</h6>
                            <p className='text-[0.625rem]'>Online 24/7</p>
                        </div>
                    </div>


                    <p className='text-[#a8a8a8] text-[17px] text-center lg:text-left mb-[3rem] lg:pr-[4rem]'>
                    {heroData.
desc

                            }
                    </p>

                    <div className='flex justify-center lg:block lg:justify-start'>
                    <a
  href={`${heroData.cv_url}`} target='blank' 
  download
  className="bg-gray-800 text-white py-4 px-8 rounded-xl inline-flex
 font-medium items-center space-x-2 hover:bg-gray-700 transition-all duration-300 mx:auto"
>
  <span>Download CV</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M9 10h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.09 0a.9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></path>
  </svg>
</a>
                    </div>

                </div>



            </div>
        </section>
    );
}

export default About;
