
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
import AssignmentEditorViewOnly from "./Assignments/AssignmentEditorViewOnly";
import { Navigate } from "react-router";
import Settings from "../Settings";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === Number(cid)); 
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
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<Piazza />} />
                <Route path="Zoom" element={<Zoom/>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Assignments/:aid/EditAssignment" element={<AssignmentEditorViewOnly />} />
                <Route path="Quizzes" element={<Quizzes />} />
                <Route path="People" element={<PeopleTable />} />
                <Route path="Settings" element={<Settings />} />
                <Route path="AssignmentEditor" element={<AssignmentEditor />} />
              </Routes>
        </div>
      </div>
    </div>
  );
}