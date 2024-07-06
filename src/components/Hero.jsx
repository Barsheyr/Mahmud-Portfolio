import React from "react";
import { herosliders } from "../data";
import hero1 from "../assets/mahmudui.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className=""
    >
      {herosliders.map((heroslider) => {
        const { img } = heroslider;

        return (
          <SwiperSlide>
            <section className="py-40">
              <div className="max-w-7xl  mx-auto lg:px-20 px-10 flex justify-center items-center">
                <div className="flex flex-col lg:gap-x-[30px] items-center justify-center text-center lg:text-left lg:flex-row gap-y-8 lg:gap-y-0">
                  <div className="flex-1">
                    <span className="text-blue-300 text-2xl"> Hi there! </span>
                    <h1
                      className="text-5xl md:text-4xl lg:text-7xl font-semibold mb-6"
                      data-aos="fade-down"
                      data-aos-delay="500"
                    >
                      I'm Mahmud Akinbami
                    </h1>

                    <span className="text-blue-300 text-3xl">
                      Welcome to my creative space!
                    </span>
                  </div>
                  <div
                    className="flex-1"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <img src={img} alt="" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
      <div className="max-w-xl mx-auto px-60 -mt-10">
        <MdKeyboardDoubleArrowDown size={50} />
      </div>
    </Swiper>
  );
};

export default Hero;
