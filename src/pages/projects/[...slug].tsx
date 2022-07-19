import Header from "../../components/header";
import Tail from "../../components/tail";
import { RadioGroup } from '@headlessui/react'
import {useEffect, useState} from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Navigation from "../../components/navigation";
import {useRouter} from "next/router";
import Link from "next/link";
import David from "../info";

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
            console.log(router.query.slug[0])
            const fetchUserBounty = async () => {
                setPathname(content)
                console.log(`/projects/${pathname}`)
                setData(David[content])
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])
    return(
        <>
            <div className="relative  bg-fixed   "
                 style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/876498266550853642/998527626652168302/web.png')"}}>
                <Header/>
                <div className=" lg:px-10 xl:px-24 2xl:px-48 relative px-5 pt-24    mx-auto ">
                    <div className="text-white">
                        <div className="text-3xl font-semibold">
                            Projects
                            {data.map(item=>(
                                <div>
                                    {item.img}
                                </div>
                            ))}
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
                        <div className="ml-20 grid xl:grid-cols-3 2xl:grid-cols-4 gap-2 text-white">
                            <Link href="https://www.youtube.com/shorts/EWoech1qVO8">
                            <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                <div className="flex items-center" >
                                    <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Fcryptoempire-logo-01.png&w=1920&q=75" alt=""/>

                                    <div>
                                        <div className="font-semibold text-xl">
                                            CryptoEmpire
                                        </div>
                                        <div className="truncate text-gray-200 text-sm w-40">
                                            Release Date: Q2 2022
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm">A play-to-earn, match-3 strategy and battle game. Collect CryproEmpire Hero NFTs to build your team and defeat monsters as quickly as possible in PvPvE combat!
                                </div>
                                <div className="mt-4 flex text-xl">
                                    <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                    <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                    <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                </div>
                            </a>
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=BxY3pmBP43c">
                                <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                    <div className="flex items-center" >
                                        <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Fdebeats-logo-01.png&w=1920&q=75" alt=""/>

                                        <div>
                                            <div className="font-semibold text-xl">
                                                DEBEATS
                                            </div>
                                            <div className="truncate text-gray-200 text-sm w-40">
                                                Release Date: Q3 2022
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-sm">
                                        Join the next generation of music game with your favourite music NFTs and create beat maps together!
                                    </div>
                                    <div className="mt-4 flex text-xl">
                                        <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </Link>
                            <Link href="https://www.youtube.com/shorts/2PIlktdIR1I">
                                <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                    <div className="flex items-center" >
                                        <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Farcanum-logo.png&w=1920&q=75" alt=""/>

                                        <div>
                                            <div className="font-semibold text-xl">
                                                Guardians of Arcanum
                                            </div>
                                            <div className="truncate text-gray-200 text-sm w-40">
                                                Release Date: Q4 2022
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-sm">
                                        Multiplayer battle arena with Tower defence and Collectible NFT cards!
                                    </div>
                                    <div className="mt-4 flex text-xl">
                                        <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=JTklOX2RMPQ">
                                <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                    <div className="flex items-center" >
                                        <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Fw3poker-logo.png&w=1920&q=75" alt=""/>

                                        <div>
                                            <div className="font-semibold text-xl">
                                                W3Poker: Web3 Texas Holden
                                            </div>
                                            <div className="truncate text-gray-200 text-sm w-40">
                                                Release Date: Q2 2022
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-sm">
                                        The best gaming social platform on which to play Texas Hold’em in Web3.0!
                                    </div>
                                    <div className="mt-4 flex text-xl">
                                        <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </Link>
                            <Link href="">
                                <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                    <div className="flex items-center" >
                                        <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Fcity-heros-logo.png&w=1920&q=75" alt=""/>

                                        <div>
                                            <div className="font-semibold text-xl">
                                                City Heroes
                                            </div>
                                            <div className="truncate text-gray-200 text-sm w-40">
                                                Release Date: TBC
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-sm">
                                        Parkour game for you to compete with other runners in different scenes!
                                    </div>
                                    <div className="mt-4 flex text-xl">
                                        <i className="fa fa-safari mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
                                        <i className="fa fa-github mr-2" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </Link>
                            <Link href="">
                                <a className="p-6 rounded-xl bg-black transition duration-500 transform  hover:-translate-y-2">
                                    <div className="flex items-center" >
                                        <img className="rounded-full w-14 mr-2 " src="https://web3games.com/_next/image?url=%2Fstudios%2Fw3mahjong-logo.png&w=1920&q=75" alt=""/>

                                        <div>
                                            <div className="font-semibold text-xl">
                                                W3Mahjong
                                            </div>
                                            <div className="truncate text-gray-200 text-sm w-40">
                                                Release Date: TBC
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-4 text-sm">
                                        Play Japanese Mahjong and make friends by taking a seat at the W3Mahjong table as your NFT character!
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

