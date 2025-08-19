import Link from "next/link"
import { FaChevronDown , FaMagnifyingGlass} from "react-icons/fa6"

const Header =()=>{
    return(
        <div>
        <div className="bg-black text-white h-15 ">
            <div>
            <div className="flex gap-4 justify-center ">
            <span>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%</span>
            <Link href={"/shop"} className="underline underline-offset-2 hover:text-blue-300 font-medium">ShopNow</Link>
            </div>
            <div className="flex gap-2 "><span>English </span>  <span><FaChevronDown className="text-2xl"/></span></div>
            
            </div>
            
        </div>
        <div className="flex justify-between p-15">
            <div><h1 className="font-bold text-3xl">Exclusive</h1></div>
            
               <div className="flex gap-5">
                
                <Link href={"/"}>Home</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/sign-up"} className="underline underline-offset-2 hover:text-blue-300 font-medium">Sign Up</Link>
                </div>
               <div className="flex gap-4"><span className="text-gray-500">What are you looking for?</span> <FaMagnifyingGlass/></div> 
        </div>
        <hr className="border-t border-gray-500 max-w-8xl mx-auto p-4" />
        </div>
    )
}
export default Header