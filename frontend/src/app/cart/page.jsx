'use client'
import React from "react"

const Cart=()=>{
    return(
        <>
         <h1 className="text-2xl md:text-3xl font-semibold p-8">Cart</h1>
         <div className="w-[90vw] h-auto mx-auto">
            <div className="h-44 w-full shadow-md flex">
                <div className="h-full w-[40%]">

                </div>
                <div className="h-full w-[60%] flex-col sm:justify-end p-3">
                    <div className="h-[60%]">
                    <p>Name of the product</p>
                    <p>Price: Rs. XXXXX</p>
                    </div>

                    <div className="h-[40%]">
                        <button className="rounded-2xl text-sm p-1 bg-slate-100">Remove</button>
                        <span className="pl-4"></span>
                    </div>
                </div>
           </div>
            </div>
        </>
    )
}

export default Cart;