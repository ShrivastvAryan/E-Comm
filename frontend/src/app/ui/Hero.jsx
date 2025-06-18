import React from "react";
import Image from "next/image";

const Hero=()=>{
    return(

     <div className="w-screen h-auto pb-6 pt-4 ">
        {/* first section*/}
        <div className="">
           <div className=" p-4 w-[90vw] h-40 sm:h-56 md:h-64 lg:h-96 xl:h-[35rem] bg-blue-300 rounded-lg mx-auto relative "><Image src="/banner1.jpg" fill className="object-cover rounded-lg"/></div>
           <div className=" p-4 w-[90vw] h-40 sm:h-56 md:h-64 lg:h-96 xl:h-[35rem] bg-blue-300 rounded-lg mx-auto my-4 lg:my-6 xl:my-8 relative "><Image src='/banner2.jpg' fill className="object-cover rounded-lg"/></div>

           <div className="flex flex-row justify-around w-[90vw] h-auto my-4 lg:my-6 xl:my-8 mx-auto lg:gap-4">
           <div className=" mr-3 w-[50%] h-40 sm:h-56 lg:h-96 xl:h-[35rem] bg-blue-100 rounded-lg relative "><Image src='/banner3.jpeg' fill className="object-cover rounded-lg"/></div>
           <div className=" w-[50%] h-40 sm:h-56 lg:h-96 xl:h-[35rem] bg-blue-300 rounded-lg relative "><Image src='/banner4.jpeg' fill className="object-cover rounded-lg"/></div>
           </div>

        </div>

      

        {/* second section*/}
        <div>

        <div className="flex flex-row justify-around w-[90vw] h-auto my-4 lg:my-8 mx-auto scroll-animate lg:gap-4">
         <div className=" mr-3 w-[50%] h-72 sm:h-80 lg:h-[40rem] xl:h-[50rem] bg-blue-300 rounded-lg  block scroll-animate relative"><Image src='/banner5.png' fill className="object-cover rounded-lg"/></div>
         <div className=" w-[50%] h-72 sm:h-80 lg:h-[40rem] xl:h-[50rem] bg-blue-300 rounded-lg  block scroll-animate relative"><Image src='/banner6.webp' fill className="object-cover rounded-lg"/></div>
         </div>

         <div className=" p-4 w-[90vw] h-40 sm:h-56 lg:h-96 xl:h-[35rem] bg-blue-300 rounded-lg mx-auto my-4  block scroll-animate relative"><Image src='/banner7.webp' fill className="object-cover rounded-lg"/></div>

        </div>
     </div>
    )
}

export default Hero;