// AssignedDevices.js

import React, { useState } from "react";
import "../style/DeviceAssignedDashboard.css"; // External CSS
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// Dummy data for assigned devices
const initialDevices = [
  {
    id: 1,
    employee: "Alice Johnson",
    department: "IT",
    device: "Laptop",
    dateAssigned: "2024-08-01",
    status: "Active",
  },
  {
    id: 2,
    employee: "Bob Williams",
    department: "HR",
    device: "Monitor",
    dateAssigned: "2024-07-20",
    status: "Inactive",
  },
  {
    id: 3,
    employee: "Charlie Lee",
    department: "Finance",
    device: "Phone",
    dateAssigned: "2024-08-10",
    status: "Active",
  },
  {
    id: 4,
    employee: "Diana Prince",
    department: "Operations",
    device: "Mouse",
    dateAssigned: "2024-06-15",
    status: "Inactive",
  },
];

const AssignedDevices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState(initialDevices);

  // Toggle status Active <-> Inactive
  const toggleStatus = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? {
            ...device,
            status: device.status === "Active" ? "Inactive" : "Active",
          }
          : device
      )
    );
  };

  return (
    <>



      {/* Title + Table Section */}
      <div className="assigned-devices-container">
          <h1 className="main-title">NextWebi Work Flow</h1>
        <h3 className="title">Assigned Project List</h3>
        
        <table className="assigned-devices-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Device</th>
              <th>Date Assigned</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id}>
                <td>{device.employee}</td>
                <td>{device.department}</td>
                <td>{device.device}</td>
                <td>{device.dateAssigned}</td>
                <td
                  className={
                    device.status === "Active"
                      ? "status-active"
                      : "status-inactive"
                  }
                >
                  {device.status}
                </td>
                <td>
                  <button
                    className={`btn-status ${device.status === "Active"
                        ? "btn-inactive"
                        : "btn-active"
                      }`}
                    onClick={() => toggleStatus(device.id)}
                  >
                    {device.status === "Active"
                      ? "Mark Not Working"
                      : "Mark Working"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-report mt-5" onClick={() => navigate
          ('/head-dashboard')
        }  > Move Back to Head Dashboard</button>

      </div>
    </>
  );
};

export default AssignedDevices;
