import Image from "next/image";
import React from "react";

const Men=()=>{
    return(
        <div className="h-auto w-screen">
           <div className=" p-4 w-[90vw] h-32 bg-slate-200 flex rounded-lg mx-auto my-4 block scroll-animate ">
             <div className=" bg-red-100 w-[30%] relative"><Image src='/banner1.jpg' fill className="object-cover"/></div>

             <div className=" w-[70%]">
                <p className="pl-4 pt-1 text-lg">Long Loose Shirt</p>
                <p className="pl-4 pt-1 text-sm">$100.00</p>
             </div>
           </div>
        </div>
    )
}

export default Men;