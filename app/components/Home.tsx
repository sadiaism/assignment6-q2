import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Home = () => {
  return  (
    
        <section id="Home" className='w-full h-auto top-[141px] bg-[#FFFFFF]'>
        {/*1st */}
<div className="grid grid-cols-2 mobile:grid-cols-1 gap-6">

    <div className="flex flex-col justify-center items-center pt-16 pb-16 px-6 pl-6">
      <div className='flex flex-col w-full max-w-lg mobile:max-w-md gap-[24px]'>
        <h1 className="font-[Roboto] font-bold text-[56px] text-[#000000] mobile:text-[40px] mobile:leading-tight">Learn new skills <br/> online with ease</h1>
        <p className='w-[500px] h-[54px] font-[Roboto] text-[18px] text-[#000000] mt-5 mobile:w-[380px] h-54  mobile:text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p></div> 
          <div className='flex pt-16 gap-[16px] pr-44 mobile:pl-32 '>
            <Button variant={'apnaStyle'} className='w-[164px] h-[48px] gap-[8px] bg-black rounded-lg text-[#FFFFFF] font-[Roboto] text-[16px]'>Start learning now</Button>
          <Button variant={'apnaStyle'} className="w-[164px] h-[48px] r-[5px] border-[1px] pt-[12px] pb-[12px] gap-8px] border-[#000000] rounded-lg font-[Roboto] text-[16px]">Explore Courses</Button>
        </div>
        </div>   

<div className=''>
        <Image
        src={"/images/girl.svg"}
        alt="image"
        width={640}
        height={900}/>
       </div>
    </div>


   {/* 2nd   */}
<div className="flex pt-[80px] px-[64px] pb-[80px]  bg-[#F7F7F7] mobile:px-24 mobile:pb-48 mobile:pl-24 mobile:gap-24 mobile:flex-col">
      <h1 className="font-[Roboto] text-[24px] text-[#000000]">Trusted by 2000+companies worldwide.</h1>
      <div className="flex pt-[8.74px] pb-[8.74px] gap-[19px] mobile:flex-col">
        <Image 
        src={"/images/Airbnb Logo.svg"}
        alt="image"
        width={123.8}
        height={38.52}/>
        <Image
        src={"/images/Airbnb Logo2.svg"}
        alt="logo"
        width={123.0}
        height={38.52}
        />
        <Image
        src={"/images/Airbnb Logo3.svg"}
        alt="logo"
        width={123.0}
        height={38.52}
        />
        <Image 
        src={"/images/Airbnb Logo4.svg"}
        alt="logo"
        width={123.0}
        height={38.52}
        />
        <Image
        src={"/images/Airbnb Logo5.svg"}
        alt="logo"
        width={123.0}
        height={38.52}
        />
        <Image
        src={"/images/Airbnb Logo6.svg"}
        alt="logo"
        width={123.0}
        height={38.52}
        />

      </div>
    </div>

   {/* 3rd   */}
    <div className=" flex flex-col items-center justify-center top-[1266px] pt-[112px] px-[64px] pb-[112px]  gap-[80px] bg-[#FFFFFF]">
      <div className="gap-[357px]">
        <h2 className="font-[Roboto] font-bold text-[48px] text-[#000000] mobile:text-[32px]">Explore Courses By Category</h2>
        <p className="font-[Roboto] text-[18px] text-[#000000]">Discover a wide range of courses covering a variety of subjects,taught by expert instructors.</p>
      </div>

      <div className="grid grid-cols-3 mobile:grid-cols-1 bg-[#FFFFFF] gap-[24px]">
        
        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">

          <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
            src={"/images/tool1.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
          </div>
          <div className=" gap-[16px] mt-[12px] mobile:gap-[24px] ">
            <h1 className=" font-[Roboto] text-[20px] text-[#000000]">Design & Development</h1>
            <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
          </div></div>
        

          <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool2.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />  
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Marketing</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div></div>
        

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool3.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Development</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        
        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool4.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Communication</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool5.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Digital Marketing</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool6.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Self Development</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool7.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px]">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Business</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool8.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px] ">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Finance</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div>

        <div className="flex r-[5px] p-[16px] gap-[32px] bg-[#F7F7F7]">
        <div className="r-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
        <Image
            src={"/images/tool9.svg"}
            alt="pen-tool"
            width={32}
            height={32}
            />
        </div>
        <div className="gap-[16px] mt-[12px]">
        <h1 className="font-[Roboto] text-[20px] text-[#000000]">Consulting</h1>
        <p className="font-[Roboto] text-[18px] text-[#000000]">50+Courses Available</p>
        </div>
        </div></div>

        <Button variant={'apnaStyle'} className="w-[155px] h-[48px] r-[5px] border-[1px] pt-[12px] pb-[12px] px[24px] pl-[24px] gap-[8px] border-[#000000] rounded-lg ">View All Courses
    </Button>
</div>
      
</section>

      
    
  )
}

export default Home
