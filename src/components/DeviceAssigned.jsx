// AssignedDevices.js

import React from "react";
import "../style/DeviceAssignedDashboard.css"; // External CSS

// Dummy data for assigned devices
const assignedDevices = [
  { id: 1, employee: "Alice Johnson", department: "IT", device: "Laptop", dateAssigned: "2024-08-01", status: "Active" },
  { id: 2, employee: "Bob Williams", department: "HR", device: "Monitor", dateAssigned: "2024-07-20", status: "Inactive" },
  { id: 3, employee: "Charlie Lee", department: "Finance", device: "Phone", dateAssigned: "2024-08-10", status: "Active" },
  { id: 4, employee: "Diana Prince", department: "Operations", device: "Mouse", dateAssigned: "2024-06-15", status: "Inactive" }
];

const AssignedDevices = () => {
  return (
    <>
      <div className="logo-container">
        <img 
          src="https://nextwebi.com/assets/img/logo.png" 
          alt="Nextwebi Logo" 
          className="logo"
        />
      </div>

      <div className="assigned-devices-container">
        <h2>Assigned Project Details</h2>
        <table className="assigned-devices-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Device</th>
              <th>Date Assigned</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignedDevices.map((device) => (
              <tr key={device.id}>
                <td>{device.employee}</td>
                <td>{device.department}</td>
                <td>{device.device}</td>
                <td>{device.dateAssigned}</td>
                <td className={device.status === "Active" ? "status-active" : "status-inactive"}>
                  {device.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AssignedDevices;
