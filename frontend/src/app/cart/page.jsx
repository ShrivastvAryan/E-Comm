'use client'
import React from "react"
import { useState } from "react"

const Cart=()=>{

    return(
        <>
         <h1 className="text-2xl md:text-3xl font-semibold p-8">Cart</h1>
         <div className="w-[90vw] h-auto mx-auto">
            <div className="h-44 w-full shadow-md flex">
                <div className="h-full w-[20%] bg-slate-500">

                </div>
                <div className="h-full w-[80%] flex-col sm:justify-end p-3">
                    <div className="h-[70%]">
                    <p className="font-semibold">Name of the product</p>
                    <p>Price: Rs. XXXXX</p>
                    <p>Qty:1</p>
                    <p>Size:S</p>
                    </div>

                    <div className="h-[30%] w-full">
                        <button className="rounded-2xl text-sm p-2 mt-1 bg-blue-500 text-white">Remove</button>
                        <button className="rounded-2xl text-sm p-2 mt-1 ml-2 bg-blue-500 text-white">Add</button>

                    </div>
                </div>
           </div>
            </div>
        </>
    )
}

export default Cart;