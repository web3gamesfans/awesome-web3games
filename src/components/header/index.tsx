import { Dialog, Disclosure, Listbox, Popover, Tab, Transition } from '@headlessui/react';
import Link from "next/link";
import { Switch } from '@headlessui/react'
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React, {Fragment, useEffect, useState} from "react";
import Image from 'next/image'
import { useAtom } from 'jotai';
import {useRouter} from "next/router";
import {use} from "i18next";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { id:1 ,name: 'Projects', href: '/projects/All', pathname:"/projects/[...slug]" },
    { id:2 ,name: 'Ranking', href: '#Hackathons' },
    { id:3 ,name: 'Articles', href: '#Activities' },

]
const Header = () =>{
    const router = useRouter();

    const [language,setLanguage] = useState(false)

    function languageChange() {
        setLanguage(!language);
    }
    return (
        <header>
            <Popover className="relative bg-black  ">
                <div className="flex  fixed z-10 inset-x-0  bg-black bg-opacity-85  transition duration-700 mb-10 pl-5 mb-5 justify-between items-center  p-2 sm:px-6 lg:justify-end md:space-x-10 lg:px-10 xl:px-24 2xl:px-48 items-center ">

                    <div className=" flex  justify-between lg:justify-start ">
                        <div className="flex justify-start  ">
                            <Link  href="/home">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="w-full"
                                        src="/AWESOME W3G1.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>

                    </div>
                    {/*导航*/}
                    <Tab.Group as="nav" className="hidden  lg:flex  space-x-8  text-white items-center">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link  href={item.href}>
                                    <a  className={classNames(router.pathname == `${item.pathname}` ? 'text-blue border-b text-transparent border-b-pink-500' : '',
                                        " py-2.5  leading-5 text-center   font-semibold text-white  hover:text-transparent bg-clip-text    bg-gradient-to-r from-pink-500  to-purple-500")}>
                                            {item.name}

                                    </a>
                                </Link>
                            </div>

                        ))}
                        <Link href="https://twitter.com/web3games">
                            <a>
                        <div className="flex py-2.5  leading-5 text-center   font-semibold text-white items-center ">
                            <div className="text-2xl mr-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-purple-500">
                                <i className="fa fa-twitter text-2xl" aria-hidden="true"></i>
                            </div>
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-purple-500">
                                Twitter
                            </div>
                            <div className=" ml-2 bg-gradient-to-r from-pink-500  to-purple-500 rounded-md -mt-3 text-sm px-1">
                                FOLLOW
                            </div>
                        </div>
                            </a>
                        </Link>
                    </Tab.Group>

                    <div className="hidden lg:flex w-full justify-end items-center">
                        <div className="flex justify-center z-10 text-gray-800 mt-0.5 -mr-8">
                            <i className="fa fa-search " aria-hidden="true"></i>
                        </div>
                        <input type="text" className="bg-gray-100 text-lg rounded-lg pl-10 py-1  border focus:bg-white outline-none  placeholder:text-sm "
                               placeholder="Search projects or tokens"/>

                    </div>

                    {/*手机版*/}
                    <div className="-mr-2  my-0.5 lg:hidden">
                        <Popover.Button className="bg-black  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>

                <div className="fixed z-20 inset-x-0">
                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white   transition duration-700 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className=" w-36"
                                                src="/AWESOME W3G1.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="py-6 ">
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center ">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href}>
                                                <a
                                                    className="text-base font-medium text-gray-900    transition duration-700 "
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center p-5 items-center">
                                    <div className=" w-full   ">

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>

                    </Transition>
                </div>
            </Popover>
        </header>
    )
}

export default Header
