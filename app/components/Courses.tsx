import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";



const Courses = () => {
  return (
  
    <section id="Courses">
    <div className="flex flex-col items-center top-[3326px] pt-[112px] pb-[112px] px-[64px] pl-[64px] gap-[60px] mobile:pt-[48px] mobile:px-[24px] mobile:pb-[48px] mobile:pl-[24px] bg-[#FFFFFF]">
      <div className="text-center  ">
        <h1 className="text-center font-[Roboto] text-[56px] text-[#000000] font-bold mobile:text-[32px]">Courses</h1>
        <p className="font-[Roboto] font-medium text-[18px] text-[#000000]">Your Ultimate Guide to learning</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-[64px]">
        <div className="flex  justify-center h-[40px]">
          <div className="w-[87px] h-[40px] border-b-[1px] pt-[8px] px-[16px] pb-[8px] pl-[16px] gap-[8px] border-b-[#676767]">Popular</div>
          <div className="w-[140px] h-[40px] pt-[8px] px-[16px] pb-[8px] pl-[16px] gap-[8px]">Recommended</div>
          <div className="w-[109px] h-[40px] pt-[8px] px-[16px] pb-[8px] pl-[16px] gap-[8px]">Best Price</div>
        </div>

        <div className="flex flex-col mobile:items-center gap-[64px]">
          <div className="grid grid-cols-3 gap-[32px] mobile:grid-cols-1">
            <div className="r-[5px] gap-[24px] bg-[#F7F7F7]">
              <Image
              src={"/images/blog1.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">design
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">UX/UI Design 201</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className=" flex h-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            </div>
            <div className="h-[534px] r-[5px] gap-[24px] bg-[#F7F7F7]">
            <Image
              src={"/images/blog2.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">Programming
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">Introduction to Python</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className="flex h-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            
            </div>
            <div className="h-[534px] r-[5px] gap-[24px] bg-[#F7F7F7]">
            <Image
              src={"/images/blog3.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">Business
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">Data Analysis for Beginners</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className=" flex h-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            </div>
            <div className="h-[534px] r-[5px] gap-[24px] bg-[#F7F7F7]">
            <Image
              src={"/images/blog4.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">Art
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">Art Specialization</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className=" flexh-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            </div>
            <div className="h-[534px] r-[5px] gap-[24px] bg-[#F7F7F7]">
            <Image
              src={"/images/blog5.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">Law
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">Rule of Law</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className=" flex h-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            </div>
            <div className="h-[534px] r-[5px] gap-[24px] bg-[#F7F7F7]">
            <Image
              src={"/images/blog6.svg"}
              alt="blog"
              width={416}
              height={300}/>
              <div className="h-[210px] px-[16px] pb-[24px] pl-[16px] gap-[24px] ">Tech
                <h1 className="h-[34px] font-[Roboto] font-bold text-[24px] mt-2">Introduction to webflow</h1>
                <p className="h-[48px] font-[Roboto] font-thin text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className=" flex h-[40px] gap-[16px] mt-6"><Button variant={'apnaStyle'} className="w-[117px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] rounded-lg"><h1 className="w-[77px] h-[24px] font-[Roboto] text-[16px]">Enroll Now</h1></Button>
                <h2 className="w-[77px] h-[40px] r-[5px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px]">$400</h2></div>
              </div>
            </div>
          </div>
        </div>
        <Button variant={'apnaStyle'} className=" w-[152px] h-[40px] r-[5px] border-[1px] pt-[8px] px-[16px] pb-[8px] pl-[16px] gap-[8px] border-[#000000] rounded-lg">
          <h1 className="w-[120px] h-[24px] font-[Roboto] text-[16px] text-[#000000]">View All Courses</h1></Button>
        
       
      </div>
     
</div>
</section>
        

      
  
  )
}

export default Courses
