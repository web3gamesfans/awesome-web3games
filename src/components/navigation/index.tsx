import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Info from "../../info";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const navigation = [
    {
        title:"All",
        number:`${Info.All[0].info.length}`,
        sort:[
        ]
    },
    {
        title:"DApps",
        number:`${Info.DApps[0].info.length}`,
        sort:[
            {
                list:"Gaming",
                number:`${Info.Gaming[0].info.length}`
            },
        ]
    },
]
const Navigation = () =>{
    const router = useRouter();
    const [pathname,setPathname] = useState("")
    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0]
            console.log(router.query.slug[0])
            const fetchUserBounty = async () => {
                setPathname(content)
                console.log(`/projects/${pathname}`)
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])
    return(
        <>
            <div className="md:w-1/12 fixed">
                {navigation.map(items=>(
                    <div key={items.title}>
                        <Link href={`${items.title}`}>
                            <a className={classNames(`/projects/${items.title}` == `/projects/${pathname}` ? 'bg-gray-700' : ''
                                ,"flex justify-between p-2 text-sm md:text-xl text-white rounded-md ")}>
                                <div className=" font-semibold">
                                    {items.title}
                                </div>
                                <div className="font-normal ">
                                    {items.number}
                                </div>
                            </a>
                        </Link>
                        <div className="md:ml-3">
                            {items.sort.map(lists=>(
                                <div key={lists.list}>
                                    <Link href={`${lists.list}`}>
                                        <a className={classNames(`/projects/${lists.list}` == `/projects/${pathname}` ? 'bg-gray-700' : ''
                                               ,"flex justify-between p-2 text-sm md:text-base text-white rounded-md")}>
                                            <div className="mr-3 ">
                                                {lists.list}
                                            </div>
                                            <div className="font-normal ">
                                                {lists.number}
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </>
    )
}


export default Navigation
