import React from 'react'

const FeatureSection = () => {
  return (
    <div><section className="text-white body-font bg-black" data-aos="flip-right">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-white mb-4">Project Feature & Commands</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential features of each Typescript project and easily run them using the npx commands provided below:  </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"data-aos="flip-right">
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">npx run start: atm</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center" data-aos="flip-right">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium" data-aos="flip-right">npx run start: todo list</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium" data-aos="flip-right">npx run start: currency converter</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium" data-aos="flip-right">npx run start:number guessing game</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium" data-aos="flip-right">npx run start : calculator</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium" data-aos="flip-right">npx run start: Static resume builder</span>
          </div>
        </div>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Visit my Github</button>
    </div>
  </section>
  </div>
  )
}

export default FeatureSection