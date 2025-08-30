// import React from "react";
// import { useForm } from "react-hook-form";
// import { Form, Button, Card } from "react-bootstrap";

// export default function DeptForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     alert(JSON.stringify(data, null, 2));
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card style={{ width: "25rem" }} className="shadow">
//         <Card.Header className="bg-primary text-white text-center">
//           <h5 className="mb-0">Department Form</h5>
//         </Card.Header>
//         <Card.Body>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             {/* Date */}
//             <Form.Group className="mb-3">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 {...register("date", { required: "Date is required" })}
//               />
//               {errors.date && (
//                 <p className="text-danger small">{errors.date.message}</p>
//               )}
//             </Form.Group>

//             {/* Employee Name */}
//             <Form.Group className="mb-3">
//               <Form.Label>Employee Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 {...register("name", { required: "Name is required" })}
//               />
//               {errors.name && (
//                 <p className="text-danger small">{errors.name.message}</p>
//               )}
//             </Form.Group>

//             {/* Device Name */}
//             <Form.Group className="mb-3">
//               <Form.Label>Device Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter device name"
//                 {...register("device", { required: "Device name is required" })}
//               />
//               {errors.device && (
//                 <p className="text-danger small">{errors.device.message}</p>
//               )}
//             </Form.Group>

//             {/* Working Status */}
//             <Form.Group className="mb-3">
//               <Form.Label>Working Status</Form.Label>
//               <Form.Select
//                 {...register("status", { required: "Select status" })}
//               >
//                 <option value="">Select status</option>
//                 <option value="Working">Working</option>
//                 <option value="Not Working">Not Working</option>
//               </Form.Select>
//               {errors.status && (
//                 <p className="text-danger small">{errors.status.message}</p>
//               )}
//             </Form.Group>

//             <div className="d-grid">
//               <Button type="submit" variant="primary">
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }











import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";

export default function DeptForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="shadow">
        {/* Clean header */}
        <Card.Header className="bg-primary text-white text-center">
          <h5 className="mb-0">Department Form</h5>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Date */}
            <Form.Group className="mb-3">
             
              <Form.Control
                type="date"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <p className="text-danger small">{errors.date.message}</p>
              )}
            </Form.Group>

            {/* Employee Name */}
            <Form.Group className="mb-3">
             
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-danger small">{errors.name.message}</p>
              )}
            </Form.Group>

            {/* Device Name */}
            <Form.Group className="mb-3">
             
              <Form.Control
                type="text"
                placeholder="Enter device name"
                {...register("device", { required: "Device name is required" })}
              />
              {errors.device && (
                <p className="text-danger small">{errors.device.message}</p>
              )}
            </Form.Group>

            {/* Working Status */}
            <Form.Group className="mb-3">
           
              <Form.Select
                {...register("status", { required: "Select status" })}
              >
                <option value="">Select status</option>
                <option value="Working">Working</option>
                <option value="Not Working">Not Working</option>
              </Form.Select>
              {errors.status && (
                <p className="text-danger small">{errors.status.message}</p>
              )}
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
