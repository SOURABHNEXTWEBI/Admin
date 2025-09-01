import React from 'react'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // ✅ (Optional: Add your login validation logic here)

    // Navigate to admin dashboard
    navigate("/admin-dashboard");
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col>
            <Card className="p-4 shadow rounded" style={{ maxWidth: "350px" }}>
              <Card.Body>
                {/* Title */}
                <h4 className="text-center mb-4 fw-semibold">Admin Login</h4>

                {/* Form */}
                <Form onSubmit={handleSubmit}>
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 text-uppercase"
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminLogin
