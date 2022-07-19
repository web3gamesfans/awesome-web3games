import Header from "../../components/header";
import Tail from "../../components/tail";
import { RadioGroup } from '@headlessui/react'
import {useEffect, useState} from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Navigation from "../../components/navigation";
import {useRouter} from "next/router";
import Link from "next/link";
import Info from "../info";

const mailingLists = [
    { id: 1, title: 'All'},
    { id: 2, title: 'WIPs'},
    { id: 3, title: 'EVM'},
    { id: 4, title: 'Ink'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Projects = () =>{
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
    const router = useRouter()

    const [pathname,setPathname] = useState("")
    const [data,setData] =useState([])
    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0]
            setSelectedMailingLists(mailingLists[0])
            const fetchUserBounty = async () => {
                setPathname(content)
                console.log(`/projects/${pathname}`)
                setData(Info[content])
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])
    return(
        <>
            <div className="relative  bg-fixed   "
                 style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/876498266550853642/998527626652168302/web.png')"}}>
                <Header/>
                <div className=" lg:px-10 xl:px-24 2xl:px-48 relative px-5 pt-16    mx-auto ">
                    <div className="text-white">
                    <div className="mt-10 flex ">
                        <Navigation/>
                        <div className="ml-24 md:ml-32 xl:ml-48 h-big overflow-y-auto xl:h-full xl:overflow-hidden">
                            {data.map(item=>(
                                <div key={item.title}>
                                    <div className="">
                                        <div className="text-3xl font-semibold">
                                            {item.title}
                                        </div>
                                        <div className="md:flex mt-2 justify-between items-center ">
                                            <div className="h-12">
                                                {item.h1}
                                            </div>
                                            <div>
                                                <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
                                                    <div className="mt-6 flex justify-between bg-gray-800 p-1 rounded-md items-center">
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
                                    </div>
                            <div className="  mt-10 grid xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-10 text-white ">
                                {item.info.map(lists=>(
                                    <Link key={lists.name} href="">
                                        <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                            <div className="flex items-center" >
                                                <img className="rounded-full w-14 mr-2 " src={lists.img} alt=""/>
                                                <div>
                                                    <div className="font-semibold text-xl truncate w-40 md:w-full xl:w-40">
                                                        {lists.name}
                                                    </div>
                                                    <div className="truncate text-gray-200 text-sm md:w-40">
                                                        {lists.phase}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 text-sm h-16  overflow-ellipsis overflow-hidden">
                                                {lists.h1}
                                            </div>
                                            <div className="mt-4 flex text-xl justify-between items-center">
                                                <div className="flex">
                                                    {lists.abouts.map( about =>(
                                                        <div key={about.Icon} className={classNames(about.href? "mr-3":" hidden")}>
                                                            <i className={about.Icon} aria-hidden="true"></i>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex">
                                                    {lists.chains.map( chain =>(
                                                        <div key={chain.img} className="-ml-2">
                                                            <img  className="rounded-full w-5 mr-1" src={chain.img} alt=""/>
                                                        </div>

                                                    ))}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        ))}
                    </div>
                    </div>
                                </div>
                </div>


                <Tail/>
            </div>

        </>
    )
}
export default Projects

