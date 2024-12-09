// import { FaPlus } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "./LessonControlButtons";
// import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { GiNotebook } from "react-icons/gi";

// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteAssignment } from "./reducer";
// import { setAssignment } from "./reducer";

// import ProtectedContent from "../../Account/ProtectedContent";

// import { useEffect } from "react";
// import * as assignmentsClient from "./client";

// export default function Assignments() {
//     const { cid } = useParams();
//     const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const role = currentUser ? currentUser.role : null;

//     const fetchAssignments = async () => {
//         const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
//         dispatch(setAssignment(assignments));
//     }

//     // const removeAssignment = async (assignmentId: string) => {
//     //     await assignmentsClient.deleteAssignment(assignmentId);
//     //     fetchAssignments();
//     // }

//     useEffect(() => {
//         fetchAssignments();
//     }, [cid]);

//     // const handleDeleteAssignment = (assignmentId: string) => {
//     //     const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
//     //     if (confirmDelete) {
//     //         dispatch(deleteAssignment(assignmentId));
//     //     }
//     // };

//     //delete assignment
//     const removeAssignment = async (assignmentId: string) => {
//         console.log("Deleting assignment with ID:", assignmentId);
//         await assignmentsClient.deleteAssignment(assignmentId);
//         dispatch(deleteAssignment(assignmentId));
//     };

//     return (
//         <div id="wd-assignments-controls" className="p-3">


//             <div className="search-and-buttons-container mb-4 d-flex justify-content-between">
//                 <div className="search-container d-flex align-items-center">
//                     <CiSearch className="search-icon me-2" />
//                     <input type="text" className="search-input form-control" placeholder="Search..." />
//                 </div>
//                 <ProtectedContent><div className="button-group">
//                     <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1"><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Group</button>
//                     <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Assignment</button>
//                 </div></ProtectedContent>
//             </div>


//             <ul id="wd-assignments" className="list-group rounded-0">
//                 <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center fw-bold">
//                             <BsGripVertical className="me-2 fs-3" />
//                             <MdOutlineArrowDropDown className="me-2 fs-3" />
//                             ASSIGNMENTS
//                         </div>
//                         {(role === "FACULTY"|| role === "ADMIN") && <AssignmentTitleControlButtons />}
//                     </div>

//                     <ul className="wd-assignment-list list-group rounded-0">
//                         {assignments
//                             // .filter((assignment: any) => assignment.course === cid)
//                             .map((assignment: any) => (
//                                 <li className="wd-assignment-list-item list-group-item p-3 ps-1">
//                                     <div className="d-flex align-items-center">
//                                         <BsGripVertical className="me-3 fs-3" />
//                                         <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
//                                         <div className="flex-grow-1">
//                                             {currentUser.role === "FACULTY" ? (
//                                                 <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
//                                                     {assignment.title}
//                                                 </Link>
//                                             ) : (
//                                                 <strong>{assignment.title}</strong>
//                                             )}
//                                             <br />
//                                             <span className="red-text">Multiple Modules</span> | <span className="bold-darkgray-text">Not available until</span> {assignment.available} |<br />
//                                             <span className="bold-darkgray-text">Due</span> {assignment.due} | {assignment.points} pts
//                                         </div>
//                                         <ProtectedContent><LessonControlButtons assignmentId={assignment._id}
//                                             // deleteAssignment={() => handleDeleteAssignment(assignment._id)}/>
//                                             deleteAssignment={() => removeAssignment(assignment._id)} />
//                                         </ProtectedContent>
//                                     </div>
//                                 </li>
//                             ))}
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAssignment, updateAssignment } from './reducer';
// import * as assignmentsClient from "./client";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams<{ cid: string; aid?: string }>();
//   const courseId = cid!;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // get the current user
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const role = currentUser ? currentUser.role : null;

//   // call the useSelector hook to get the assignments
//   const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
//   const existingAssignment = assignments.find((a: any) => a._id === aid);

//   const [title, setTitle] = useState(existingAssignment ? existingAssignment.title : '');
//   const [description, setDescription] = useState(existingAssignment ? existingAssignment.description : '');
//   const [points, setPoints] = useState(existingAssignment ? existingAssignment.points : 100);
//   const [dueDate, setDueDate] = useState(existingAssignment ? existingAssignment.dueDate : '');
//   const [availableFrom, setAvailableFrom] = useState(existingAssignment ? existingAssignment.availableFrom : '');
//   const [availableUntil, setAvailableUntil] = useState(existingAssignment ? existingAssignment.availableUntil : '');

//   useEffect(() => {
//     if (existingAssignment) {
//       setTitle(existingAssignment.title);
//       setDescription(existingAssignment.description);
//       setPoints(existingAssignment.points);
//       setDueDate(existingAssignment.dueDate);
//       setAvailableFrom(existingAssignment.availableFrom);
//       setAvailableUntil(existingAssignment.availableUntil);
//     }
//   }, [existingAssignment]);

