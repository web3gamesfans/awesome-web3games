import Header from "../../components/header";
import Tail from "../../components/tail";
import { RadioGroup } from '@headlessui/react'
import {useEffect, useState} from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Navigation from "../../components/navigation";
import {useRouter} from "next/router";
import Link from "next/link";

const mailingLists = [
    { id: 1, title: 'All'},
    { id: 2, title: 'NEAR'},
    { id: 3, title: 'Aurora'},
    { id: 4, title: 'Octopus'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Projects = () =>{
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
    const router = useRouter()

    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0]
            console.log(router.query.slug[0])
            console.log(router.pathname)

            const fetchUserBounty = async () => {
                console.log(router.pathname)
            }
            fetchUserBounty()

        }
    },[router.isReady])
    return(
        <>
            <div className="relative  bg-fixed   "
                 style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/876498266550853642/998527626652168302/web.png')"}}>
                <Header/>
                <div className=" lg:px-10 xl:px-24 2xl:px-48 relative px-5 pt-24    mx-auto ">
                    <div className="text-white">
                        <div className="text-3xl font-semibold">
                            Projects
                        </div>
                        <div className="flex mt-2 justify-between items-center">
                            <div>
                                All projects building on NEAR Protocol and Aurora ecosystem.
                            </div>
                            <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
                                <div className="mt-4 flex bg-gray-800 p-1 rounded-md items-center">
                                    {mailingLists.map((mailingList) => (
                                        <RadioGroup.Option
                                            key={mailingList.id}
                                            value={mailingList}
                                            className={({ checked, active }) =>
                                                classNames(
                                                    checked ? 'border-transparent' : '',
                                                    active ? 'border-pink-500 ' : '',
                                                    'relative   rounded-lg shadow-sm w-16 py-3  flex  focus:outline-none mr-1'
                                                )
                                            }
                                        >
                                            {({ checked, active }) => (
                                                <>
                    <div  className={classNames(
                        active ? 'border-2' : 'border-2',
                        checked ? 'border-pink-500' : 'border-transparent',
                        'absolute -inset-px rounded-lg pointer-events-none text-center text-white text-sm'
                    )}>
                      {mailingList.title}
                    </div>
                                                </>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>

                        </div>
                    </div>
                    <div className="mt-10 flex ">
                        <Navigation/>
                        <div className="ml-20 grid grid-cols-4 gap-2 text-white">
                            <Link href="">
                            <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                <div className="flex items-center" >
                                    <img className="rounded-full w-14 mr-2 " src="https://awesome-near.s3.amazonaws.com/rainbow-bridge.jpg" alt=""/>

                                    <div>
                                        <div className="font-semibold text-xl">
                                            Rainbow Bridge
                                        </div>
                                        <div className="truncate text-gray-200 text-sm w-40">
                                            Aurora Bridges DeFi asdasdasdasdas
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm">
                                    Transfer tokens between Ethereum and NEAR!
                                </div>
                                <div className="mt-4 flex text-xl">
                                    <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                    <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                    <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                </div>
                            </a>
                            </Link>


                        </div>
                    </div>

                </div>


                <Tail/>
            </div>

        </>
    )
}
export default Projects

