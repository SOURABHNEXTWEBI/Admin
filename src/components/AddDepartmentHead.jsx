import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/AddDepartmentHead.css";

export default function AddDepartmentHead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const departments = ["Monitor", "CPU", "Phone", "Mouse"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.department) newErrors.department = "Select a department";

    return newErrors;
  };

  const handleAdd = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Department Head account created successfully.");
      navigate("/admin-dashboard");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="add-dept-container">
      <div className="form-card">
        <h1 className="form-title">Add Department Head</h1>
        <p className="form-subtitle">
          Fill in the details below to create a department head account.
        </p>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "input error" : "input"}
            placeholder="Enter full name"
          />
          {errors.name && <small className="error-text">{errors.name}</small>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "input error" : "input"}
            placeholder="Enter email"
          />
          {errors.email && (
            <small className="error-text">{errors.email}</small>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? "input error" : "input"}
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <small className="error-text">{errors.phone}</small>
          )}
        </div>

        {/* City */}
        <div className="form-group">
          <label>City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={errors.city ? "input error" : "input"}
            placeholder="Enter city"
          />
          {errors.city && <small className="error-text">{errors.city}</small>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? "input error" : "input"}
            placeholder="Enter password"
          />
          {errors.password && (
            <small className="error-text">{errors.password}</small>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={errors.confirmPassword ? "input error" : "input"}
            placeholder="Re-enter password"
          />
          {errors.confirmPassword && (
            <small className="error-text">{errors.confirmPassword}</small>
          )}
        </div>

        {/* Department */}
        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className={errors.department ? "input error" : "input"}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <small className="error-text">{errors.department}</small>
          )}
        </div>

        {/* Submit */}
        <div className="button-group">
          <button onClick={handleAdd} className="btn btn-primary">
            Add as Head
          </button>
        </div>
      </div>
    </div>
  );
}
