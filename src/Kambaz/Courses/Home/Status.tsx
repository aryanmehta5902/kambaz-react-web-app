
import { Button } from 'react-bootstrap';
import { FaBan, FaCheckCircle, FaFileImport, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex flex-wrap mb-1">
        <Button variant="secondary" size="lg" className="w-50 pe-1 text-nowrap">
          <FaBan className="me-2 fs-5" /> Unpublish
        </Button>
        <Button variant="success" size="lg" className="w-50">
          <FaCheckCircle className="me-2 fs-5" /> Publish
        </Button>
      </div>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaFileImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaFileImport className="me-2 fs-5" /> Import from Commons
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaStream className="me-2 fs-5" /> View Course Stream
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaChartBar className="me-2 fs-5" /> New Analytics
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}
