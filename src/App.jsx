import React from "react";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
