
import { Button, Form, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export default function AssignmentEditor() {
  return (
    <Container className="mt-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-4">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

      
        <FormControl as="textarea" rows={15} defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify." />          
          
          
          
        

        {/* Points */}
        <Form.Group className="mb-4">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-4">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>Reference Material</option>
            <option>PPTs</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade as */}
        <Form.Group className="mb-4">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>GPA</option>
            <option>Decimal</option>
          </Form.Select>
        </Form.Group>


          <Form.Label>Submission Type</Form.Label>
  

        {/* Online Entry Options */}
        <Form.Group className="mb-4">
          <div className="border rounded p-3">
          <Form.Select defaultValue="Online" className="mb-4">
            <option>Online</option>
            <option>Offline</option>
          </Form.Select>
            <p style={{ backgroundColor: 'white',color:'black' }} className="fw-bold mb-3">Online Entry Options</p>
            <Form.Check type="checkbox" label="Text Entry" className="mb-2" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked className="mb-2" />
            <Form.Check type="checkbox" label="Media Recordings" className="mb-2" />
            <Form.Check type="checkbox" label="Student Annotation" className="mb-2" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        {/* Assign Section */}
        <Form.Label>Assign</Form.Label>
        <Form.Group className="mb-4">
          <div className="border rounded p-3">
            <p className="fw-bold mb-3" style={{ backgroundColor: 'white', color:'black' }}>Assign to</p>
            
            {/* Assign to */}
            <Form.Group className="mb-3">
              <div className="border rounded p-2 d-flex justify-content-between align-items-center">
                <span>Everyone</span>
                <FaTimes className="text-muted" />
              </div>
            </Form.Group>

            {/* Due Date */}
            <Form.Group className="mb-3">
              <Form.Label>Due</Form.Label>
              <InputGroup>
                <Form.Control
                  type="datetime-local"
                  defaultValue="2024-05-13T23:59"
                />
                <InputGroup.Text>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Available from/until */}
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Available from</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="datetime-local"
                      defaultValue="2024-05-06T12:01"
                    />
                    <InputGroup.Text>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Until</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="datetime-local"
                    />
                    <InputGroup.Text>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Form.Group>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button variant="light">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </Container>
  );
}