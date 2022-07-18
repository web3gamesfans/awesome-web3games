import Link from "next/link";
import { useEffect } from "react";
import Header from "../../components/header";
import Tail from "../../components/tail";

const Title = () =>{

    const Types = [
        {
         img:[
             {
                 src:"https://awesome-near.s3.amazonaws.com/taikai.jpg",
             },

         ],
            type:"Explore all",
            href:"/home",
        },
        {
            img:[
                {
                    src:"https://awesome-near.s3.amazonaws.com/portal.jpg",
                },
                {
                    src:"https://awesome-near.s3.amazonaws.com/debridge.jpg",
                },
                {
                    src:"https://awesome-near.s3.amazonaws.com/gravis-finance.jpg",
                },
                {
                    src:"https://awesome-near.s3.amazonaws.com/spherium-finance.jpg",
                },

            ],
            type:"Newly added",
            href:"/home",
        },
        {
            img:[
                {
                    src:"https://awesome-near.s3.amazonaws.com/ref-finance.jpg",
                },
            ],
            type:"Submit a project",
            href:"/home",
        },
        {
            img:[
                {
                    src:"https://awesome-near.s3.amazonaws.com/nearweek.jpg",
                },
            ],
            type:"Explore all",
            href:"/home",
        },

    ]
    return(
        <>
            <div className="text-white w-full  py-5    md:px-10 xl:px-20 2xl:px-48   text-center">
                <div className="text-2xl md:text-4xl xl:text-5xl font-semibold ">
                    <div className="leading-relaxed flex flex-wrap justify-center">
                        <div>
                            The curated list of
                        </div>
                        <Link  href="">
                            <a className="mx-2 underline">
                                99
                            </a>
                        </Link>
                        <div>
                            projects building on
                        </div>
                        <Link  href="">
                            <a className="mx-2 ">
                                <h1 className="transition duration-300  hover:-translate-y-1 hover:drop-shadow-2xl">
                                    Web3Games
                                </h1>
                            </a>
                        </Link>
                        <div>
                            ecosystem.
                        </div>
                    </div>
                </div>
                <div className="  md:px-10 xl:px-48 2xl:px-56  flex  flex-wrap justify-center">
                    {Types.map(item=>(
                    <Link href={item.href} key={item.type}>
                        <a className="flex items-center bg-black bg-opacity-85 rounded-full  pl-3 px-3 py-1.5 transition mr-4 mt-3 duration-300  hover:-translate-y-0.5 hover:bg-gray-600 ">
                            {item.img.map(list=>(
                            <img key={list.src} className="w-8 rounded-full -ml-2" src={list.src} alt=""/>
                            ))}
                            <div className="mx-2">
                                {item.type}
                            </div>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </Link>
                    ))}
                </div>

            </div>

        </>
    )
}

const Article = () =>{
    const articles = [
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-tokenomics-2-0-vetokenomics-on-testnet.jpg",
            href:"",
            h1:"Ref Tokenomics 2.0: veTokenomics on Testnet1",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-tokenomics-2-0-vetokenomics-on-testnet.jpg",
            href:"",
            h1:" Ref Tokenomics 2.0: veTokenomics on TestnetRef 2",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-tokenomics-2-0-vetokenomics-on-testnet.jpg",
            href:"",
            h1:"Ref Tokenomics 2.0: veTokenomics on Testnet3",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-tokenomics-2-0-vetokenomics-on-testnet.jpg",
            href:"",
            h1:"Ref Tokenomics 2.0: veTokenomics on Testnet4",
        },
    ]
    return(
        <>
            <div className=" py-5  md:grid-cols-2 xl:grid-cols-4 grid  gap-4">
                {articles.map(item=>(
                    <Link key={item.h1} href={item.href}>
                        <a className="flex  hover:bg-black bg-opacity-85 p-1 xl:p-2 rounded-xl items-center">
                            <img className="w-16 h-12 rounded-xl" src={item.img} alt=""/>
                            <div  className=" ml-2 font-semibold text-white text-xs md:text-sm">
                                {item.h1}
                            </div>
                        </a>
                    </Link>

                ))}


            </div>
        </>
    )
}

