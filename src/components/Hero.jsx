import React from "react";
import hero1 from "../assets/mahmudui.jpg";
import hero2 from "../assets/mahmudui2.jpg";
import hero3 from "../assets/mahmudui3.jpg";
import hero4 from "../assets/mahmudui3.jpg";
import hero5 from "../assets/mahmudui3.jpg";

const carouselImages = [hero1, hero2, hero3];

const Hero = () => {
  return (
    <div className="align-group">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10 mt-16">
        <div className="">
          <h1 className="lg:text-6xl text-4xl tracking-wide font-semibold">
            I am a UX designer <span className="text-blue-300"> creating </span>
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
    </div>
  );
};

export default Hero;
