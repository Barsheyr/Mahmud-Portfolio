import React from "react";
// import aos
import Aos from "aos";
// import aos css
import "aos/dist/aos.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ArticlePage, HomePage, Landing, SingleWork, WorkPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/workpage",
        element: <WorkPage />,
      },
      {
        path: "/workpage/:id",
        element: <SingleWork />,
      },
      {
        path: "/articlepage",
        element: <ArticlePage />,
      },
    ],
  },
]);

const App = () => {
  // initialize aos
  Aos.init({
    duration: 1000,
    offset: 100,
  });
  return <RouterProvider router={router} />;
};

export default App;
