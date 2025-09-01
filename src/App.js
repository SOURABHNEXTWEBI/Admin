import logo from './logo.svg';
import './App.css';
import AdminLogin from './components/AdminLogin';
import DeptLogin from './components/DeptLogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeptForm from './components/DeptForm';
import First from './components/First';
import AdminDashboard from './components/AdminDashboard';
import AddDepartmentHead from './components/AddDepartmentHead';
import DepartmentHeads from './components/DepartmenthHeads';
import DeptheadDashboard from './components/DeptheadDashboard';
import DeviceAssignedDashboard from './components/DeviceAssigned';

function App() {
  return (
    // <>
    //   <div><First /></div>
    //   <div><AdminLogin /></div>
    //   <div><AdminDashboard /></div>
    //   <div><AddDepartmentHead /></div>
    //   <div><DeptLogin /></div>
    //   <div><DeptForm /></div>
    //   <div><DepartmentHeads /></div>
    // </>

<>   
     <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<First />} />

         <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Other routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/department-heads" element={<DepartmentHeads />} />
        <Route path="/add-department-head" element={<AddDepartmentHead />} />


  <Route path="/dept-headlogin" element={<DeptLogin/>} />

    <Route path="/head-dashboard" element={<DeptheadDashboard />} />
         <Route path="/dept-form" element={<DeptForm/>} />
     <Route path="/device-assigned" element={<DeviceAssignedDashboard/>} />
        
      </Routes>
    </Router>
</>
  );
}

export default App;
