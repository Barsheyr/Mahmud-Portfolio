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
          className="rounded-2xl shadow-md group-hover:scale-110 transition duration-300 w-[80%] h-[30vh]"
        />
      </Link>

      <p className="text-2xl mt-5 font-Ubuntu">{text}</p>

      <div className="mt-5"></div>
    </div>
  );
};

export default WorkDetails;
