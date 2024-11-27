import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="Services">
    <div className='flex flex-col items-center max-w-[1280px] gap-4 pt-[28px] pb-[28px] mobile:pb-[12px] mobile:pt-[12px] mobile:pr-[6px] mobile:pl-6 mobile:gap-[12px] bg-[#F7F7F7]'>
        <div className='flex flex-col mb-12 gap-6'>
            <h1 className='font-bold text-5xl leading-[57.6px] text-center text-[#000000]'>Our team</h1>
            <p className='font-normal text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='flex flex-col max-w-[1280px] gap-[62px] mobile:items-center mobile:gap-24'>


            <div className='gap-48 grid grid-cols-3 mobile:grid-cols-1 mobile:gap-12'>
                <div className='gap-6 flex flex-col items-center '>
                    <Image
                    src={"/images/team1.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>James Nduku</h1>
                    <p className='font-[Roboto] text-[18px]'>Marketing Coordinator</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>

                    <div className='gap-6 flex flex-col items-center'> 
                    <Image
                    src={"/images/team2.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>Joseph Munyambu</h1>
                    <p className='font-[Roboto] text-[18px]'>Nursing Assistant</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>


                    <div className='flex flex-col items-center gap-6'>
                    <Image
                    src={"/images/team3.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>Joseph Ngumbau</h1>
                    <p className='font-[Roboto] text-[18px]'>Medical Assistant</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>
            </div>



            <div className='gap-48 grid grid-cols-3 mobile:grid-cols-1 mobile:gap-12'>
            <div className='gap-6 flex flex-col items-center'>
                    <Image
                    src={"/images/team4.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>Erick Kipkemboi</h1>
                    <p className='font-[Roboto] text-[18px]'>Web Designer</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>
                    <div className='gap-6 flex flex-col items-center'>
                    <Image
                    src={"/images/team5.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>Stephen Kerubo</h1>
                    <p className='font-[Roboto] text-[18px]'>President of Sales</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>


                    <div className='gap-6 flex flex-col items-center'>
                    <Image
                    src={"/images/team6.svg"}
                    alt="team"
                    width={80}
                    height={80}/>
                    <h1 className='font-[Roboto] text-[20px] font-bold'>John Leboo</h1>
                    <p className='font-[Roboto] text-[18px]'>Dog Trainer</p>
                    <div className='flex gap-[14px]'>
                    <Image
                    src={"/images/icon4.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon3.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>
                    <Image
                    src={"/images/icon5.svg"}
                    alt="icon"
                    width={24}
                    height={24}/>

                    </div>
                    </div>
            
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default Services
