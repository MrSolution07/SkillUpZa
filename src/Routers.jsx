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

import DashboardPage from "./Pages/Dashboard/index.jsx";
import FaqPage from "./Pages/Dashboard/Faq/index.tsx";
import SkillAI from "./Pages/Dashboard/SkillAI/index.jsx";
import Jobs from "./Pages/Dashboard/Jobs/jobs.jsx";
import Interview from "./Pages/Dashboard/Interview/index.jsx";
import HomeUsr from "./Pages/HomeUsr/index.jsx";
import Courses from "./Pages/Dashboard/Courses/index.jsx";
import Courses2 from "./Pages/Dashboard/Courses2/index2.jsx";
import MyCourses from "./Pages/Dashboard/MyCourses/inde.jsx";

// HomePage
import HomePage from "./Components/Social/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/MyCourses",
    element: <MyCourses />,
  },
  {
    path: "/Courses2",
    element: <Courses2 />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/HomeUsr",
    element: <HomeUsr />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/Interview",
    element: <Interview />,
  },
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
