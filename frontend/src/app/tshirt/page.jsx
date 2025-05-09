import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Men=()=>{
    return(
        <div className="h-auto w-screen">
           <div className=" w-[90vw] h-64 bg-slate-100 flex flex-col rounded-lg mx-auto my-4 block scroll-animate ">
             <div className=" bg-red-100 w-full h-[70%] relative"><Image src='/banner1.jpg' fill className="object-cover"/></div>

             <div className=" w-[70%] p-3">
                <p className="pt-1 text-lg">Classic white tea</p>
                <p className="pt-1 text-sm ">$100.00</p>
                <Button className="pt-3 " color="blue">Add to cart</Button>
             </div>
           </div>
        </div>
    )
}

export default Men;