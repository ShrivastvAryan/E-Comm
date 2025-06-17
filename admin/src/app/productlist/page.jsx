'use client'

import React from "react";
import Sidebar from "../UI/sidebar";

const AllProduct=()=>{
    return(
        <>
        <div className="flex">

        <div className="h-screen w-[20%]">
        <Sidebar/>
        </div>

        <div className="h-screen w-[80%] bg-slate-400">
        <h1 className="text-2xl p-5 font-semibold">All Products</h1>
        </div>

        </div>
        </>
    )
}

export default AllProduct