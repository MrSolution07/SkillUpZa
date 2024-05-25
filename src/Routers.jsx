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
import UserSettings from "./Components/UserSettings/index.jsx";
import UserFAQ from "./Components/UserFaq";


import PrivacyPolicy from "./Components/Privacypolicy";
import AfterLogin from "./Pages/AfterLogin";
import Interview from "./Components/Interview/index.jsx";
import CompanySettings from "./Components/CompanySettings";

import ChangePasswordCard from "./Components/UserSettings/changepassword.jsx";
import DeleteAccountCard from "./Components/UserSettings/delete.jsx";
import ProfileCard from "./Components/UserSettings/profilecard.jsx";

// dashboard here

import DashboardPage from "./Pages/Dashboard/index.jsx";

import SkillAI from "./Pages/Dashboard/SkillAI/index.jsx";

import Jobs from "./Pages/Dashboard/Jobs/jobs.jsx";




import HomeUsr from "./Pages/HomeUsr/index.jsx";
import JobPosting from "./Components/JobPosting";
import BussinessAi from "./Pages/Dashboard//AiBusiness/index.jsx";
import JobsUser from "./Components/Social/page/jobs.jsx";

// HomePage
import HomePage from "./Components/Social/HomePage.jsx";
import Jobs from "./Pages/Dashboard/Jobs/jobs.jsx";
import Courses from "./Pages/Dashboard/Courses/index.jsx";
import Courses2 from "./Pages/Dashboard/Courses2/index2.jsx";
import MyCourses from "./Pages/Dashboard/MyCourses/index.jsx";


const router = createBrowserRouter([
  {
    path: "/JobsUser",
    element: <JobsUser />,
  },

  {

    path: "/Interview",
    element: <Interview />,

    path: "/BussinessAi",
    element: <BussinessAi />,
  },
  {
    path: "/ChangePasswordCard",
    element: <ChangePasswordCard/>
  },
  {
    path: "/DeleteAccountCard",
    element: <DeleteAccountCard/>
  },
  {
    path: "ProfileCard",
    element: <ProfileCard/>

  },
  {
    path: "/MyCourses",
    element: <MyCourses />,
  },
  {
    path: "/JobPosting",
    element: <JobPosting />,
  },
  {
    path: "/UserSettings",
    element: <UserSettings />,
  },
  {
    path: "/CompanySettings",
    element: <CompanySettings />,
  },
  {
    path: "/UserFAQ",
    element: <UserFAQ />,
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
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Afterlogin",
    element: <AfterLogin />,
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
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
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
