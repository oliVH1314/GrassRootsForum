import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiIconName } from "react-icons/ai";
import {COLOURS} from '../colours.js'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[orange]">Grass Roots Forum</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[orange] transition-colors cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-[orange]">Home</span>
        </li>
        <li className="p-4 hover:text-[orange] transition-colors cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-[orange]">About</span>
        </li>
        <li className="p-4 hover:text-[orange] transition-colors cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-[orange]">Events</span>
        </li>
        <li className="p-4 hover:text-[orange] transition-colors cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-[orange]">Contact</span>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-[#10757f] bg-[#124059] duration-500 ${
          nav ? "ease-in-out" : "ease-out"
        }`}
        style={{
          transform: `translateX(${nav ? "0%" : "-100%"})`,
        }}
      >
        <h1 className="w-full text-3xl font-bold text-[orange] m-4">Grass Roots Forum</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer">
            <span className="border-b-2 border-transparent hover:border-[orange]">Home</span>
          </li>
          <li className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer">
            <span className="border-b-2 border-transparent hover:border-[orange]">About</span>
          </li>
          <li className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer">
            <span className="border-b-2 border-transparent hover:border-[orange]">Events</span>
          </li>
          <li className="p-4 hover:text-[orange] transition-colors cursor-pointer">
            <span className="border-b-2 border-transparent hover:border-[orange]">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
