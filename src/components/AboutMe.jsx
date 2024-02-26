import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-slate-100 mt-20">
      <div className="max-w-7xl mx-auto py-40 px-10 gap-10">
        <div className="space-y-8">
          <h1 className="lg:text-7xl text-5xl font-Ubuntu"> About me</h1>
          <p className="text-slate-3800 font-Ubuntu text-xl ">
            I'm the head designer for user experience. The following pillars
            define my profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 mt-10 gap-10">
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-blue-400"> Design</h1>
            <p className="text-xl text-slate-500">
              Translating business challenges into ready to use designs is my
              top priority. I'm an expert in User Experience and Interaction
              Design.
            </p>
          </div>

          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-blue-400">
              Facilitation
            </h1>
            <p className="text-xl text-slate-500">
              I am experienced in facilitating workshops. Defining clear goals,
              expectations and connecting right people to the challenge.
            </p>
          </div>

          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-blue-400">Leadership</h1>
            <p className="text-xl text-slate-500">
              I lead teams in asking the right questions, focus on what matters
              and deliver great experiences through research & design.
            </p>
          </div>
        </div>

        <button className="bg-blue-400 px-7 py-5 text-xl text-white mt-10">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
