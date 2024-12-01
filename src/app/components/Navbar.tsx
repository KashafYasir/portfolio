import Link from "next/link"
import React from "react"
import { MdCloudDownload } from "react-icons/md";

 const Navbar =() =>{
return(
<div className="bg-white z-50 sticky top-0">
<header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black-600 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Kashaf ALi</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      
    <Link href={"/"} className="mr-5 hover:text-gray-300"> Home </Link>
    <Link href={"#about"} className="mr-5 hover:text-gray-300 ">About Us</Link>
    <Link href={"#Contact"} className="mr-5 hover:text-gray-300 " >Contact Us</Link>
    <Link  href={"#projects"} className="mr-5 hover:text-gray-300"  >Projects</Link>
    <Link  href={"#skills"}className="mr-5 hover:text-gray-300 ">Skills</Link>
    
    </nav> 
    <button className="flex flex-wrap align-items-center items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
      <a href="/">Download CV <MdCloudDownload className=" display-flex align-items-center text-lg ml-4"/>

    
      </a>
    </button>

  </div>
</header>
</div>
)}
export default Navbar