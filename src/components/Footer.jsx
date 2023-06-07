/* eslint-disable no-unused-vars */

import React from "react";
import { COLOURS } from "../colours.js";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto py-16 lg:px-[100px] px-4 grid lg:grid-cols-2 lg:gap-8 text-gray-300 text-center" id="About" >
      <div className="flex flex-col justify-center lg:mr-[150px] lg:py-0 py-[50px]">
        <h1 className="w-full text-3xl font-bold text-[orange]">
          Grass Roots Forum
        </h1>
        <p className="py-4">
          In an increasingly fragmented world our Grassroots Forum provides a space where ideas on important and sometimes controversial issues can be shared. Our priority is to share ideas free from top-down political agendas.
        </p>
        <div className="flex justify-evenly md:w-full my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaYoutubeSquare size={30} />
        </div>
      </div>

      <div className="flex flex-col justify-center lg:mr-[150px] lg:py-0">
        <h1 className="w-full text-3xl font-bold text-[orange]">
          What we do
        </h1>
        <p className="py-4">
          Grassroots Forum hosts engaging events featuring diverse speakers who encourage open discussions. Our aim is to foster a vibrant dialogue that challenges prevailing narratives and explores alternative viewpoints rooted in factual evidence.
        </p>
      </div>
    </div>
  );
};

export default Footer;
