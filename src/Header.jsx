import React, { useState } from 'react';
import Login from './component/Login';
import MyCard from './component/MyCard';
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header() {
  
  const [search, setSearch] = useState("");
  const [show , setShow] = useState(false)
  // const[myshow, setMyshow] = useState(false)

  const handleShow = ()=>{
    setShow(!show)
  }
 
  return (
    <>
      
      <header className="w-full bg-white px-6 py-4 shadow-md hidden xl:flex justify-between items-center">
        
       
        <div className="flex items-center gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
             <span className="text-[#f8cb46]">blink</span>
            <span className="text-[#54b226]">it</span>
              </h1>
          {/* <img 
            src="/public/image copy 2.png" 
            alt="Logo" 
            className="w-40 h-20"
          /> */}
          <div>
            <div className='font-bold text-2xl'>Delivery in 9 Minutes</div> 
            <div className='font-semibold text-gray-700'>Unit-612B, Tower-A, Jaipur</div>
          </div>
        </div>

       
        <div className="flex-1 max-w-md mx-4 relative">
          <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-xl text-gray-500"></i>
          <input 
            type="search" 
            name="search"
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search..." 
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-10">
          <button className="px-4 py-3 text-white text-xl bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Login
          </button>
          <button className="flex text-center gap-1 px-4 py-3 text-gray-700 text-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors">
            <AiOutlineShoppingCart  className='pt-0.5 text-3xl'/>
            My Cart
          </button>
        </div>
      </header>


    
      {/* Mobile Header */}
      <header className="w-full bg-white p-4 shadow-md block xl:hidden">
        
        <div className='flex justify-between items-center mb-4 relative'>
          
          {/* Text Section (Added truncate to prevent layout break on small screens) */}
          <div className='flex-1 pr-4 min-w-0'>
            <div className='font-bold text-lg sm:text-xl truncate'>Delivery in 9 Minutes</div> 
            <div className='font-semibold text-xs sm:text-sm text-gray-700 truncate'>Unit-612B, Tower-A, Jaipur</div>
          </div>
          
          {/* User Icon & Dropdown Section */}
          <div className='relative text-4xl text-gray-700'>
            
            <i 
              className="fa-regular fa-circle-user cursor-pointer" 
              onClick={handleShow} 
            ></i>

            {/* Dropdown Menu */}
            {show && (
             <div className="absolute right-0 top-full mt-2 flex flex-col gap-3 bg-white p-4 shadow-2xl rounded-xl border border-gray-100 z-50 min-w-max items-center">
               <Login />
               <MyCard />
             </div>
            )}
          
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full relative">
          <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-xl text-gray-500"></i>
          <input 
            type="search" 
            name="search"
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search..." 
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </header>
    </>
  );
}
export default  Header;