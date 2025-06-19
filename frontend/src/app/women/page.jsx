import Image from "next/image";
import React from "react";

const Women=()=>{
    return(
      <>
      <h1 className="text-5xl text-center block pt-10 pb-10">Collections Of Women</h1>
        <div className="h-auto w-screen flex gap-4">
          
           <div className="w-screen grid gap-4 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-4">
           <div className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg scroll-animate bg-slate-600">
           </div>
         {/* Add more items as needed */}
     </div>
        </div>
        </>
    )
}

export default Women;