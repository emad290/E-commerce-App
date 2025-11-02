"use client";
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="w-[80%] mx-auto h-[350px] md:h-[450px] my-24 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>

<div className="flex justify-between items-center p-12 bg-slate-400">
   
<div>
 <p className="font-semibold text-xl text-orange-400">Limited Time Offer 30% Off</p>
    <h1 className="text-2xl my-4 ">Power Meets Elegance - Apple MacBook Pro is Here for you!</h1>
<Button className="bg-orange-400 hover:bg-orange-500 text-white">Shop Now</Button>
</div>
<div className=" relative ">
     <Image
          
            src="/header_headphone_image.cb07f9d4.png"
            className="w-full h-full object-contain"
            alt="Slide 1"
            width={400}
            height={400}
          />
</div>
</div>

     
        </SwiperSlide>

        <SwiperSlide>
  <div className="flex justify-between items-center p-12 bg-slate-400">
   
<div>
 <p className="font-semibold text-xl text-orange-400">Limited Time Offer 30% Off</p>
    <h1 className="text-2xl my-4 ">Power Meets Elegance - Apple MacBook Pro is Here for you!</h1>
<Button className="bg-orange-400 hover:bg-orange-500 text-white">Shop Now</Button>
</div>
<div className=" relative ">
     <Image
          
            src="/header_macbook_image.2135a26c.png"
            className="w-full h-full object-contain"
            alt="Slide 1"
            width={500}
            height={500}
          />
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
     <div className="flex justify-between items-center p-12 bg-slate-400">
   
<div>
 <p className="font-semibold text-xl text-orange-400">Limited Time Offer 30% Off</p>
    <h1 className="text-2xl my-4 ">Power Meets Elegance - Apple MacBook Pro is Here for you!</h1>
<Button className="bg-orange-400 hover:bg-orange-500 text-white">Shop Now</Button>
</div>
<div className=" relative ">
     <Image
          
            src="/header_playstation_image.f40d654c.png"
            className="w-full h-full object-contain"
            alt="Slide 1"
            width={500}
            height={500}
          />
</div>
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
