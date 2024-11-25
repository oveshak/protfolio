import React from 'react';

const SectionBar = ({title,desc}) => {
    return (
        <div>
            <h1 className='text-[1.5rem] lg:text-[2.25rem] text-center font-title font-semibold text-[#333333]'>{title}</h1>
            <p className='text-[.813rem] lg:text-[1rem] text-center mb-[3rem] lg:mb-[4rem] font-title  text-[#757575] '>{desc}</p>
        </div>
    );
}

export default SectionBar;
