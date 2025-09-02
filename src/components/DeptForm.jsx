import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";
import "../style/DeptForm.css";
import { useNavigate } from "react-router-dom"; 

export default function DeptForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Project Assigned Successfully:\n" );
  };

  return (
    <div className="deptform-container">
      <Card className="deptform-card shadow-lg">
        {/* Header */}
        <Card.Header className="deptform-header text-center">
          <h4 className="mb-0">Assign Project</h4>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="deptform-form">
            {/* Date */}
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Date</Form.Label>
              <Form.Control
                type="date"
                {...register("date", { required: "Date is required" })}
                className="form-input"
              />
              {errors.date && (
                <p className="text-danger small">{errors.date.message}</p>
              )}
            </Form.Group>

            {/* Employee Name */}
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter employee name"
                {...register("name", { required: "Employee name is required" })}
                className="form-input"
              />
              {errors.name && (
                <p className="text-danger small">{errors.name.message}</p>
              )}
            </Form.Group>

            {/* Device Name */}
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Device Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter device name"
                {...register("device", { required: "Device name is required" })}
                className="form-input"
              />
              {errors.device && (
                <p className="text-danger small">{errors.device.message}</p>
              )}
              {/* Department Name */}
            </Form.Group>
               <Form.Group className="mb-3">
              <Form.Label className="form-label">Department</Form.Label>
              <Form.Select
                {...register("status", { required: "Select status" })}
                className="form-input"
              >
                <option value="">Select Departmemt</option>
                <option value="Working">Front-End</option>
                <option value="Not Working">Back-End</option>
                <option value="Working">Ui/Ux</option>
                <option value="Not Working">Digital Marketing</option>
              </Form.Select>
              {errors.status && (
                <p className="text-danger small">{errors.status.message}</p>
              )}
            </Form.Group>
            {/* Working Status */}
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Working Status</Form.Label>
              <Form.Select
                {...register("status", { required: "Select status" })}
                className="form-input"
              >
                <option value="">Select status</option>
                <option value="Working">Working</option>
                <option value="Not Working">Not Working</option>
              </Form.Select>
              {errors.status && (
                <p className="text-danger small">{errors.status.message}</p>
              )}
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid">
              <Button type="submit" className="submit-btn" onClick={() => navigate('/head-dashboard')}>
                Assign Project
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
