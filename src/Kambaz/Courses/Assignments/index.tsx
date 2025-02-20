import React from 'react';
import { Button, ListGroup, Form, Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import assignments from "../../Database/assignments.json"; // Import the JSON data
import RightSideAddition from "./RightSideAddition";
import LeftSideAddition from "./LeftSideAddition";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <Container id="wd-assignments">
      <Row className="justify-content-between my-3">
        <Col md={8}>
          <div className="position-relative">
            <FaSearch className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }} />
            <Form.Control
              type="text"
              placeholder="Search..."
              className="form-control"
              style={{ paddingLeft: "40px", height: "48px" }}
            />
          </div>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="secondary" className="me-2">
            <FaPlus /> Group
          </Button>
          <Button variant="danger">
            <FaPlus /> Assignment
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="d-flex justify-content-between align-items-center border rounded p-2 bg-light">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 text-muted" />
            <span className="fw-bold">ASSIGNMENTS</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3 bg-white px-2 py-1 rounded border">40% of Total</span>
            <Button variant="outline-secondary" size="sm">
              <IoAddSharp />
            </Button>
          </div>
        </Col>
      </Row>
      <ListGroup>
        {
          courseAssignments.map((assignment) => (
            <ListGroup.Item
              key={assignment._id}
              className="d-flex justify-content-between align-items-center p-3"
              style={{ borderLeft: "5px solid green" }}
            >
              <div className="d-flex align-items-center">
                <LeftSideAddition />
                <div className="ms-3">
                  <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-black">
                    {assignment.title}
                  </a>
                  <p className="text-muted mb-0" style={{ backgroundColor: "inherit" }}>
                    <span style={{ color: "red", fontStyle: "normal" }}> Multiple Modules </span> |
                    <b> Not Available</b> until May 6 at 12:00 am |<br />
                    <b>Due</b> May 13 at 11:59 pm | 100 pts
                  </p>
                </div>
              </div>
              <RightSideAddition />
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  );
}