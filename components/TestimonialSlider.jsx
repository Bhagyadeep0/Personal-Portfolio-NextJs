// react icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
// next image
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={{
        clickable: true,
      }}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((data, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[330px] flex flex-1 flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center items-center text-center space-y-2">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={data.image}
                      width={100}
                      height={100}
                      alt="clientPng"
                    />
                  </div>
                  <div className="text-lg">
                    {/* name */}
                    {data.name}
                  </div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {/* position */}
                    {data.position}
                  </div>
                </div>
              </div>
              {/* quote & text */}
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center items-center before:w-[1px] before:bg-white/20 before:absolute before:left-0 before:h-[210px] relative px-5 rounded-ss-2xl rounded-ee-2xl xl:px-20">
                {/* quote icon */}
                <div className="my-4 flex flex-col">
                  <FaQuoteLeft className="text-4xl self-start xl:text-6xl text-white/20 mx-auto md:mx-0 " />
                  {/* text */}
                  <div className="xl:text-lg text-center md:text-left text-wrap my-3 ">
                    {data.message}
                  </div>
                  <FaQuoteRight className="text-4xl self-end xl:text-6xl text-white/20 mx-auto md:mx-0 " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
