import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const About  = () => {
  return (
    <section id="AboutUs">
    <div className="flex flex-col w-[1280px] h-auto top-[682px] p-[80px] gap-[80px] mobile:gap-48 bg-[#FFFFFF] ">
      <div className="flex flex-col gap-[80px]">
        <div className=" flex justify-between mobile:flex-col">
          <div className="w-[500px] h-[51px]">
            <h1 className="font-[Roboto] font-semibold text-[18px] text-[#000000]">Subscribe to our newsletter</h1>
            <p className="font-[Roboto] font-medium text-[16px] text-[#000000] mobile:w-[287px] mobile:h-[47px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="gap-[16px] mobile:flex flex-col mobile:pt-11">
            <div className="flex gap-[16px] mobile:flex-col">
            <Button variant={'apnaStyle'} className="w-[265px] h-[48px] r-[5px] border-[1px] p-[12px] gap-[8px] bg-[#FFFFFF] border-[#000000] rounded-lg "><text className="w-[41px] h-[24px] font-[Roboto] text-[16px] mobile:mr-44">Enter Your Email</text></Button>
            <Button variant={'apnaStyle'} className="w-[119px] h-[48px] r-[5px] border-[1px] pt-[12px] px-[24px] pb-[12px] pl-[24px] gap-[8px] border-[#000000] rounded-lg"><text className="w-[71px] h-[24px] font-[Roboto] text-[16px] text-[#000000]">Subscribe</text></Button></div>

            <div className="w-[400px] h-[18px] font-[Roboto] font-normal text-[16px] text-[#000000] mobile:text-[12px] mobile:w-300">By subscribing you agree to with our Privacy Policy</div>
            </div>
            </div>
            


<div className="flex w-[1120px] h-auto gap-[40px] mobile:flex-col">
  <div className="flex w-[250px] h-[40px] mobile:justify-center items-center">
    <Image
    src={"/images/Frame 1.svg"}
    alt="frame"
    width={32.58}
    height={30.38}/>
    <h1 className="w-[90px] h-[30px] font-[inter] font-bold text-[25.07px]">Ddsgnr</h1>
</div>

<div className="flex flex-col w-[250px] h-[225px] gap-[16px] mobile:justify-center items-center"><h1 className="font-bold">Courses</h1><h2>Business</h2><h3>Development</h3><h4>Technology</h4><h5>Design</h5><h6>Programming</h6>
</div>


<div className="flex flex-col w-[250px] h-[225px] gap-[16px]  mobile:justify-center items-center"><h1 className="font-bold">Ressources</h1><h2>Career</h2><h3>Resume</h3><h4>Learning</h4><h5>Interview Preparations</h5><h6>Jobs</h6>
</div>


<div className="flex flex-col w-[250px] h-[225px] gap-[16px]  mobile:justify-center items-center"><h1 className="font-bold">About Us</h1><h2>Contact</h2><h3>Help/Support</h3><h4>FAQ</h4><h5>Terms and Conditions</h5><h6>Partners</h6>
</div>
</div>








      </div>

      
    </div> 
    </section>
  )
}

export default About
