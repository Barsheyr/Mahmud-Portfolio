import React from "react";
import { workDatas } from "../data";
import { Link } from "react-router-dom";

const Works = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <section className="max-w-6xl mx-auto px-10 py-20">
      <h1
        className="lg:text-6xl text-4xl text-center font-Ubuntu font-bold uppercase mb-10"
        data-aos="fade-down"
        data-aos-offset="400"
        data-aos-delay="100"
      >
        Work I am proud of
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 py-10 lg:py-0 mt-20">
        {workDatas.map((workData) => {
          const { id, text, img } = workData;

          return (
            <div
              key={id}
              className="group transition"
              data-aos="zoom-in"
              data-aos-offset="400"
              data-aos-delay="300"
            >
              <Link to={`/workpage/${id}`}>
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl  shadow-2xl group-hover:scale-110 transition duration-300 h-[30vh]"
                  onClick={handleClick}
                />
              </Link>

              <p className="text-xl mt-10 font-Ubuntu">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
