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
            <section className="pt-20 lg:py-10">
              <div className="max-w-7xl  mx-auto lg:px-20 px-10 flex justify-center items-center h-[100vh]">
                <div className="flex flex-col lg:gap-x-[30px] items-center justify-center text-center lg:text-left lg:flex-row gap-y-8 lg:gap-y-0">
                  <div className="flex-1">
                    <h1
                      className="text-5xl lg:text-6xl mb-6 font-bold lg:mb-5"
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

{
  /* <div className="align-group">
<div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10 mt-16">
  <div className="">
    <h1
      className="lg:text-6xl text-4xl tracking-wide font-semibold"
      data-aos="fade-right"
      data-aos-offset="400"
      data-aos-delay="300"
    >
      I am a UX designer{" "}
      <span className="text-blue-300"> creating </span>
      meaningful digital
      <span className="text-blue-300"> experiences. </span>
    </h1>
  </div>

  <div className="h-[28rem] carousel carousel-center space-x-4 bg-neutral  rounded-box">
    {carouselImages.map((image, index) => {
      return (
        <div key={image} className="carousel-item">
          <img
            src={image}
            className="lg:rounded-md h-full w-80 object-cover"
          />
        </div>
      );
    })}
  </div>
</div>
</div> */
}

{
  /* <Swiper
modules={[EffectFade, Autoplay]}
effect={"fade"}
loop={true}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,
}}
className=""
>
{herosliders.map((heroslider, index) => {
  // destructure slide
  const { id, img } = heroslider;
  return (
    <SwiperSlide
      className="relative flex justify-center items-center h-[100vh]"
      key={index}
    >
      <div className="absolute top-40 max-w-5xl mx-auto flex flex-col lg:gap-x-[30px] items-center justify-center text-center lg:text-left lg:flex-row gap-y-8 lg:gap-y-0 ">
        <div className="flex-1">
          <h1
            className="lg:text-6xl text-4xl font-semibold mt-10"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-delay="300"
          >
            I am a UX designer
            <span className="text-blue-300"> creating </span>
            meaningful digital
            <span className="text-blue-300"> experiences. </span>
          </h1>
        </div>
        <div className="flex-1">
          <img className="rounded-xl" src={img} alt="" />
        </div>
      </div>
    </SwiperSlide>
  );
})}
</Swiper> */
}
