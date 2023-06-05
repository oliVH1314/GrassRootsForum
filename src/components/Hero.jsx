/* eslint-disable no-unused-vars */


import React from 'react'
import Typed from 'react-typed';
import {COLOURS} from '../colours.js'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[orange] md:text-5xl sm:text-4xl text:xl font-bold md:pl-4 pl-2'>Grass Roots Forum</p>
            <h1 className='md:text-7xl sm:text-6xl text:xl font-bold md:py-6'>Challenging <span className='text-[#10757f]'>Narratives,</span> Building <span className='text-[#10757f]'>Bridges.</span></h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text:xl font-bold py-4'>We challenge </p>
                <Typed className='md:text-5xl sm:text-4xl text:xl font-bold md:pl-4 pl-2 text-[orange]' strings={['Placeat', 'Pirepellendusngu', 'iure']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat iure culpa repellendus magni vel maiores.</p>
            <button className='bg-[orange] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Take Part</button>
        </div>
    </div>
  )
}

export default Hero