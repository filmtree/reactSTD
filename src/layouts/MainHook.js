// useRoutes 훅 라우터
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Profiles from "../pages/Profiles";
import Profile from "../pages/Profile";

const Main = () => {
  const routes = useRoutes([
    { 
      index: true,
      element: <Home />,
      exact: true
    },
    {
      path: "/about", // 중첩 라우트 
      element: <About />,
      children: [
        {
          path: "location",
          element: <Location />
        }
      ]
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/profiles/*", // 서브 라우트
      element: <Profiles />,
      children: [
        {
          path: ":username",
          element: <Profile />,
        },
        {
          path: "*",
          element: <div>유저를 선택해주세요.</div>
        },
      ],
    }
  ]);

  return (
    <main className="container"> 
      { routes }
    </main>
  )
};

export default Main;