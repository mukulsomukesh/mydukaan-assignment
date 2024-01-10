import React from 'react';
import menu from "../assets/Menu.svg";
import chatIcon from "../assets/chat icon.svg";
import help from "../assets/Help.svg";
import search from "../assets/search.svg"

export default function Navbar() {
  return (
    <div className="flex w-[100%] h-[64px] items-center bg-primary-50  min-h-content flex-wrap justify-between px-4 py-2">

      {/* Left section with title and help icon */}
      <div className='flex gap-[16px] items-center ' >

        {/* Title */}
        <p className="text-[15px] leading-[22px] font-medium ">Payments</p>

        {/* Help icon and text */}
        <div className="flex items-center h-[22px] gap-[6px]">
          <img src={help} alt="Icon 3" className="h-[14px] w-[14px]" />
          <p className="text-[12px] leading-4">How it works</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="w-[400px] h-[40px] rounded-md bg-primary-200 flex px-[9px] py-[16px] items-center gap-8 ">
        <div className="flex ml-[10px] w-[400px] gap-[8px] items-center ">

          <img src={search} />
          <input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent outline-none text-sm font-normal text-gray-500 w-full" />
        </div>
      </div>


      {/* Right section with chat icon and menu icon */}
      <div className="  flex gap-[12px] ">
        <img src={chatIcon} alt="Icon 3" className="h-10 w-10" />
        <img src={menu} alt="Icon 2" className="h-10 w-10" />
      </div>
    </div>
  );
}
