import React from "react";
import { workDatas } from "../data";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section className="align-group">
      <h1 className="lg:text-6xl text-3xl font-Ubuntu ">Work I am proud of</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
        {workDatas.map((workData) => {
          const { id, text, img } = workData;

          return (
            <div key={id} className="group transition">
              <Link to={`/workpage/${id}`}>
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl shadow-md group-hover:scale-110 transition duration-300 w-[80%] h-[30vh]"
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
