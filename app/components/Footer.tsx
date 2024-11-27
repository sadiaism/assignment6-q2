import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

        <div className="flex flex-col justify-center items-center  gap-[32px] border-t-[1px] border-[#000000]">
  <div className="flex justify-between items-center w-[1120px] h-[24px] mobile:flex-col mobile:items-center mobile:w-[380px] gap-[24px] mt-12 mb-12">
    <div className="flex gap-[24px] mobile:flex-col items-center">
     <h1 className="w-[195px] h-[21px] font-[Roboto] font-bold text-[14px] text-[#000000]">2023 Ddsgnr.All right reserved.</h1>
     <h1 className="w-[87px] h-[21px] border-b-[1px] border-b-[#000000] font-[Roboto] text-[14px]">Privacy Policy</h1>
     <h2 className="w-[105px] h-[21px] font-[Roboto] border-b-[1px] border-b-[#000000] text-[14px]">Terms of Service</h2>
     <h3 className="w-[105px] h-[21px] font-[Roboto] border-b-[1px] border-b-[#000000] text-[14px]">Cookies settings</h3>
</div>

<div className="flex gap-[12px]">
  <Image
  src={"/images/icon1.svg"}
  alt="icon"
  width={24}
  height={24}/>
  <Image
  src={"/images/icon2.svg"}
  alt="icon"
  width={24}
  height={24}/>
  <Image
  src={"/images/icon3.svg"}
  alt="icon"
  width={24}
  height={24}/>
  <Image
  src={"/images/icon4.svg"}
  alt="icon"
  width={24}
  height={24}/>
</div>



  </div>
</div>
      

  )
}

export default Footer
