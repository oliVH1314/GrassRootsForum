/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { COLOURS } from "../colours.js";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[orange]">Grass Roots Forum</h1>
      <ul className="hidden md:flex">
        <button className="p-4 hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Home")}>
          <span className="border-b-2 border-transparent hover:border-[orange]">Home</span>
        </button>
        <button className="p-4 hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("About")}>
          <span className="border-b-2 border-transparent hover:border-[orange]">About</span>
        </button>
        <button className="p-4 hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Events")}>
          <span className="border-b-2 border-transparent hover:border-[orange]">Events</span>
        </button>
        <button className="p-4 hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Contact")}>
          <span className="border-b-2 border-transparent hover:border-[orange]">Contact</span>
        </button>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={20} className="hamburger-icon" />
        ) : (
          <AiOutlineMenu size={20} className="hamburger-icon" />
        )}
      </div>
      <ul className={nav ? 'uppercase p-4 fixed left-0 top-0 w-[60%] h-full border-r border-r-[#10757f] bg-[#124059] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold text-[orange] m-4">Grass Roots Forum</h1>
          <li className='p-4 border-b border-[#10757f]'>
          <button className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Home")}>
            <span className="border-b-2 border-transparent hover:border-[orange]">Home</span>
          </button>
          </li>
          <li className='p-4 border-b border-[#10757f]'>
          <button className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("About")}>
            <span className="border-b-2 border-transparent hover:border-[orange]">About</span>
          </button>
          </li>
          <li className='p-4 border-b border-[#10757f]'>
          <button className="p-4 border-b border-[#10757f] hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Events")}>
            <span className="border-b-2 border-transparent hover:border-[orange]">Events</span>
          </button>
          </li>
          <li className='p-4'>
          <button className="p-4 hover:text-[orange] transition-colors cursor-pointer border-none" onClick={() => scrollToSection("Contact")}>
            <span className="border-b-2 border-transparent hover:border-[orange]">Contact</span>
          </button>
          </li  >
      </ul>
    </div>
  );
};

export default Navbar;