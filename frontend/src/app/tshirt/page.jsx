'use client'
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect ,useState} from "react";
import Filter from "../ui/filter";


const Men=()=>{

   const[tshirt,setUseTshirt]=useState([]);

   useEffect(()=>{
      const fetchtshirts=async()=>{
         try {
            const response =await fetch("/data/tshirt.json");
            const data= await response.json();
            setUseTshirt(data); 
         } catch (error) {
            console.error("Failed fetchcing");
            
         }
      }
      fetchtshirts()
   },[])

    return(
     <>
      <Filter/>
      <h1 className="block text-3xl text-center pt-2 font-semibold">T-Shirts</h1>
        <div className="h-auto w-screen flex flex-row flex-wrap gap-2 p-2">
         {tshirt.map((list,index)=>(
             <div  key={index} className=" w-[45vw] h-64 bg-slate-100 flex flex-col rounded-lg mx-auto my-4 scroll-animate ">
             <div className=" bg-red-100 w-full h-[70%] relative"><Image src={list.image} fill className="object-cover"/></div>

             <div className=" w-[70%] p-2 ">
                <p className="pt-1 text-sm font-semibold">{list.name}</p>
                <p className="pt-1 text-sm ">${list.price}</p>
             </div>

             <Button className="mt-2 w-[90%] m-2 mb-4" colorScheme="blue" size="sm">Add to cart</Button>
           </div>

         ))}
          
           
        </div>
        </>
    )
}

export default Men;