// import logo from "@/assets/logo.svg";
import { ArrowBigDown, ArrowDown, ShoppingBag, ShoppingCart, Store, StoreIcon } from "lucide-react";
import Image from "next/image";

export const Navbar = ()=>{

    return (
        <div className="flex justify-between items-center px-10 py-5 bg-white">
            <div className="logo flex items-center gap-2">
                <Image src={'/logo.svg'} alt="logo" width={120} height={120} />
                <hr className="bg-gray-600 w-4 rotate-90" />
                <p className="text-md font-bold text-black">Blog</p>
            </div>

            <div className="flex items-center justify-between w-[25%] gap-2">
                <div className="navigations flex items-center justify-between w-[45%] gap-2">
                    <h1 className="hover:text-red-500 flex items-center gap-1 cursor-pointer text-black">
                        <ArrowDown size={15} className="text-blue-500"/>
                        Achives
                        </h1>
                    <h1 className="hover:text-red-500 flex items-center gap-1 cursor-pointer text-black">
                        <ShoppingCart size={15} className="text-blue-500"/>
                        Store
                        </h1>
                </div>
                <button className="bg-cyan-800 text-white px-4 py-2 rounded-full">Get a Quote</button>
            </div>
        </div>
    )
}


