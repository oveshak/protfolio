import React from 'react';

const Box = ({data}) => {
    const {icon, title,subtitle}=data;
    return (
        <div className='bg-[#fff] border border-[#0000001a] rounded-[0.75rem]  p-[1rem_1.25rem] text-center'>
            <div className='text-[1.5rem] mb-3 flex justify-center text-[#000]'>
                {icon}
            </div>
            <h6 className='text-[1rem] font-medium '>{title}</h6>
            <p className='text-[0.625rem]'>{subtitle}</p>
        </div>
    );
}

export default Box;
