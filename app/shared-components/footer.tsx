import Link from "next/link"
// import Button from "./button"
import { FaChevronRight } from "react-icons/fa"
import Image from "next/image"
import Button from "./button"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa6"

const Footer =()=>{
    return(
        <div className=" bg-black text-white h-70">
        <div className="flex justify-around mt-20">
            <div>
                <h1 className="font-bold text-xl mb-4">Exclusive</h1>
                <Link href={"/"}>Subscribe</Link>
                <p>Get 10% off your first order</p>
                <input type="text" placeholder="Enter your email"  /><FaChevronRight/>

            </div>
            <div>
                <h1 className="font-bold text-xl mb-4">Support</h1>
                <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh</p>
                <Link href={"#"}>exclusive@gmail.com</Link>
                <Link href={"#"}>+88015-88888-9999</Link>
            </div>
            <div>
                <h1 className="font-bold text-xl mb-4">Account</h1>
                <p>My Account</p>
                 <p>Login/Register</p>
                <p>Cart</p>
                 <p>Wishlist</p>
                <p>Shop</p>
                
            </div>
             <div>
                <h1 className="font-bold text-xl mb-4">Quick Link</h1>
                <p>Privacy Policy</p>
                 <p>Terms of Use</p>
                <p>FAQ</p>
                 <p>Contact</p>
                
                    
            </div>
            <div>
                <h1>Download App</h1>
                <p>Save $3 with App New User Only</p>
                <div className="flex gap-2">
           <Image
                       src="/images/QR.png"
                       alt="Shopping cart"
                       width={90}
                       height={90}
                       className="rounded-lg object-cover"
                       priority 
                     />
                       <div>
                     <div className="mb-3">
                     <Button variant="primary" type="submit" className="w-full py-8 text-lg rounded-lg flex items-center justify-center gap-2">
              Get it on Play Store
            </Button>
            </div>
          
            <div>
            <Button variant="primary" type="submit" className="w-full py-8 text-lg rounded-lg flex items-center justify-center gap-2">
              Download on  appstore
            </Button>
            </div>
            </div>
            </div>
            <div className="flex gap-4 text-2xl mt-2">
            <FaFacebook/> <FaTwitter/> <FaInstagram/> <FaLinkedinIn/>
            </div>

            </div>
            
        </div>
        <hr className="border-t border-gray-500 max-w-8xl mx-auto p-3 mt-3" />
        <p className="text-center"> Copyright Rimel 2022. All rights reserved</p>
        </div>
    )
}
export default Footer