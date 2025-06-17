
import React from "react";
import Link from "next/link";

const Sidebar=()=>{
    return(
        <>
                <div className="h-screen ">
                    <div className="w-40 h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer">Add Product</div>
                    <div className="w-40 h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer"><Link href="/productlist">Product List</Link></div>
                </div>
                
        </>
    )
}

export default Sidebar