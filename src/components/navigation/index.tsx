import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const navigation = [
    {
        title:"All",
        number:"706",
        sort:[
        ]
    },
    {
        title:"Aurora",
        number:"180",
        sort:[
            {
                list:"Wallets",
                number:"31"
            },
        ]
    },
]
const Navigation = () =>{
    const router = useRouter();
    return(
        <>
            <div className="w-2/12">
                {navigation.map(items=>(
                    <div key={items.title}>
                        <Link href={`${items.title}`}>
                            <a className={classNames(router.pathname == `/projects/${items.title}` ? 'bg-gray-700' : ''
                                ,"flex justify-between p-2  text-xl text-white rounded-md ")}>
                                <div className=" font-semibold">
                                    {items.title}
                                </div>
                                <div className="font-normal text-base">
                                    {items.number}
                                </div>
                            </a>
                        </Link>
                        <div className="ml-3">
                            {items.sort.map(lists=>(
                                <div key={lists.list}>
                                    <Link href={`${lists.list}`}>
                                        <a className="flex justify-between p-2  text-base text-white rounded-md">
                                            <div className=" ">
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
