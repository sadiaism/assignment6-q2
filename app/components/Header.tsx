import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

const Header = () => {
    const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
  <div>
    <div className="top-[100px] w-[1280px] h-[54px] bg-[#F7F7F7] border-b-[1px] border-b-[#000000] pl-[62px] px-[64px] left-[100px] mobile:hidden">
        <div className="flex w-[1154px] h-[54px] pb-[12px] pt-[12px] gap-[32px]">
            <div className=" w-[386px] h-[30px] gap-[16px] font-[Robotto] text-[#000000] text-[14px]">Phone Number:956 742 455 678 | Email:info@ddsgnr.com
         </div>
            <div className="w-[736px] h-[24px] gap-[16px] flex justify-end">
                <Image
                src={"/images/icon1.svg"}
                alt="icon"
                width={24}
                height={24}
                />
                <Image
                src={"/images/icon2.svg"}
                alt="icon"
                width={24}
                height={24}
                /><Image
                src={"/images/icon3.svg"}
                alt="icon"
                width={24}
                height={24}
                />
                <Image
                src={"/images/icon4.svg"}
                alt="icon"
                width={24}
                height={24}
                />
            

            </div>
        </div>
      
    </div>
    {/* Ddsgnr strt */}
    <div className="w-[1280px] top-[170px] left-[100px] border-b-[1px] px-[64px] pl-[64px] bg-[#F7F7F7] border-b-[#676767] pb-8">
        <div className="flex justify-between w-[1152px] h-[44px] pt-[9px]">
            <div className="flex w-[130.6px] h-[41px]  pt-[9px] gap-[10px]">
                <Image
                src={"/images/Frame 1.svg"}
                alt="frame"
                width={32.58}
                height={30.38}
                />
                <h1 className=" w-[90px] h-[30px] font-[inter] text-[25.07px]">Ddsgnr</h1>
            
            <div className='lg:hidden mobile:ml-32' onClick={toggleMenu}>
                  {isMenuOpen ?<AiOutlineClose size={30}/>:
                  <AiOutlineMenu size={30}/>}
                  </div></div>

           
            



{/* navbar */}
            <nav className="w-[910px] h-[44px] gap-[32px] bg-[#FFFFFF] mobile:hidden">
                <ul className="flex items-center w-[48px] h-[48px] p-[12px] pt-6 pb-11">
    

                    <li className="w-[64px] h-[44px] p-[10px] gap-[10px] border-b-[1px] border-b-[#000000]">
                        <Link href="#Home" className="hover:text-blue-800">Home</Link></li>

                    <li className="w-[79px] h-[44px] p-[10px] gap-[10px]">
                    <Link href="#Courses" className="hover:text-blue-800">Courses</Link></li>

                    <li className="w-[81px] h-[44px] p-[10px] gap-[10px]">
                    <Link href="#Services" className="hover:text-blue-800">Services</Link></li>

                    <li className="w-[113px] h-[44px] p-[10px] gap-[10px]">
                    <Link href="#Achievements" className="hover:text-blue-800">Achievements</Link></li>

                    <li className="w-[86px] h-[44px] p-[10px] gap-[10px]">
                    <Link href="#AboutUs" className="hover:text-blue-800">AboutUs</Link></li>

                    <li className="w-[104px] h-[44px] p-[10px] gap-[10px]">
                    <Link href="#Testimonial" className="hover:text-blue-800">Testimonial</Link></li>
                    
<div className=" flex w-[191px] gap-[16px]">
    <Button variant={'apnaStyle'} className=" w-[80px] h-[40px] r-[5px] border-[1px] border-[#000000] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] font-[Roboto] rounded-lg">Login</Button>
<Button variant={'apnaStyle'} className="w-[95px] h-[40px] r-[5px] border-b-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] bg-[#000000] font-[Roboto] text-w-[55px] text-h-[24px] text-[16px] rounded-lg"><h1 className="text-white">Sign Up</h1></Button>
</div>

              
                




                </ul>
               </nav> 
               </div>
                
                

                
                
                    
                
            
        



        {
          isMenuOpen && (
            <ul className='flex flex-col gap-4 lg:hidden'>
              <li>
                <Link href="#Home" onClick={toggleMenu} className="hover:to-blue-900">Home</Link>
              </li>
              <li>
                <Link href="#Courses" onClick={toggleMenu}>Courses</Link>
              </li>
              <li>
                <Link href="#Services" onClick={toggleMenu}>Services</Link>
              </li>
              <li>
                <Link href="#Achievements" onClick={toggleMenu}>Achievements</Link>
              </li>
              <li>
                <Link href="#AboutUs" onClick={toggleMenu}>AboutUs</Link>
              </li>
              <li>
                <Link href="#Testimonial" onClick={toggleMenu}>Testimonials</Link>
              </li>



              <div className=" flex w-[191px] h-[40px] gap-[16px]">
    <Button variant={'apnaStyle'} className=" w-[80px] h-[40px] r-[5px] border-[1px] border-[#000000] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] font-[Roboto] rounded-lg">Login</Button>
<Button variant={'apnaStyle'} className="w-[95px] h-[40px] r-[5px] border-b-[1px] pt-[8px] px-[20px] pb-[8px] pl-[20px] gap-[8px] border-[#000000] bg-[#000000] font-[Roboto] text-w-[55px] text-h-[24px] text-[16px] rounded-lg"><h1 className="text-white">Sign Up</h1></Button>
</div>




            </ul>
          )
        }
        
        









    </div>
    
    



</div>
  )
}

export default Header
