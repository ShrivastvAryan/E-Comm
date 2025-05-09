import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Men=()=>{
    return(
        <div className="h-auto w-screen flex flex-row flex-wrap gap-2 p-2">
           <div className=" w-[45vw] h-64 bg-slate-100 flex flex-col rounded-lg mx-auto my-4 block scroll-animate ">
             <div className=" bg-red-100 w-full h-[70%] relative"><Image src='/banner1.jpg' fill className="object-cover"/></div>

             <div className=" w-[70%] p-2 ">
                <p className="pt-1 text-sm font-semibold">Classic white tea</p>
                <p className="pt-1 text-sm ">$100.00</p>
             </div>

             <Button className="mt-2 w-[90%] m-2 mb-4" colorScheme="blue" size="sm">Add to cart</Button>
           </div>

           <div className=" w-[45vw] h-64 bg-slate-100 flex flex-col rounded-lg mx-auto my-4 block scroll-animate ">
             <div className=" bg-red-100 w-full h-[70%] relative"><Image src='/banner1.jpg' fill className="object-cover"/></div>

             <div className=" w-[70%] p-2 ">
                <p className="pt-1 text-sm font-semibold">Classic white tea</p>
                <p className="pt-1 text-sm ">$100.00</p>
             </div>

             <Button className="mt-2 w-[90%] m-2 mb-4" colorScheme="blue" size="sm">Add to cart</Button>
           </div>

           
        </div>
    )
}

export default Men;