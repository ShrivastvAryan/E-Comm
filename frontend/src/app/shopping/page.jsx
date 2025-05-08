import Image from "next/image";
import React from "react";
import { GiSonicShoes } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { LuWatch } from "react-icons/lu";
import { GrRestroomWomen } from "react-icons/gr";



const Shopping=()=>{

    const category=[
        {label:"Shoes", value:"shoes",icon:<GiSonicShoes />},
        {label:"Tshirt", value:"t-shirt",icon:<FaTshirt/>},
        {label:"Lower", value:"lower",icon:<GiArmoredPants/>},
        {label:"Shirt", value:"shirt",icon:<PiShirtFoldedFill/>},
        {label:"Watches", value:"watch",icon:<LuWatch/>},
        {label:"Tops", value:"tops",icon:<GrRestroomWomen/>},
    ]

    return(
        <div className="h-auto w-screen">
            {category.map((cat,index)=>(
                 <div key={index} className=" p-4 w-[90vw] h-32 bg-slate-200 flex flex-col rounded-lg mx-auto my-4 block scroll-animate">
    
                    <div className="w-full h-[50%] flex justify-center items-center text-6xl pt-2">{cat.icon}</div>
                    <div className=" w-full text-2xl pt-4 font-semibold block text-center h-[50%]">{cat.label}</div>
               </div>
            ))}
          
        </div>
    )
}

export default Shopping;