import React from "react";
import { Link } from "react-router-dom";

const WorkDetails = ({ workData }) => {
  const { id, title, text, img } = workData;

  return (
    <div key={id} className="group transition">
      <Link to={`/workpage/${id}`}>
        <img
          src={img}
          alt=""
          className="rounded-2xl shadow-md group-hover:scale-110 transition duration-300 w-full"
          data-aos="zoom-in"
          data-aos-offset="400"
          data-aos-delay="300"
        />
      </Link>

      <p className="text-xl mt-10 font-Ubuntu">{text}</p>

      <div className="mt-5"></div>
    </div>
  );
};

export default WorkDetails;
