import React from "react";
import { Link } from "react-router-dom";

const WorkDetails = ({ workData }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const { id, title, text, img } = workData;

  return (
    <div key={id} className="group transition">
      <Link to={`/workpage/${id}`} onClick={handleClick}>
        <img
          src={img}
          alt=""
          className="rounded-2xl shadow-2xl group-hover:scale-110 transition duration-300 h-[30vh]"
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