//   // // if the user is not a faculty member, redirect to the assignments page
//   // if (role !== "FACULTY") {
//   //   return <Navigate to={`/Kanbas/Courses/${courseId}/Assignments`} />;
//   // }

//   // handle the save button click
//   const handleSave = async () => {
//     //update the existing assignment
//     if (existingAssignment) {
//       const updatedAssignment = {
//         _id: existingAssignment._id,
//         course: courseId,
//         title,
//         description,
//         points,
//         dueDate,
//         availableFrom,
//         availableUntil,
//       };
//     await assignmentsClient.updateAssignment(updatedAssignment);
//     dispatch(updateAssignment(updatedAssignment));
//     } else {
//       // create a new assignment
//       const newAssignment = {
//         title,
//         description,
//         points,
//         dueDate,
//         availableFrom,
//         availableUntil,
//         course: courseId,
//       };
//       const createdAssignment = await assignmentsClient.createAssignmentForCourse(courseId, newAssignment);
//       dispatch(addAssignment(createdAssignment));
//     }
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };

//   return (
//     <div id="wd-assignments-editor" className="container mt-4">
//       {/* Assignment Name */}
//       <label htmlFor="wd-name" className="form-label">
//         <h5>{title || "Assignment name"}</h5> 
//       </label>
//       <input
//         id="wd-name"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="New Assignment"
//         className="form-control mb-4"
//         readOnly = {role !== "FACULTY" && role !== "ADMIN"}
//       />

//       {/* Assignment Description */}
//       <label htmlFor="wd-description" className="form-label">
//         <h5>Description</h5>
//       </label>
//       <textarea
//         id="wd-description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="form-control mb-4"
//         placeholder="New Assignment Description"
//         style={{ height: 'auto', whiteSpace: 'pre-wrap' }}
//         readOnly = {role !== "FACULTY" && role !== "ADMIN"}
//       />


//       {/* Assignment Points */}
//       <div className="row mb-3">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-points" className="form-label">
//             Points
//           </label>
//         </div>
//         <div className="col-md-9">
//           <input
//             id="wd-points"
//             type="number"
//             value={points}
//             onChange={(e) => setPoints(Number(e.target.value))}
//             className="form-control mb-3"
//             readOnly = {role !== "FACULTY" && role !== "ADMIN"}
//           />
//         </div>
//       </div>

//       {/* Assign Dates */}
//       <div className="row mb-4">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-assign-to" className="form-label">
//             Assign
//           </label>
//         </div>
//         <div className="col-md-9">
//           <div className="border p-3 rounded">
//             <div className="mb-3">
//               <label htmlFor="wd-due-date" className="form-label">
//                 Due
//               </label>
//               <input
//                 id="wd-due-date"
//                 type="datetime-local"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//                 readOnly = {role !== "FACULTY" && role !== "ADMIN"}
//                 className="form-control"
//               />
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="wd-available-from" className="form-label">
//                   Available from
//                 </label>
//                 <input
//                   id="wd-available-from"
//                   type="datetime-local"
//                   value={availableFrom}
//                   onChange={(e) => setAvailableFrom(e.target.value)}
//                   className="form-control"
//                   readOnly = {role !== "FACULTY" && role !== "ADMIN"}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="wd-available-until" className="form-label">
//                   Until
//                 </label>
//                 <input
//                   id="wd-available-until"
//                   type="date"
//                   value={availableUntil}
//                   onChange={(e) => setAvailableUntil(e.target.value)}
//                   className="form-control"
//                   readOnly = {role !== "FACULTY" && role !== "ADMIN"} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr />

//       {/* Action Buttons */}
//       <div className="text-end mt-3">
//         <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary me-2">
//           Cancel
//         </Link>
//         <button onClick={handleSave} className="btn btn-success">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }




import { useParams } from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButton from "./AssignmentsControlButton";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentItem from "./AssignmentItem";
import { useEffect } from "react";
import * as assignmentsClient from "./client";
import { setAssignments, deleteAssignment } from "./reducer";

export default function Assignments() {
  // use the useParams hook to get the course id
  // const { cid } = useParams();
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ); // get the assignments from the store
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;
  

  // get the assignments for the course
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  //delete assignment
  const removeAssignment = async (assignmentId: string) => {
    console.log("Deleting assignment with ID:", assignmentId); //debugging!!
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="container">
      {/* Assignments Controls bar */}
      <AssignmentsControls /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            {(role === "FACULTY"|| role === "ADMIN") && <AssignmentsControlButton />}
          </div>

          <ul id="wd-assignments-list" className="list-group rounded-0">
            {/* dynamically render the assignments */}
            {assignments.map((assignment: any) => (
              <AssignmentItem
                key={assignment._id}
                id={assignment._id} 
                title={assignment.title}
                modules="Multiple Modules"
                availability="To be defined"  
                dueDate="To be defined"        
                points={assignment.points || "100"}     
                link={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                // link={`/Kanbas/Courses/${cid}/Assignments/Editor`}
                deleteAssignment={removeAssignment}
              />
            ))}
          </ul>
        </li>
      </ul>

    </div>
  );
}