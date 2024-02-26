import React from "react";
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
  return <RouterProvider router={router} />;
};

export default App;
