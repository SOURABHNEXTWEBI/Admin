// DepartmentHeads.js
import React from "react";
import "../style/DepartmentHeads.css";
import { useNavigate } from "react-router-dom";

// Dummy data for department heads with email
const departmentHeads = [
  { id: 1, department: "Front-End", headName: "John Doe", email: "johndoe@company.com" },
  { id: 2, department: "Back-End", headName: "Sarah Smith", email: "sarahsmith@company.com" },
  { id: 3, department: "Ui/UX", headName: "Michael Brown", email: "michaelbrown@company.com" },
  { id: 4, department: "Digital-Marketing", headName: "Emily Davis", email: "emilydavis@company.com" },
];

const DepartmentHeads = () => {
  const navigate = useNavigate();
  return (
    <div className="dept-heads-wrapper">
     
     

      {/* Title Section */}
      <div className="page-header">
        <h1 className="main-title">NextWebi Work Flow</h1>
        <h2 className="sub-title">Departments Head List</h2>
      </div>

      {/* Table Section */}
      <div className="department-heads-container">
        <table className="department-heads-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Head of Department</th>
              <th>Email</th>
              <th className="action-col">Report</th>
            </tr>
          </thead>
          <tbody>
            {departmentHeads.map((head) => (
              <tr key={head.id}>
                <td>{head.department}</td>
                <td>{head.headName}</td>
                <td>
                  <a href={`mailto:${head.email}`} className="email-link">
                    {head.email}
                  </a>
                </td>
                <td>
                  <button className="btn-report">View Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <button className="btn-report mt-5" onClick={()=>navigate
('/admin-dashboard')
       }  > Move Back to Admin Dashboard</button>
    </div>
  );
};

export default DepartmentHeads;
