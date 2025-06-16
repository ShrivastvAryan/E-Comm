import React from "react";

const Hero=()=>{
    return(
        <>
        <div>
            <div className="flex">
                <div className="h-screen w-[20%] bg-slate-200">
                    <div className="w-auto h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer">Add Product</div>
                    <div className="w-auto h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer">Product List</div>
                </div>

                <div className="h-screen w-[80%]">
                    <form className=" p-10 h-auto w-auto">
                        <div className="h-auto w-auto flex-row bg-red-400">
                        <span className="font-semibold text-xl w-max bg-slate-500">Product Name: </span>
                        <input type="text" name="name" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero