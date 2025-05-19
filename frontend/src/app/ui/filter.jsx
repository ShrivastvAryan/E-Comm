'use client'
import { Select,Button } from "@chakra-ui/react"

import React from "react"

const Filter=()=>{
    return(
        <>
        <div className="w-screen h-auto flex justify-center items-center pt-4 pb-1">
            <div className="w-[90vw] h-auto rounded-md flex flex-col ">

                <div className="h-auto w-full p-2 flex flex-row">Price:
                    <div className="w-full ml-2 bo">
                    <Select  size='xs' className="rounded-lg bg-blue-300">
                    <option value='option1'>High to Low</option>
                    <option value='option2'>Low to High</option>
                    </Select>
                    </div>
                </div>

                <div className="h-auto w-full p-2 flex flex-row">Popularity:
                    <div className="w-full pl-2">
                    <Select  size='xs' className="rounded-lg bg-blue-300">
                    <option value='option1'>High to Low</option>
                    <option value='option2'>Low to High</option>
                    </Select>
                    </div>
                </div>

                <div className="p-2">
                <Button size='xs' className="bg-blue-400" >Reset</Button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Filter;