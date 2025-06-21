import React from "react";
import Image from "next/image";
import NewCollection from "./newcollection";

const Hero=()=>{
    return(
      <>
     <div className="mt-4">
        {/* first section*/}

           <div className="w-screen h-40 sm:h-56 md:h-64 lg:h-80 xl:h-[30rem]  mx-auto relative "><Image src="/banner.png" fill className="object-center"/></div>
     </div>
     <NewCollection/>
     </>
     
    )
}

export default Hero;