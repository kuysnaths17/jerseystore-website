import React from 'react'
import Image from 'next/image'
import aImage from './about-us-page.png'
import { FaQuoteLeft } from 'react-icons/fa'

function About() {
  return (
    <>
      <div className="w-full md:h-[22rem] h-[10rem] bg-slate-700">
        <div className="flex flex-col items-center justify-center h-full">
          <p className='text-center md:text-6xl text-4xl font-extrabold text-white'>About Primo's Sportswear</p>
        </div>
      </div>
      <div className="bg-[#dbdbdb] md:flex justify-center p-16">
        <div>
          <Image src={aImage} alt='jersey' width={500} height={500} />
        </div>
        <div className="md:w-[30%] w-[100%] flex flex-col gap-6">
          <div>
            <p className='md:text-4xl text-2xl font-bold'>About Us & Our Skills</p>
          </div>
          <div className=''>
            <p>
              Welcome to Primo Sportswear, where passion meets creativity on the sports field! We are a passionate group of designers, athletes, and sports fans who believe that each jersey tells a story.
            </p>
          </div>
          <div className='flex flex-wrap items-start gap-2'>
            <FaQuoteLeft className='text-5xl flex-shrink-0'/>
            <p className='flex-1'>Welcome to Primo Sportswear, where passion meets creativity on the sports field! We are a passionate group of designers, athletes, and sports fans who believe that each jersey tells a story.</p>
          </div>
          <div>
            <p>Primo Sportswearspecializes in designing custom jerseys that combine performance, style, and individuality. With cutting-edge designs, high-quality materials, and a dedication to excellence, we ensure that each jersey not only looks great but also feels comfortable and long-lasting. From concept to creation, we collaborate with you to bring your vision to life.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About