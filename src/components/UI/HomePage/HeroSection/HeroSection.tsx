"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CirclePlus } from "lucide-react";

const HeroSection = () => {
  const Data = [
    {
      _id: 1,
      title: "Car Washin Air purifire Gun",
      imglink:
        "https://i.postimg.cc/k5thsXBx/ca.jpg",
      price: 247,
    },
    {
      _id: 2,
      title: "Lemo Electronic Calculator",
      imglink:
        "https://i.postimg.cc/nrnRn4Tk/calculator.jpg",
      price: 295,
    },
    {
      _id: 3,
      title: "Deerma Electric Kettle Heater",
      imglink:
        "https://i.postimg.cc/Z5QM6yKb/heat-ketle.jpg",
      price: 241,
    },
    {
      _id: 4,
      title: "Deerma Mini Garlic Stirrer",
      imglink:
        "https://i.postimg.cc/TwMN4MDB/mini-garlic.jpg",
      price: 218,
    },
    {
      _id: 5,
      title: "Google Nest Hub Max Tablet",
      imglink:
        "https://i.postimg.cc/T1Qk1K4X/nest.jpg",
      price: 299,
    },
    {
      _id: 6,
      title: "Smart Water Air Purifier 4 Lite",
      imglink:
        "https://i.postimg.cc/CM4rm2L6/puri.jpg",
      price: 277,
    },
  ];
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Discover Cutting-Edge Tech at <br /> Gadgets Man: Your Electronics
            Haven
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Gadgets Man, your ultimate destination for all things
            electronic.
            <br /> Browse our extensive collection of cutting-edge gadgets
            designed to enhance your life.
            <br /> With top-notch quality and unbeatable prices, innovation
            awaits you here.
          </p>
        </div>
        <div className="container mx-auto px-4 flex flex-wrap justify-center">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {Data.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-xs rounded overflow-hidden mx-12 my-12">
                  <div>
                    <div className="relative">
                      <Image
                        src={data.imglink}
                        alt={data.title}
                        width={200}
                        height={200}
                        className="w-full rounded-lg"
                      />
                      <p className="bg-black text-white absolute top-5 left-5 px-5 py-1 rounded-full">
                        -15%
                      </p>
                    </div>
                    <div className="px-6 pt-3">
                      <div className="font-bold text-xl mb-2">{data.title}</div>
                    </div>
                    <div className="px-6 py-1 flex justify-between">
                      <p className="text-xl text-red-500">${data.price}</p>
                      <CirclePlus />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
