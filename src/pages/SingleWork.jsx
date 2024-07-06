import React from "react";
import { workDatas } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import aertitle from "../assets/Aer-Title.png";

const SingleWork = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const { id } = useParams();

  const workData = workDatas.find((workData) => {
    return workData.id === parseInt(id);
  });

  const {
    image,
    projecttitle,
    title,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    problemstatement,
    projectoverview,
    projectgoals,
    neededDesign,
    projectOld,
    projectNew,
    projectAudit,
    conclusion,
    role1,
    role2,
    style1,
    style2,
    style3,
    style4,
    projectTitle,
  } = workData;

  return (
    <div key={id}>
      {/* head */}
      <div className="align-group">
        <div className="space-y-20">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
          <img src={image10} alt="" />
          <img src={image11} alt="" />
          <img src={image12} alt="" />
          <img src={image13} alt="" />
          <img src={image14} alt="" />
          <img src={image15} alt="" />
          <img src={image16} alt="" />
          <img src={image17} alt="" />
          <img src={image18} alt="" />
          <img src={image19} alt="" />
          <img src={image20} alt="" />
          <img src={image21} alt="" />
          <img src={image22} alt="" />
          <img src={image23} alt="" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-10 gap-5">
        <Link to={"/workpage"}>
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-500 text-sm hover:bg-slate-300 hover:text-black font-Ubuntu px-20 py-4 rounded-md text-white"
          >
            Back
          </button>
        </Link>
        <Link to={"/workpage"}>
          <button
            type="button"
            onClick={handleClick}
            className="bg-slate-300 hover:bg-blue-500 hover:text-white font-Ubuntu px-20 text-sm py-4 rounded-md text-black"
          >
            Link to Website
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleWork;
