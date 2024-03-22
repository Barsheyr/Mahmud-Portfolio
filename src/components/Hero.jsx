import React from "react";
import { herosliders } from "../data";
import hero1 from "../assets/mahmudui.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

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
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                      data-aos="fade-down"
                      data-aos-delay="500"
                    >
                      I am a UX designer
                      <span className="text-blue-300"> creating </span>
                      meaningful digital
                      <span className="text-blue-300"> experiences. </span>
                    </h1>
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
    </Swiper>
  );
};

export default Hero;
