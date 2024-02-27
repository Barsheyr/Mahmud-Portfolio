import React from "react";
import { workDatas } from "../data";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h1
        className="lg:text-7xl text-4xl text-center font-Ubuntu font-bold uppercase"
        data-aos="fade-down"
        data-aos-offset="400"
        data-aos-delay="100"
      >
        Work I am proud of
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-20 px-10">
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
                  className="rounded-2xl w-full shadow-md group-hover:scale-110 transition duration-300 h-[50vh]"
                />
              </Link>

              <p className="text-2xl mt-5 font-Ubuntu">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
