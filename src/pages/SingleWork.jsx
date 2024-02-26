import React from "react";
import { workDatas } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleWork = () => {
  const { id } = useParams();

  const workData = workDatas.find((workData) => {
    return workData.id === parseInt(id);
  });

  const {
    image,
    title,
    image2,
    problemstatement,
    conclusion,
    style1,
    style2,
    style3,
    style4,
    design1,
    design2,
    design3,
    design4,
    image3,
    projectTitle,
  } = workData;

  return (
    <div key={id}>
      {/* head */}
      <div className="align-group">
        <div className="flex flex-col items-center justify-start py-10 gap-5">
          <h1 className="text-6xl font-bold font-Ubuntu text-blue-700">
            {title}
          </h1>

          <p className="text-slate-500 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            distinctio ipsum odio dolorem perferendis iure id mollitia aut
            aliquid a distinctio ipsum odio dolorem perferendis iure id mollitia
            aut aliquid a
          </p>
        </div>
      </div>

      {/* body */}
      <div className="">
        <img src={image} alt="" className="w-full" />
        <img src={projectTitle} alt="" />
        <img src={image3} alt="" />
      </div>

      <div>
        <div className="flex flex-col gap-3 mt-20 px-5">
          <h3 className="text-5xl font-Ubuntu text-center">
            Problem Statement
          </h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            {problemstatement}
          </p>
        </div>

        <div className="flex flex-col mt-20">
          <img src={image2} alt="" />
          <p className="max-w-5xl mx-auto lg:px-20 px-10 text-slate-500 py-20 text-xl">
            Lorem ipsum dolor siamet, consectetur adipisicing elit. Enim
            deserunt cum error quibusdam deleniti, eaque ipsam dolorum veniam
            possimus. Numquam hic distinctio libero similique perferendis quis
            eum ab reiciendis qui.
          </p>
        </div>

        <div className="max-w-5xl mx-auto py-20">
          <h3 className="text-5xl font-Ubuntu text-center">Design Process</h3>
          <div className="grid lg:grid-cols-2 gap-5 mt-10">
            <img src={design1} alt="" />
            <img src={design2} alt="" />
            <img src={design3} alt="" />
            <img src={design4} alt="" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-20">
          <h3 className="text-5xl font-Ubuntu text-center mb-5">Style Guide</h3>
          <div className="grid lg:grid-cols-2 gap-5">
            <img src={style1} alt="" />
            <img src={style2} alt="" />
            <img src={style3} alt="" />
            <img src={style4} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-20 px-10 lg:px-0">
        <h1 className="text-5xl font-Ubuntu text-center mb-5"> Conclusion </h1>
        <p className="text-slate-500 text-xl">{conclusion}</p>
      </div>

      <div className="flex flex-row items-center justify-center py-10 gap-5">
        <Link to="/workpage">
          <button className="bg-blue-500 font-Ubuntu px-20 py-5 rounded-md text-white">
            Back to Works
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleWork;
