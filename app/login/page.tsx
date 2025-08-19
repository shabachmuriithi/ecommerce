import Image from "next/image";
import Header from "../shared-components/header";
import Button from "../shared-components/button";

import Link from "next/link";
import Footer from "../shared-components/footer";

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
          <h1 className="text-4xl">Log in to Exclusive</h1>
          <p className="mb-10">Enter you details below</p>
          <form action="">
            <div className="pb-6">
              <label htmlFor="email" className="block text-sm font-medium">
                Email or phone number
              </label>
              <input 
                type="text"
                id="Enter email or phone number"
                
                className="w-200 p-2 border-b-2 border-gray-400 rounded-none focus:outline-none focus:border-black "
                placeholder="Name"
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
          <div className="flex justify-between mt-4">
         
         <Button variant="primary" type="submit" className="w-200" href="/home">
              Log in
            </Button>
         
            <p className="text-pink-500">forgot password?</p>
        </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
