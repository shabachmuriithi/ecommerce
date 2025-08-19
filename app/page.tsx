import Image from "next/image";
import Header from "./shared-components/header";
import Button from "./shared-components/button";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Footer from "./shared-components/footer";

export default function Home() {
  return (
    
    <div >
      <Header/>
      <div className="flex justify-space gap-6">
        <div>
          
         
          <div className="flex-shrink-0">
          <Image
            src="/images/shoppingCart.jpeg"
            alt="Shopping cart"
            width={800}
            height={900}
            className="rounded-lg object-cover"
            priority 
          />
          </div>
        </div>
        <div>
          <h1 className="text-4xl">Create an account</h1>
          <p className="mb-10">Enter you details below</p>
          <form action="">
            <div className="pb-6">
              <label htmlFor="username" className="block text-sm font-medium">
                Name
              </label>
              <input 
                type="text"
                id="Enter name"
               
                className="w-200 p-2 border-b-2 border-gray-400 rounded-none focus:outline-none focus:border-black "
                placeholder="Name"
                required
                
              />
            </div>
            <div className="pb-8">
              <label htmlFor="email" className="block text-sm font-medium">
                Email or Phone Number
              </label>
              <input
                type="text"
                id="email"
                
                className="w-200 p-2 border-b-2 border-gray-400 rounded-none focus:outline-none focus:border-black"
                placeholder="Enter your email or phone"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                
                className="w-200 p-2 border-b-2 border-gray-400 rounded-none focus:outline-none focus:border-black"
                placeholder="Enter your password"
                required
              />
            </div>
          </form>
          <div className="w-full p-2 text-lg rounded-lg">
         <Button variant="primary" type="submit" className="w-full py-8 text-lg rounded-lg cursor-pointer" href="/login">
              Create Account
            </Button>
            </div>
            <div className="p-2 w-full flex">
            <Button variant="outline" type="submit" className="w-full py-8 text-lg rounded-lg flex items-center justify-center gap-2">
              Sign Up with Google <FaGoogle/>
            </Button>
            
            </div>
            <span className="text-gray-500">Already have an account?</span> <Link href={"/login"}>Login</Link>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
