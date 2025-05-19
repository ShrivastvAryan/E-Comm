'use client'
import { Select } from "@chakra-ui/react"

import React from "react"

const Filter=()=>{
    return(
        <>
        <div className="w-screen h-16 flex justify-center items-center">
            <div className="w-[90vw] h-10 bg-red-500 rounded-md flex flex-row">

                <div className="h-10 w-[30%] p-2 flex flex-row">Price
                    <div>
                    <Select placeholder='Set by Price'>
                    <option value='option1'>High to Low</option>
                    <option value='option2'>Low to High</option>
                    </Select>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Filter;