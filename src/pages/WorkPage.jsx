import React from "react";
import { WorkDetails } from "../components";
import { workDatas } from "../data";

const WorkPage = () => {
  return (
    <section className="align-group">
      <h1 className="py-10 lg:text-6xl text-3xl font-Ubuntu font-bold underline">
        My Works
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 py-10 lg:py-0">
        {workDatas.map((workData) => {
          return <WorkDetails workData={workData} key={workData.id} />;
        })}
      </div>
    </section>
  );
};

export default WorkPage;
