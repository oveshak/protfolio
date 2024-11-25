import React, { useEffect, useState } from 'react';
import SectionBar from '../other/SectionBar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [heroData, setHeroData] = useState('');

    

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5050/contact/");
                setHeroData(response.data[0]);
                
            } catch (error) {
                console.error("Error fetching hero data:", error);
                alert("Failed to fetch hero data.");
            }
        };
  
        fetchHeroData();
    }, []);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate required fields
      if (!name.trim() || !email.trim() || !message.trim()) {
        toast.error('Message can not sent successfully!', { position: 'top-right', autoClose: 3000 });
        return;
      }
  
      // Construct data object
      const contactData = {
        name,
        email,
        message,
      };
  
      try {
        const response = await axios.post(
          "http://127.0.0.1:5050/contact/add/contact-message",
          contactData
        );
        
        toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000 });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error("Error submitting the form:", error.response?.data?.message || error.message);
        alert(error.response?.data?.message || "Failed to send the message.");
      }
    };

    return (
        <section className='pt-16 pb-8'>
            <SectionBar title={"Get in touch"} desc={"Contact Me"}/>



<div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-0 mb-10 lg:mb-7 '>
    <div className='w-full lg:w-1/2'>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='mb-3 text-center font-medium font-title text-[1.25rem] text-[#333333]'>Talk to me</h1>
        
            <div className='grid grid-cols-[350px] lg:grid-cols-[300px] gap-y-4'>
                

                {/* email */}
                <div className='bg-[#fff] border border-black/10 rounded-lg p-4 text-center'>
            <div className='text-[#757575]  text-2xl mb-[.25rem] flex justify-center
            '>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#757575" d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1 1 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-7 6.75L6.666 6h12.668z"></path><path fill="#757575" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>

            </div>
            <h3 className='font-medium '>Email</h3>
            <span className='text-[#757575] block mb-[.5rem]'>{heroData.email_value}</span>
            <a href={heroData.email_link} class="flex justify-center items-center group ">
  <div className='text-[#757575]'>Write Me</div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        fill="#757575"
        d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
      ></path>
    </svg>
  </div>
</a>

        </div>




                {/* whatapp */}

                <div className='bg-[#fff] border border-black/10 rounded-lg p-4 text-center'>
            <div className='text-[#757575]  text-2xl mb-[.25rem] flex justify-center
            '>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#757575" fillRule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977c0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162l-2.824.741l.753-2.753l-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.4 7.4 0 0 1 5.275 2.188a7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112s-.58.729-.711.879s-.262.168-.486.056s-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666c-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008a.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321s1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473c.537.171 1.026.146 1.413.089c.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067s-.207-.151-.43-.263" clipRule="evenodd"></path></svg>

            </div>
            <h3 className='font-medium '>Whatapp</h3>
            <span className='text-[#757575] block mb-[.5rem]'>{heroData.whatapp_value
            }</span>
            <a href={heroData.whatapp_link
} class="flex justify-center items-center group ">
  <div className='text-[#757575]'>Write Me</div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        fill="#757575"
        d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
      ></path>
    </svg>
  </div>
</a>

        </div>

                {/* messenger */}
                
                
                <div className='bg-[#fff] border border-black/10 rounded-lg p-4 text-center'>
            <div className='text-[#757575]  text-2xl mb-[.25rem] flex justify-center
            '>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#757575" d="M12 3c-4.92 0-8.91 3.729-8.91 8.332c0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35c4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3m.938 11.172l-2.305-2.394l-4.438 2.454l4.865-5.163l2.305 2.395l4.439-2.455z"></path></svg>


            </div>
            <h3 className='font-medium '>Messenger</h3>
            <span className='text-[#757575] block mb-[.5rem]'>{heroData.message_value}</span>
            <a href={heroData.message_link} class="flex justify-center items-center group ">
  <div className='text-[#757575]'>Write Me</div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        fill="#757575"
        d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
      ></path>
    </svg>
  </div>
</a>

        </div>



            </div>
        </div>
    </div>
    <div className='w-full lg:w-1/2'>
    
   <div className='flex flex-col gap-5 justify-center items-center'>

   <h1 className='mb-3 text-center font-medium font-title text-[1.25rem] text-[#333333]'>Write me your project</h1>



   
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center mt-[30px]">
        {/* Name Field */}
        <div className="relative w-full lg:max-w-96 mb-8">
          <input
            type="text"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer input input-bordered w-full py-2 rounded-lg border-2 border-gray-300 focus:outline-none"
          />
          <label
            className="absolute text-gray-500 transition-all duration-200 
            peer-placeholder-shown:left-3 top-[-0.7rem] left-3 text-[18px] bg-white px-1"
          >
            Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative w-full lg:max-w-96 mb-8">
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer input input-bordered py-2 w-full rounded-lg border-2 border-gray-300 focus:outline-none"
          />
          <label
            className="absolute text-gray-500 transition-all duration-200 
            peer-placeholder-shown:left-3 top-[-0.7rem] left-3 text-[18px] bg-white px-1"
          >
            Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative w-full lg:max-w-96 mb-8">
          <textarea
            rows="10"
            cols="50"
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer input input-bordered w-full rounded-lg border-2 border-gray-300 focus:outline-none resize-none h-[200px] py-4"
          ></textarea>
          <label
            className="absolute text-gray-500 transition-all duration-200 
            peer-placeholder-shown:left-3 top-[-0.7rem] left-3 text-[18px] bg-white px-1"
          >
            Project Details
          </label>
        </div>
      </div>

      <div className="flex justify-around">
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-xl inline-flex
          font-medium px-10 py-4 items-center space-x-2 hover:bg-gray-700 transition-all duration-300"
        >
          <span>Send Message</span>
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
    </form>



   </div>




    </div>
</div>

{/* Toast Container */}
<ToastContainer />
        </section>
    );
}

export default Contact;

