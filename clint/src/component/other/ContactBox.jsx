import React from 'react';

const ContactBox = ({data}) => {
    const {icon, title, value}=data;
    return (
        <div className='bg-[#fff] border border-black/10 rounded-lg p-4 text-center'>
            <div className='text-[#757575]  text-2xl mb-[.25rem] flex justify-center
            '>
                {icon}
            </div>
            <h3 className='font-medium '>{title}</h3>
            <span className='text-[#757575] block mb-[.5rem]'>{value}</span>
            <a href={`${value}`} class="flex justify-center items-center group ">
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
    );
}

export default ContactBox;
