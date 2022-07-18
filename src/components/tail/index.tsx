import {Dialog, Popover, Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/outline"
import Link from "next/link"
import React, { Fragment, useState } from "react"


const Tail=()=>{
    const about = [
        {
            name:"Submit a project",
            href:"",
        },
        {
            name:"Twitter",
            href:"",
        },
        {
            name:"Email",
            href:"",
        },
    ]

    return(
        <div className="lg:px-10 xl:px-24 2xl:px-48 relative px-5 mx-auto xl:w-8/12  mt-20">
        <div className=" flex justify-center  ">
            <div className="px-8 py-2 text-center  text-gray-200 bg-gray-800 rounded-xl ">
                <a className=" font-semibold mr-0.5">
                    DISCLAIMER
                </a>
                    The information presented herein has been provided by third parties and is made available solely for
                    general information purposes.
                    AwesomeW3G does not warrant the accuracy of this information.
                    The information should not be construed as professional or financial advice of any kind.

            </div>

        </div>
            <div className="flex justify-center py-5 text-white">
                {about.map(item=>(
                <Link href={item.href} key={item.name}>
                    <a className="after:content-['_↗']  mr-4 md:mr-10">
                        {item.name}
                    </a>
                </Link>
                ))}
            </div>

            <div className="flex  justify-center items-center text-white pb-5">
                Made with <i className="fa fa-heart mx-1" aria-hidden="true"></i>
                buy
                <Link href="">
                <a className="ml-1 font-semibold hover:underline">
                    W3GFans
                </a>
                </Link>
            </div>

        </div>
    )
}
export  default Tail
