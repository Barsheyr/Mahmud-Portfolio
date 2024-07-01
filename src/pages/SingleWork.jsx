import React from "react";
import { workDatas } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    title,
    image2,
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
    image3,
    projectTitle,
  } = workData;

  return (
    <div key={id}>
      {/* head */}
      <div className="align-group">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-6xl font-bold font-Ubuntu text-blue-700">
            {title}
          </h1>

          <p className="text-slate-500 text-xl lg:px-[20%] px-0">
            Easily generate a professional invoice for business
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
        {/* problem statment */}
        <div className="flex flex-col gap-3 mt-20 px-5 py-5">
          <h3 className="text-5xl text-center font-Ubuntu">
            Problem Statement
          </h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            {problemstatement}
          </p>
        </div>
        {/* project overview */}
        <div className="flex flex-col gap-3 mt-20 px-5 py-5">
          <h3 className="text-5xl text-center font-Ubuntu">Problem Overview</h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            {projectoverview}
          </p>
        </div>
        {/* project goals */}
        <div className="flex flex-col gap-3 mt-20 px-5 py-5">
          <h3 className="text-5xl text-center font-Ubuntu">Problem Goals</h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            {projectgoals}
          </p>
        </div>
        {/* needed design */}
        <div className="flex flex-col gap-3 mt-20 px-5 py-5">
          <h3 className="text-5xl text-center font-Ubuntu">
            Why was the redesign needed
          </h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            {neededDesign}
          </p>
        </div>

        <div className="flex flex-col mt-20 px-10">
          <h3 className="text-5xl text-center font-Ubuntu">The Design </h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            Shown below is the side by side comparison of the landing page
          </p>
          <div className="flex lg:flex-row flex-col flex-wrap text-center justify-center gap-20">
            <div>
              <p className="font-Ubuntu text-4xl py-10"> Old </p>
              <img src={projectOld} alt="" />
            </div>
            <div>
              <p className="font-Ubuntu text-4xl py-10"> New </p>
              <img src={projectNew} alt="" />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-20 px-10">
          <h3 className="text-5xl font-Ubuntu text-center"> UX Audit </h3>
          <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
            In order for us to be able to do understand the challenges users
            face when using KwikInvoice and how best to solve these problems, we
            carried out a UX audit. This revealed the varying perspectives of
            users based on their experiences using KwikInvoice.
          </p>
          <div className="mt-10">
            <img src={projectAudit} alt="" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-20 px-10">
          <h3 className="text-5xl font-Ubuntu text-center mb-5">Style Guide</h3>
          <div className="space-y-10">
            <img src={style1} alt="" />
            <img src={style2} alt="" />
            <div className="py-10">
              <h3 className="text-5xl font-Ubuntu text-center">
                Atomic Design Principle
              </h3>
              <p className="max-w-5xl text-slate-500 mx-auto lg:px-20 py-5 text-xl">
                Due to the fact that the website was a redesign, it will need
                constant changes and iteration and as such we needed to design
                the website in such a way, we are allowed to make as much
                iteration as we want too, hence we designed using the atomic
                design principle. below are the examples of buttons, icons and
                currencies used in the design.
              </p>
              <img src={style3} alt="" />
            </div>

            <img src={style4} alt="" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-5xl text-center font-Ubuntu mb-10">My Role </h3>
          <ol>
            <p className="text-slate-500 mx-auto lg:px-5 py-5 text-3xl">
              1 {role1}
            </p>
            <p className="text-slate-500 mx-auto lg:px-5 py-5 text-3xl">
              2 {role2}
            </p>
          </ol>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-20 px-10 lg:px-0">
        <h1 className="text-5xl font-Ubuntu mb-5"> Conclusion </h1>
        <p className="text-slate-500 text-xl">{conclusion}</p>
      </div>

      <div className="flex flex-row items-center justify-center py-10 gap-5">
        <Link to={"/workpage"}>
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-500 font-Ubuntu px-20 py-5 rounded-md text-white"
          >
            Back to Works
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleWork;
