"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Project from './components/Project'
import Contactus from './components/Contactus'
import Skills from './components/Skills'
import About from './components/About'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Home () {
  useEffect (()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,

    });
    AOS.refresh();
    
  },[]);
  return (
    <main>
   
      <Hero />
      <Project/>
      <Contactus/>
     <Skills/>
      <About/>
      <FeatureSection/>
    

        </main>
  )
}

export default Home