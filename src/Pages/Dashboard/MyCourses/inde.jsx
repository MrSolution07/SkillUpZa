// Mycourses.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CoursesCardDashboard from "../../../Components/Cards/CoursesCardDashboard";
import DashboardLayout from "../layout";


function Mycourses() {
  const location = useLocation();
  const { courseTitle } = location.state || {};

  return (
    <DashboardLayout>
      <div>
        <h2>Course Title: {}</h2>
        {/* Additional content */}
      </div>
    </DashboardLayout>
  );
}

export default Mycourses;



