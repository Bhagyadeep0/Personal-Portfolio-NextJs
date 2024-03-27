//icons
import { BsArrowBarRight } from "react-icons/bs";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
// next image
import Image from "next/image";

// work data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title0",
          icon: <BsArrowBarRight />,
          path: "/thumb1.jpg",
        },
        {
          title: "title1",
          icon: <BsArrowBarRight />,
          path: "/thumb2.jpg",
        },
        {
          title: "title2",
          icon: <BsArrowBarRight />,
          path: "/thumb3.jpg",
        },
        {
          title: "title3",
          icon: <BsArrowBarRight />,
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title4",
          icon: <BsArrowBarRight />,
          path: "/thumb4.jpg",
        },
        {
          title: "title5",
          icon: <BsArrowBarRight />,
          path: "/thumb1.jpg",
        },
        {
          title: "title6",
          icon: <BsArrowBarRight />,
          path: "/thumb2.jpg",
        },
        {
          title: "title7",
          icon: <BsArrowBarRight />,
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const workSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* images */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="work"
                        className="rounded-lg"
                      />
                      {/* overlay gradient */}
                      <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 ">
                        {/* image title */}
                        <h2 className="h2 relative flex justify-center items-center translate-y-80 group-hover:translate-y-0 transition-all duration-300">
                          {image.title}{image.icon}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default workSlider;
