import React, { useEffect, useState } from "react";
import SectionBar from "../other/SectionBar";
import axios from "axios";

const Skills = () => {
 




  const [fontend, setFontend] = useState([]);
  const [backend, setBackend] = useState([]);
 

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5050/skill");
        

        // Filter data based on type and set frontend and backend states
        const frontendData = response.data.filter(skill => skill.type === "Frontend");
        const backendData = response.data.filter(skill => skill.type === "Backend");

        setFontend(frontendData);
        setBackend(backendData);
        
      } catch (error) {
        console.error("Error fetching hero data:", error);
        alert("Failed to fetch hero data.");
      }
    };

    fetchHeroData();
  }, []);  // Empty dependency array to run once on component mount
  return (
    <section className="py-[5rem]">
      <SectionBar title={"My Skills"} desc={"My Technical Level"} />

      <div className="flex flex-col gap-9 justify-center lg:flex-row ">
        <div className="bg-[#fff] border border-[rgba(0,0,0,0.1)] rounded-[1.25rem] p-8 px-6 lg:px-16">
          <h3 className="text-[1rem] font-medium mb-[1.5rem] text-center">
            {" "}
           My Frontend Development Skills
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-7 gap-y-7 ">
              {fontend.map((skill, index) => (
                <div className="flex items-center gap-3 " key={index}>
                  <div className="text-[#a8a8a8] grayscale(40%)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M4.035 15.479A4 4 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16q0-.26-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479Q20 8.26 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8q0 .26.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479m1.442-5.403l1.102-.293l-.434-1.053A1.9 1.9 0 0 1 6 8c0-1.103.897-2 2-2c.247 0 .499.05.73.145l1.054.434l.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102l1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2c0 .247-.05.5-.145.73l-.434 1.053l1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293l.434 1.053c.095.23.145.483.145.73c0 1.103-.897 2-2 2c-.247 0-.499-.05-.73-.145l-1.054-.434l-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102l-1.054.434A1.9 1.9 0 0 1 8 18c-1.103 0-2-.897-2-2c0-.247.05-.5.145-.73l.434-1.053l-1.102-.293a1.993 1.993 0 0 1 0-3.848"
                      ></path>
                      <path
                        fill="black"
                        d="m15.742 10.71l-1.408-1.42l-3.331 3.299l-1.296-1.296l-1.414 1.414l2.704 2.704z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <span className="skills__level">{skill.skillsName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#fff] border border-[rgba(0,0,0,0.1)] rounded-[1.25rem] p-8 px-6 lg:px-16">
          <h3 className="text-[1rem] font-medium mb-[1.5rem] text-center">
            {" "}
           My Backend Development Skills
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-7 gap-y-7">
              {backend.map((skill, index) => (
                <div className="flex items-center gap-3 " key={index}>
                  <div className="text-[#a8a8a8] grayscale(40%)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M4.035 15.479A4 4 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16q0-.26-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479Q20 8.26 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8q0 .26.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479m1.442-5.403l1.102-.293l-.434-1.053A1.9 1.9 0 0 1 6 8c0-1.103.897-2 2-2c.247 0 .499.05.73.145l1.054.434l.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102l1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2c0 .247-.05.5-.145.73l-.434 1.053l1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293l.434 1.053c.095.23.145.483.145.73c0 1.103-.897 2-2 2c-.247 0-.499-.05-.73-.145l-1.054-.434l-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102l-1.054.434A1.9 1.9 0 0 1 8 18c-1.103 0-2-.897-2-2c0-.247.05-.5.145-.73l.434-1.053l-1.102-.293a1.993 1.993 0 0 1 0-3.848"
                      ></path>
                      <path
                        fill="black"
                        d="m15.742 10.71l-1.408-1.42l-3.331 3.299l-1.296-1.296l-1.414 1.414l2.704 2.704z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <span className="skills__level">{skill.skillsName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
