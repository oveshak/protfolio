import React, { useEffect, useState } from "react";

import axios from "axios";

const Hero = ({scrollToSection}) => {

  const [heroData, setHeroData] = useState('');


  useEffect(() => {
      const fetchHeroData = async () => {
          try {
              const response = await axios.get("http://127.0.0.1:5050/home");
              setHeroData(response.data[0]);
              
          } catch (error) {
              console.error("Error fetching hero data:", error);
              alert("Failed to fetch hero data.");
          }
      };

      fetchHeroData();
  }, []);



  return (
    <div className="py-[5rem] ">
      <div className="flex flex-col lg:flex-row gap-6 lg:pt-[80px] ">
        <div className="w-full lg:w-2/3 flex gap-10">
          <div className="flex flex-col gap-6 justify-center">
            <a href={heroData.leadcode_url}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] text-[#7d7d7d] hover:text-[#000] transition-all duration-300" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"></path></svg>
            </a>


            <a href={heroData.whatsapp_url}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] text-[#7d7d7d] hover:text-[#000] transition-all duration-300" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>
            </a>

            <a href={heroData.linkedin_url}>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] text-[#7d7d7d] hover:text-[#000] transition-all duration-300" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"></path>
  </svg>
</a>

            <a href={heroData.github_url}>
            <svg xmlns="http://www.w3.org/2000/svg"className="w-[1.5rem] text-[#7d7d7d] hover:text-[#000] transition-all duration-300" viewBox="0 0 24 24"><path fill="currentColor" d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.7 5.7 0 0 0-1.837-2.415a1 1 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.4 4.4 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182M20.737 5.377q.049-.187.09-.42a6.3 6.3 0 0 0-.408-3.293a1 1 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.9 13.9 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a1 1 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357q.037.191.079.354a6.27 6.27 0 0 0-1.256 3.83a8 8 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a5 5 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.7 1.7 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a7 7 0 0 1-.033-.738a4.26 4.26 0 0 1 .92-2.713a3 3 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.4 3.4 0 0 1-.155-.555a4.1 4.1 0 0 1 .079-1.616a7.5 7.5 0 0 1 2.415 1.18a1 1 0 0 0 .827.133a11.8 11.8 0 0 1 6.173.001a1 1 0 0 0 .83-.138a7.6 7.6 0 0 1 2.406-1.19a4 4 0 0 1 .087 1.578a3.2 3.2 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.12 4.12 0 0 1 20 9.203a7 7 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3 3 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a5 5 0 0 0-.155-1.311a4 4 0 0 0-.116-.416a6.51 6.51 0 0 0 5.445-6.424A9 9 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826"></path></svg>
            </a>
            {/* Repeat for other icons */}
          </div>
          <div className="hidden lg:block">
            <h1 className="text-[3rem] font-bold font-title mb-2">{heroData.name}</h1>
            <h3 className="text-[1.25rem] font-normal text-[#757575] mb-[1rem]">{heroData.position}</h3>
            <p className="max-w-[400px] mb-[3rem] text-[17px] text-[#757575]">
             {heroData.desc}
            </p>
            <button
  onClick={() => scrollToSection("contact")}
  className="bg-gray-800 text-white rounded-xl inline-flex
 font-medium px-10 py-4 cursor-pointer  items-center space-x-2 hover:bg-gray-700 transition-all duration-300"
>
  <span>Say Hello</span>
  <svg
    className="button__icon w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
      fill="currentColor"
    ></path>
    <path
      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
      fill="currentColor"
    ></path>
  </svg>
</button>







          </div>

          

         


          <div
  className="block lg:hidden w-72 h-72 bg-cover bg-center bg-no-repeat shadow-inset-custom grayscale-[40%] hover:grayscale-[0%] animate-profile__animate"
  style={{
    backgroundImage: `url(${heroData.images})`,
  }}
></div>





        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center">
        <div
  className="hidden lg:block w-72 h-72 bg-cover bg-center bg-no-repeat shadow-inset-custom grayscale-[40%] hover:grayscale-[0%] animate-profile__animate"
  style={{
    backgroundImage: `url(${heroData.images})`,
  }}
></div>



<div className="block lg:hidden mt-[30px]">
            <h1 className="text-[2rem] lg:text-[3rem]  font-bold font-title mb-2">{heroData.name}</h1>
            <h3 className="text-[1.25rem] font-normal text-[#757575] mb-[1rem]">{heroData.position}</h3>
            <p className="max-w-[400px] mb-[3rem] text-[17px] text-[#757575]">
            {heroData.desc}
            </p>
            <p
  onClick={() => scrollToSection("contact")}
  className="bg-gray-800 text-white rounded-xl inline-flex
 font-medium px-10 py-4 cursor-pointer  items-center space-x-2 hover:bg-gray-700 transition-all duration-300"
>
  <span>Say Hello</span>
  <svg
    className="button__icon w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
      fill="currentColor"
    ></path>
    <path
      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
      fill="currentColor"
    ></path>
  </svg>
</p>

          </div>

        </div>
      </div>



     
    </div>
  );
};

export default Hero;
