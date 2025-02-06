
import { ListGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs'; // Import icons if used in the component
import  LessonControlButtons from "./LessonControlButtons";
import  ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Button style={{ width: "130px" }}>Collapse All</Button>
        <Button style={{ width: "130px" }}>View Progress</Button>
        <DropdownButton title="Publish All" style={{ width: "130px" }}>
          <Dropdown.Item eventKey="1">Week 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Week 2</Dropdown.Item>
        </DropdownButton>
        <Button style={{ width: "130px" }}>+ Module</Button>
      </div>
      <ListGroup id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES
              <LessonControlButtons />
              <ListGroup className="wd-content">
                <ListGroup.Item className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />Introduction to the course
                  <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-content-item">
                  Learn what is Web Development
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              READING
              <ListGroup className="wd-content">
                <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              SLIDES
              <ListGroup className="wd-content">
                <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                <ListGroup.Item className="wd-content-item">Creating a React Application</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
