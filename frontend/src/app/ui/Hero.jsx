import React from "react";
import Image from "next/image";
import NewCollection from "./newcollection";

const Hero=()=>{
    return(
      <>
     <div className="mt-4">
        {/* first section*/}

           <div className=" p-4 w-[95vw] h-40 sm:h-56 md:h-64 lg:h-80 xl:h-[30rem] bg-blue-300  mx-auto relative "><Image src="/banner1.jpg" fill className="object-cover rounded-lg"/></div>
     </div>
     <NewCollection/>
     </>
     
    )
}

export default Hero;