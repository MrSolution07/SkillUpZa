import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Course3 from "./Pages/Course-3";
import Course4 from "./Pages/Course-4";
import CourseSingle from "./Pages/CourseSingle";
import About1 from "./Pages/About-1";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import Error from "./Pages/Error";
import Blogs from "./Pages/Blogs";
import SinglePost from "./Pages/SinglePost";
import Contact from "./Pages/Contact";
import Register from "./Components/JoinNow/Register";
import LoginPage from "./Components/ProfileLogin/Login";
import Forgotpsw from "./Components/ProfileLogin/Forgotpsw";
import BusinessLogin from "./Components/ProfileLogin/BusinessLogin";
import BusinessRegister from "./Components/JoinNow/BusinessRegister";

// dashboard here

import DashboardPage from "./Pages/Dashboard/index.tsx";
import FaqPage from "./Pages/Dashboard/Faq/index.tsx";
import SkillAI from "./Pages/Dashboard/SkillAI/index.jsx";
import Jobs from "./Pages/Dashboard/Jobs/jobs.jsx";


const router = createBrowserRouter([
  {
    path: "/Jobs",
    element: <Jobs />,
  },

  {
    path: "/SkillAI",
    element: <SkillAI />,
  },
  {
    path: "/Dashboard",
    element: < DashboardPage />,
  },

  {
    path: "/Faq",
    element: <FaqPage/>,
  },

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/BusinessLogin",
    element: <BusinessLogin />,
  },
  {
    path: "/BusinessRegister",
    element: <BusinessRegister />,
  },
  {
    path: "/Forgotpsw",
    element: <Forgotpsw />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/course-3",
    element: <Course3 />,
  },
  {
    path: "/course-4",
    element: <Course4 />,
  },
  {
    path: "/single-course",
    element: <CourseSingle />,
  },
  {
    path: "/about-1",
    element: <About1 />,
  },
  {
    path: "/instructor",
    element: <Instructor />,
  },
  {
    path: "/profile",
    element: <InstructorProfile />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/single-post",
    element: <SinglePost />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routers;
