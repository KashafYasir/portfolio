"use client"
import React from 'react'
import { SiVisualstudiocode } from "react-icons/si"
import { FaGithub } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { SiTypescript } from "react-icons/si";
import { DiJavascript } from 'react-icons/di'
import { BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs'


const Skills = () => {
  return (
    <div id="skills" > 
         <section className="text-gray-600 body-font bg-[url('https://th.bing.com/th/id/OIP.z7GSTlAn2gm6ND89HC136QHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center bg-no-repeat">
    <div className="container px-5 py-24 mx-auto" data-aos="fade-down">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white" data-aos="fade-down">Unlocking My Skills Set's the Hidden Talent </h1>
          <div className="h-1 w-20 bg-pink-500 rounded"></div>
     </div>
    
        <p className="lg:w-8/12  w-full leading-relaxed text-white font-bold text-2xl" data-aos="fade-down">With the strong foundation in IT , I have honed a diverse set of skills that enable me to feliver impactful and innovative solution . My technical skills programming language, tools or framwork  complemented by expertise, I excel in communication abilities , ensuring seamless teamwork and efficient project excecution , I am commtted to continous learning and leveraging my skills drive success in every project i undertake</p>
      </div>
  
     </div>  
  {/* icon development */}
    <div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl' data-aos="fade-down">
      {/* icons */}
      <div className ="flex flex-col items-center bg-white border-2  border-yellow-700 p-4  transition-transform duration-300 ease-in-out transform group-hover:scale-110 ">
      <SiVisualstudiocode className='text-orange-500 text-6xl' />
      <span className='mt-2 text-lg text-black' data-aos="fade-down">Visual Studio code</span>
      </div>
  
  
    {/* <div className='group px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'> */}
      {/* icons */}
      <div className ="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110 " data-aos="fade-down">
      <FaGithub className='text-gray-800 text-6xl' />
      <span className='mt-2 text-lg text-black'>Github</span>
      </div>
      <h1 className='title-font sm:text-4xl text-3xl sb:4 font-medium text-white'>
        <Typewriter 
        options={{
          strings:["Development Tools And Frame Works"],
          autoStart:true,
          loop:true
        }}
        />
      </h1>
      
    </div>
  
  
  
  
  
  
    <div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'>
     
    <h1 className='title-font sm:text-4xl text-3xl sb:4 font-medium text-white'>
        <Typewriter 
        options={{
          strings:["Programming Languages"],
          autoStart:true,
          loop:true
        }}
        />
      </h1>
      {/* icons */}
      <div className ="flex flex-col items-center bg-white border-2  border-yellow-700 p-4  transition-transform duration-300 ease-in-out transform group-hover:scale-110 ">
      <SiTypescript className='text-blue-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>Typescript</span>
      </div>
  
  
    {/* <div className='group px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'> */}
      {/* icons */}
      <div className ="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110 ">
      <DiJavascript  className='text-yellow-800 text-6xl' />
      <span className='mt-2 text-lg text-black'>Javascript</span>
      </div>
      <div className ="flex flex-col items-center bg-white border-2  border-yellow-700 p-4  transition-transform duration-300 ease-in-out transform group-hover:scale-110 ">
      <BsFiletypeHtml className='text-blue-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>HTML</span>
      </div>
  
      <div className ="flex flex-col items-center bg-white border-2  border-yellow-700 p-4  transition-transform duration-300 ease-in-out transform group-hover:scale-110 ">
      <BsFiletypeCss className='text-blue-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>CSS</span>
      </div>
    </div>
    </section>
  
      
      </div>
  )
}

export default Skills