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
    { id:1 ,name: 'Projects', href: '/educate' },
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
            <Popover className="relative bg-white  ">
                <div className="flex  fixed z-10 inset-x-0  bg-black bg-opacity-85  transition duration-700 mb-10 pl-5 mb-5 justify-between items-center  p-3 md:p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10 xl:px-24 2xl:px-48 items-center ">

                    <div className=" flex  justify-between lg:justify-start ">
                        <div className="flex justify-start  ">
                            <Link  href="/home">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="w-full"
                                        src="/Web3GamesLogo2-01.svg"
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
                                    <a  className={classNames(router.pathname == `/${item.href}` ? 'text-blue border-b' : ''," py-2.5  leading-5 text-center   font-semibold text-white ")}>
                                        <div  className=''>
                                            {item.name}
                                        </div>

                                    </a>
                                </Link>
                            </div>
                        ))}
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
                        <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
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
                                                className=" w-full"
                                                src="/Web3Games Logo.svg"
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

                                        <div className="flex justify-between">
                                            <Switch
                                                checked={language}
                                                onChange={languageChange}
                                                className={classNames(
                                                    'relative inline-flex flex-shrink-0 h-7 w-12  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 items-center bg-gray-200 '
                                                )}
                                            >
                                                <span className="sr-only">Use setting</span>

                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(

                                                        'pointer-events-none inline-block   w-5 rounded-full   transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                >
                                    <div className="flex justify-between items-center  w-12  text-xs">
                                        <div className={language?"w-12   w-6  py-1":"bg-black rounded-full w-12  w-6 py-1 text-center text-white"}>
                                                EN
                                        </div>
                                         <div className={language?"bg-black rounded-full w-12   w-6  py-1  text-white":"w-12   w-6  py-1"}>
                                          中
                                        </div>
                            </div>
                                </span>
                                            </Switch>
                                        </div>
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
