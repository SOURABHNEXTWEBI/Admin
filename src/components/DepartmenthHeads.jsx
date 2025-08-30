// DepartmentHeads.js

import React from 'react';

import '../style/DepartmentHeads.css';
// Assuming you are styling with an external CSS file

// Dummy data for department heads with email
const departmentHeads = [
  { id: 1, department: 'Monitor', headName: 'John Doe', email: 'johndoe@company.com' },
  { id: 2, department: 'Phone', headName: 'Sarah Smith', email: 'sarahsmith@company.com' },
  { id: 3, department: 'Mouse', headName: 'Michael Brown', email: 'michaelbrown@company.com' },
  { id: 4, department: 'Laptop', headName: 'Emily Davis', email: 'emilydavis@company.com' }
];

const DepartmentHeads = () => {
  return (
    <>
      <div className="logo-container">
        <img 
          src="https://imgs.search.brave.com/aQP3fLJv8taV9V8Nj-JloDm9pQfmpdUDP4tPjfOWzhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy9pbWFn/ZXMvY29tcGFuaWVz/LzgwODE2NWRlZjQz/ZC1VbnRpdGxlZGRl/c2lnbjE1LTE2MjAy/ODQzNTQ1OTIucG5n/P2ZtPWF1dG8mYXI9/MToxJm1vZGU9Zmls/bCZmaWxsPXNvbGlk/JmZpbGwtY29sb3I9/ZmZmJmZvcm1hdD1h/dXRvJnc9Mzg0JnE9/NzU"
          alt="Logo"
          className="logo" 
        />
      </div>
      
      <div className="department-heads-container">
        <h2>Department Heads</h2>
        <table className="department-heads-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Head of Department</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departmentHeads.map((head) => (
              <tr key={head.id}>
                <td>{head.department}</td>
                <td>{head.headName}</td>
                <td>
                  <a href={`mailto:${head.email}`} className="email-link">{head.email}</a>
                </td>
                <td>
                  <button className="btn-report">View Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DepartmentHeads;
