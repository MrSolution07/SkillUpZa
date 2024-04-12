import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Course3 from "./Pages/Course-3";
import CourseSingle from "./Pages/CourseSingle";
import About1 from "./Pages/About-1";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import Error from "./Pages/Error";
import Blogs from "./Pages/Blogs";
import SinglePost from "./Pages/SinglePost";
import Contact from "./Pages/Contact";
import Register from "./Component/JoinNow/Register";
import LoginPage from "./Component/ProfileLogin/Login";
import Forgotpsw from "./Component/ProfileLogin/Forgotpsw";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
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
