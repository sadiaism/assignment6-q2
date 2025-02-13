import React from "react";
import Image from "next/image";


const Testimonial = () => {
  return (
    <section id="Testimonial">
    <div className="flex flex-col h-auto top-[5886px] pt-[112px] px-[64px] pb-[112px] pl-[64px] gap-[80px] bg-[#F7F7F7] mobile:px-[24px] mobile:pt-[48px] mobile:pb-[48px] mobile:pl-[24px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="font-[Roboto] text-[48px] font-bold text-[#000000] mobile:text-[32px] mobile:ml-8">Customer testimonials</h1>
        <p className="font-[Roboto] text-[18px] font-thin mobile:text-center ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      {/* 2nddiv */}
      <div className="h-auto gap-[48px] flex flex-col mobile:gp-[24px]">
        <div className=" flex gap-[32px] mobile:flex-col">
            <div className=" flex flex-col border-[1px] p-[32px] gap-[24px] border-[#000000]">
             <Image
             src={"/images/Stars.svg"}
             alt="star"
             width={116}
             height={18.89}/>
             <h1 className="h-[108px] font-[Roboto] text-[18px] text-[#000000]">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`}</h1>
             <div className="flex w-[254px] h-[56px] gap-[20px]">
             <Image
             src={"/images/team3.svg"}
             alt="team"
             width={56}
             height={56}/>
             <div className="flex flex-col"><h1 className="font-semibold">James Nduku</h1>
             <p>Software Developer</p></div>
             </div>

            </div>

            <div className=" flex flex-col border-[1px] p-[32px] gap-[24px] border-[#000000]">
             <Image
             src={"/images/Stars.svg"}
             alt="star"
             width={116}
             height={18.89}/>
             <h1 className="h-[108px] font-[Roboto] text-[18px] text-[#000000]">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`}</h1>
             <div className="flex w-[254px] h-[56px] gap-[20px]">
             <Image
             src={"/images/team5.svg"}
             alt="team"
             width={56}
             height={56}/>
             <div className="flex flex-col"><h1 className="font-semibold">Erick Kipkemboi</h1>
             <p>Scrum Master</p></div>
             </div>

            </div>


            <div className=" flex flex-col border-[1px] p-[32px] gap-[24px] border-[#000000]">
             <Image
             src={"/images/Stars.svg"}
             alt="star"
             width={116}
             height={18.89}/>
             <h1 className="h-[108px] font-[Roboto] text-[18px] text-[#000000]">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`}</h1>
             <div className="flex w-[254px] h-[56px] gap-[20px]">
             <Image
             src={"/images/team6.svg"}
             alt="team"
             width={56}
             height={56}/>
             <div className="flex flex-col"><h1 className="font-semibold">Stephen Kerubo</h1>
             <p>UI/UX Designer</p></div>
             </div>

            </div>


            
           </div>


           <div className="flex justify-between">
            
              <Image
            src={"/images/Slider Dots.svg"}
            alt="dots"
            width={72}
            height={8}/>
            
            
                <Image
                src={"/images/Slider Buttons.svg"}
                alt="buttons"
                width={111}
                height={48}/>
            
           </div>



</div>

</div>
</section>

  )
}

export default Testimonial
