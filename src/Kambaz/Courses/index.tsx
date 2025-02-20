
import {Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import PeopleTable from './People/Table';
import Quizzes from './Quizzes';
import Zoom from './Zoom';
import Piazza from './Piazza';
import courses from '../Database/courses.json'; // Import the JSON data

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course.id === Number(cid)); // Convert cid to number
  const { pathname } = useLocation();
  const currentSection = pathname.split("/")[4];

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.title} &gt; {currentSection}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Zoom" element={<Zoom />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}