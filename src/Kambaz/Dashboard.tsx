import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const courses = [
    { id: 1234, title: "React JS", image: "/images/reactjs.jpg", description: "Full Stack software developer" },
    { id: 1235, title: "Node JS", image: "/images/node.png", description: "Backend development" },
    { id: 1236, title: "Angular JS", image: "/images/angular.png", description: "Frontend framework" },
    { id: 1237, title: "Flask", image: "/images/flask.png", description: "Python web framework" },
    { id: 1238, title: "JavaScript", image: "/images/JavaS.png", description: "Web development" },
    { id: 1239, title: "Next JS", image: "/images/next.png", description: "React framework" },
    { id: 1240, title: "Python", image: "/images/python.png", description: "General programming" }
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <Row xs={1} md={4}  className="g-4">
        {courses.map(course => (
          <Col key={course.id} className="wd-dashboard-course">
            <Card className="h-100">
              <Link to={`/Kambaz/Courses/${course.id}/Home`}
                    className="text-decoration-none text-dark">
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
