import Header from "../shared-components/header";
import { FaApple, FaChevronRight , FaTruckFast, FaHeadphones, FaCircleCheck} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Flash from "../flash-sales/flash";
import Footer from "../shared-components/footer";
import FlashSaleCard from "../flash-sales/flash";

const Home = () => {
  const flashSales = [
    {
      imageSrc: "/images/gamingpad.jpeg",
      title: "HAVIT HV-G92 Gamepad",
      originalPrice: 120,
      discountedPrice: 60,
      discountPercentage: 40,
      rating: 4,
      reviewCount: 88,
    },
    {
      imageSrc: "/images/keyboard.webp",
      title: "AK-900 Wired Keyboard",
      originalPrice: 960,
      discountedPrice: 460,
      discountPercentage: 30,
      rating: 4.5,
      reviewCount: 75,
      
    },
    
    {
      imageSrc: "/images/gamingMonitor.webp",
      title: "IPS LCD Gaming Monitor",
      originalPrice: 370,
      discountedPrice: 300, 
      discountPercentage: 30,
      rating: 4.5,
      reviewCount: 99,
    },
    {
      imageSrc: "/images/cormfortchair.jpeg",
      title: "S-Series Comfort Chair",
      originalPrice: 375,
      discountedPrice: 300,
      discountPercentage: 20,
      rating: 4,
      reviewCount: 99,
    },
    {
      imageSrc: "/images/cormfortchair.jpeg",
      title: "S-Series Deluxe Chair",
      originalPrice: 400,
      discountedPrice: 320,
      discountPercentage: 20,
      rating: 4.2,
      reviewCount: 95,
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex gap-60">
        <div className="ml-12 leading-9">
          <div className="flex gap-2">
            <p>Womens Fashion </p>
            <FaChevronRight />
          </div>
          <div className="flex gap-2">
            <p>Men's Fashion</p>
            <FaChevronRight />
          </div>
          <p>Electronics</p>
          <p>Hoe & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby'y & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health and Beauty</p>
        </div>
        <div className="border-l-2 border-gray-500 h-80"></div>
        <div className="bg-black text-white flex  justify-around w-250">
          <div className="ml-14">
            <div className="flex gap-4  mt-9">
              {" "}
              <FaApple className="text-3xl" /> <span>iPhone 14 Series</span>
            </div>
            <h1 className="text-5xl">
              Up to 10% <br /> off Voucher
            </h1>
            <Link href={"/"} className="underline underline-offset-2">
              Shop Now
            </Link>
          </div>
          <div>
            <Image
              src="/images/iphone.jpeg"
              alt="Iphone 14"
              width={500}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
       
       
       <div className="flex gap-12 mt-20 ml-20">
        <div>
        <p className="font-bold text-2xl">Flash Sales</p>
        </div>
        <div className="flex gap-5">
        <div>
           <p> Days</p>
           <p className="font-bold text-2xl">03</p>
        </div>
        <p>:</p>
        <div>
           <p>Hours</p>
           <p className="font-bold text-2xl">19</p>
        </div>
        <p>:</p>
        <div>
           <p> Minutes</p>
           <p className="font-bold text-2xl">23</p>
        </div>
        <p>:</p>
        <div>
           <p> Seconds</p>
           <p className="font-bold text-2xl">56</p>
        </div>
       
        </div> 
       </div>
       <div className="flex justify-center gap-6 mt-10">
        {flashSales.map((sale, index) => (
          <FlashSaleCard key={index} {...sale} />
        ))}
      </div>

      <div className="bg-black text-white flex w-380 mt-40 ml-50 justify-around h-110">
        <div className="mt-15 ml-20">
          <p className="text-green-300 mb-10">Categories</p>
          <h1 className="font-bold text-5xl mb-10">
            Enhance Your <br />
            Music Experience
          </h1>
          <div className="flex gap-4 text-2xl mb-10">
            <p>
              23 <br />
              Hours
            </p>
            <p>
              05 <br />
              Days
            </p>
            <p>
              59 <br /> Minutes
            </p>
            <p>
              35 <br />
              Seconds
            </p>
          </div>
          <button className="bg-green-500 text-white p-4 rounded-sm">
            Buy Now
          </button>
        </div>
        <Image
          src="/images/ybl2.jpeg"
          alt="Shopping cart"
          width={500}
          height={400}
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="flex gap-7 ml-50">
      <div className="mt-7">
        <Image
          src="/images/ps5.jpeg"
          alt="Ps5"
          width={500}
          height={400}
          className=" object-cover"
          priority
        />
        <div className="position: absolute top-380 text-white">
        <p className="font-bold text-2xl mb-1.5">PlayStation 5</p>
        <p className="mb-3">Black and White version of the PS5 <br /> coming out on sale</p>
        <Link href={"#"} className="underline underline-offset-2">Shop</Link>
      </div>
      </div>
      <div>
      <div className="bg-black text-white flex  justify-around w-180 mt-7 h-65">
        <div className="mt-30">
        <p className="text-3xl">Womens Collections</p>
        <p>Featured woman collections that <br /> give you an other vibe</p>
        <Link href={"#"} className="underline underline-offset-2">Shop</Link>
        </div>
         <Image
          src="/images/girinhat.jpeg"
          alt="Girl in hat"
          width={500}
          height={400}
          className=" object-cover"
          priority
        />
    </div>
    <div className="flex gap-8">
    <div className="bg-black text-white flex  justify-around w-85 mt-5">
            <Image
          src="/images/speaker.png"
          alt="Speaker"
          width={300}
          height={300}
          className=" object-cover"
          priority/>
          <div className="position: absolute top-590 text-white">
            <p>Speakers</p>
            <p>Amazon speakers</p>
            <Link href={"#"} className="underline underline-offset-2">Shop</Link>
        </div>
         </div>
         <div className="bg-black text-white flex  justify-around w-85 mt-5">
            <Image
          src="/images/perfume2.png"
          alt="Speaker"
          width={300}
          height={300}
          className=" object-cover"
          priority/>
          <div className="position: absolute top-590 text-white">
            <p>Perfume</p>
            <p>GUCCI INTENSE OUD EDP</p>
            <Link href={"#"} className="underline underline-offset-2">Shop</Link>
        </div>
         </div>
         </div>
         </div>
         
    </div>
    <div className="flex justify-around mt-10">
    <div>
      <FaTruckFast className="text-5xl ml-20 "/>
      <p className="text-xl font-bold">FREE AND FAST DELIVERY</p>
      <p>Free delivery for all orders over $140</p>
    </div>
    <div>
        <FaHeadphones className="text-5xl ml-20"/>
      <p className="text-xl font-bold">24/7 CUSTOMER SERVICE</p>
      <p>Friendly 24/7 customer dervice</p>
    </div>
      <div>
        <FaCircleCheck className="text-5xl ml-20"/>
      <p className="text-xl">MONEY BACK GUARANTEE</p>
      <p>We return money within 30 days</p>
    </div>
    </div>
    <Footer/>
    </div>
  );
};
export default Home;
