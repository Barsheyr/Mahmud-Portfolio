import React from "react";
import { articles } from "../data";

const ArticlePage = () => {
  return (
    <section className="align-group">
      <div>
        <h1 className="lg:text-7xl text-5xl font-Ubuntu"> Articles I write </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-20 px-10 lg:px-0">
          {articles.map((article) => {
            const { id, img, title, text, dar } = article;

            return (
              <div key={id}>
                <img src={img} alt="" className="rounded-md" />

                <div className="mt-5">
                  <p className="text-slate-400 mb-2"> {dar} </p>
                  <h1 className="text-3xl font-Ubuntu">{title}</h1>
                  <p className="mt-5"> {text} </p>

                  <button className="bg-blue-200 px-10 py-2 font-Ubuntu mt-5 flex items-center justify-center">
                    Read
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
