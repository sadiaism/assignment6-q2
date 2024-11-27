

'use client'

import React from "react";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/About";
import Achievements from "./components/Achievements"
import Footer from "./components/Footer";
import Home from "./components/Home";




const Page=()=>{
    
      
return(



<div className="bg-[#FFFFFF]">

      <Header/>
      <Home/>
      <Achievements/>
      <Courses/> 
      <Services/>
      <Testimonial/>
      <AboutUs/>
      <Footer/> 
      

   </div>     
    
  )

}
export default Page;

 
