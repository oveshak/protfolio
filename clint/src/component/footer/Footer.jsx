import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Footers = ({scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      path: 'home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8m-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"></path></svg>
      ),
    },
    {
      name: 'About',
      path: 'about',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></path></svg>
      ),
    },
    {
      name: 'Skills',
      path: 'skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 10h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.09 0a.9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></path></svg>
      ),
    },

    {
        name: 'Protfolio',
        path: 'projects',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 .49-.05l.3-.07h.12l.37-.14l.13-.07c.1-.06.21-.11.31-.18a4 4 0 0 0 .38-.32l.07-.09a3 3 0 0 0 .27-.32l.09-.13a2.3 2.3 0 0 0 .18-.35a1 1 0 0 0 .07-.15c.05-.12.08-.25.12-.38v-.15a2.6 2.6 0 0 0 .1-.6V5a3 3 0 0 0-3-3M5 20a1 1 0 0 1-1-1v-4.31l3.29-3.3a1 1 0 0 1 1.42 0l8.6 8.61Zm15-1a1 1 0 0 1-.07.36a1 1 0 0 1-.08.14a1 1 0 0 1-.09.12l-5.35-5.35l.88-.88a1 1 0 0 1 1.42 0l3.29 3.3Zm0-5.14L18.12 12a3.08 3.08 0 0 0-4.24 0l-.88.88L10.12 10a3.08 3.08 0 0 0-4.24 0L4 11.86V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM13.5 6A1.5 1.5 0 1 0 15 7.5A1.5 1.5 0 0 0 13.5 6"></path></svg>
        ),
      },
      {
        name: 'Contact',
        path: 'contact',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78"></path></svg>
        ),
      },
  ];

  return (
    <>
      <footer className='fixed lg:hidden bottom-0  left-0 right-0 z-50 h-[60px] bg-[white]'>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-title text-black font-medium"
            >
              #Oveshek
            </a>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <TiThMenu className='text-black text-[20px]'/>
          </button>
        </div>
      </footer>

      {/* Bottom Sheet Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100]  ">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl"
            style={{ 
              maxHeight: 'calc(100vh - 100px)', 
              height: 'auto' 
            }}
          >
            <div className="px-4 pb-6 pt-10">
            

              <nav>
                <ul className="grid grid-cols-3	 gap-11">
                  {menuItems.map((item) => (
                   <li key={item.path}>
                   <p
                        onClick={() => scrollToSection(`${item.path}`)}
                       className="flex flex-col gap-1 text-[#757575 ] items-center justify-center group"
                   >
                       <div className="w-[20px] font-semibold text-slate-600 transition duration-150 group-hover:text-[#000]">
                           {item.icon}
                       </div>
                       <span className="text-[0.875rem] font-semibold transition duration-150 text-slate-600 font-title group-hover:text-[#000]">
                           {item.name}
                       </span>
                   </p>
               </li>
                  ))}
                </ul>
              </nav>



            </div>
           <div className='flex justify-end r-[10px]'>
           <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 p-4 text-right"
                >
                  <IoMdClose className='text-[30px]'/>
                </button>
           </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footers;