const ProjectInformation = () =>{
    return(
        <>
            <div className="w-full bg-black bg-opacity-85 text-white items-center flex justify-between mt-10  overflow-x-auto 2xl:overflow-hidden py-5">
                <div className="flex justify-between px-10 items-center border-r">
                    <div className="text-2xl 2xl:text-4xl font-bold">
                        $3.89
                    </div>
                    <div className="ml-5 text-sm">
                        <div className="font-semibold">
                            W3G Price
                        </div>
                        <div className="flex">
                            24H:
                            <div className="ml-0.5 text-green-400">
                                +5.95%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between px-10 items-center border-r">
                    <div className="text-2xl 2xl:text-4xl font-bold">
                        $2,854,330,757
                    </div>
                    <div className="ml-5 text-sm">
                        <div className="font-semibold w-28">
                            W3G MarketCap
                        </div>
                        <div className="flex">
                            Rank:
                            <div className="ml-0.5 ">
                                #1
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between px-10 items-center border-r">
                    <div className="text-2xl 2xl:text-4xl font-bold">
                        16,601,310
                    </div>
                    <div className="ml-5 text-sm">
                        <div className="font-semibold w-32">
                          Accounts on  W3G
                        </div>
                        <div className="flex">
                            24H:
                            <div className="ml-0.5 text-green-400">
                                +5.95%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between px-10 items-center ">
                    <div className="text-2xl 2xl:text-4xl font-bold">
                       180,515,464
                    </div>
                    <div className="ml-5 text-sm">
                        <div className="font-semibold w-36">
                          Transactions on W3G
                        </div>
                        <div className="flex">
                            24H:
                            <div className="ml-0.5 ">
                                +356,373
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const TrendingProjects = () =>{
    useEffect(()=>{

        const onload = () =>{

            const oDiv = document.getElementById('div1');

            const oUl = document.getElementsByTagName('ul')[0];

            const Li = oUl.getElementsByTagName('li');

            oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;

            oUl.style.width = (Li[0].offsetWidth*Li.length)/16+'rem';

            const speed = 0

            function move(){

                if(oUl.offsetLeft<-oUl.offsetWidth/speed){
                    oUl.style.left = '0'
                }
                if(oUl.offsetLeft>0){
                    oUl.style.left = (-oUl.offsetWidth/speed)/16+'rem';
                }
                oUl.style.left = (oUl.offsetLeft-2)/16+0.08+'rem';//进行左横向滚动

            }
            let timer = setInterval(move,60)

            oDiv.onmouseover=function(){

                clearInterval(timer);

            }
            oDiv.onmouseout=function(){

                timer = setInterval(move,60)

            }

        }
        onload()
    },[])
    const projects = [
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-finance.jpg",
            name:"Ref Finance",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/aurora-dev.jpg",
            name:"Aurora",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/octopus-network.jpg",
            name:"Octopus Network",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-finance.jpg",
            name:"Ref Finance",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/aurora-dev.jpg",
            name:"Aurora",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/octopus-network.jpg",
            name:"Octopus Network",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/ref-finance.jpg",
            name:"Ref Finance",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/aurora-dev.jpg",
            name:"Aurora",
            href:"",
        },
        {
            img:"https://awesome-near.s3.amazonaws.com/octopus-network.jpg",
            name:"Octopus Network",
            href:"",
        },

    ]

    return(
        <>
            <div className="py-10">
                <div className="text-2xl font-semibold text-center text-white">
                    <i className="fa fa-bolt" aria-hidden="true"></i>   Trending Projects
                </div>
                <div className=" flex justify-center mt-2 text-white overflow-auto">
                    {projects.map(item=>(
                            <Link  href={item.href} key={item.name}>
                                <a className="rounded-xl hover:bg-black bg-opacity-85 p-5 items-center mr-8">
                                    <img className="rounded-full w-20" src={item.img} alt=""/>
                                    <div className="mt-2 text-center w-20 h-8 text-sm font-semibold">
                                        {item.name}
                                    </div>
                                </a>
                            </Link>
                    ))}
                </div>
                <div className="hidden xl:xxflex mt-2 text-white  relative" id="div1">
                    <div className="flex   relative overflow-hidden w-full h-32" >
                        <ul className="flex mb-2 absolute">
                            {projects.map(item=>(
                                <li key={item.name} className="mr-8">
                                    <Link  href={item.href}>
                                        <a className="rounded-xl  p-5 items-center ">
                                            <img className="rounded-full w-20" src={item.img} alt=""/>
                                            <div className="mt-2 text-center w-20 h-8 text-sm font-semibold">
                                                {item.name}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const Ecosystem = () =>{
    const ecosystems = [
        {

            ecosystem:"Xxxxx Ecosystem",
            ecosystemIcon:"",
            ecosystemHref:"",
            Projects:[
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/nex.jpg",
                    name:"NEX",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/portal.jpg",
                    name:"Portal",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/thetanuts-finance.jpg",
                    name:"ThetaNuts Finance",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
            ]
        },
        {

            ecosystem:"Xxxxx2 Ecosystem",
            ecosystemIcon:"",
            ecosystemHref:"",
            Projects:[
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/nex.jpg",
                    name:"NEX2",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/portal.jpg",
                    name:"Portal2",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/thetanuts-finance.jpg",
                    name:"ThetaNuts Finance2",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
            ]
        },
        {

            ecosystem:"Xxxxx3 Ecosystem",
            ecosystemIcon:"",
            ecosystemHref:"",
            Projects:[
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/nex.jpg",
                    name:"NEX3",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/portal.jpg",
                    name:"Portal3",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
                {
                    href:"",
                    img:"https://awesome-near.s3.amazonaws.com/thetanuts-finance.jpg",
                    name:"ThetaNuts Finance3",
                    h1:"Decentralized on-chain perpetual and spot exchange on Aurora.",
                },
            ]
        }
    ]
    return(
        <>
            <div className="grid md:grid-cols-2  xl:grid-cols-3 gap-10 py-10">
                {ecosystems.map(item=>(
                <div key={item.ecosystem} className="bg-black  drop-shadow-2xl p-5 rounded-xl w-full text-white overflow-hidden">
                    <Link href={item.ecosystemHref} >
                        <a>
                    <div className="flex  font-semibold items-center">
                        <div>
                            {item.ecosystemIcon}
                        </div>
                        <div className="text-xl font-semibold mr-4 hover:underline">
                            {item.ecosystem}
                        </div>
                        <div>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                        </a>
                    </Link>
                    <div className="mt-3">
                        {item.Projects.map(list=>(
                        <Link href={list.href} key={list.name}>
                        <a className="flex items-center mt-5 rounded-xl hover:bg-gray-900 bg-opacity-50 transition duration-300 w-full truncate ">
                            <img className="rounded-full w-12 mr-2 drop-shadow-lg" src={list.img} alt=""/>
                            <div>
                                <div className=" font-semibold">
                                    {list.name}
                                </div>
                                    <div className="text-sm text-gray-500">
                                        {list.h1}
                                    </div>

                            </div>
                        </a>
                        </Link>
                        ))}

                    </div>
                </div>
                ))}
            </div>

        </>
    )
}

const Home = () =>{
    return (
        <>
        <div className="relative  bg-fixed   "
             style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/876498266550853642/998527626652168302/web.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-24 2xl:px-48 relative px-5 pt-24    mx-auto ">
                <Title/>
                <Article/>
            </div>
            <div className="relative">
                <ProjectInformation/>
                <TrendingProjects/>
            </div>
            <div className="lg:px-10 xl:px-24 2xl:px-48 relative px-5 mx-auto">
                <Ecosystem/>
            </div>

            <Tail/>
        </div>
        </>
    )
}

export default Home


