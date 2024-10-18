// import React, { useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import { BsGripVertical } from "react-icons/bs";
// import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
// import GreenCheckmark from './GreenCheckmark';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AssignmentControlButtons from './AssignmentControlButtons';
// import { MdAssignmentAdd } from "react-icons/md";


// import AssignmentsControls from './AssignmentsControls';

// export default function Assignments() {
//   // Sample data for assignments
//   const assignments = [
//     {
//       id: '123',
//       name: 'A1',
//       href: '#/Kanbas/Courses/1234/Assignments/123',
//       modules: 'Multiple Modules',
//       availability: 'Not available until May 6 at 12:00am',
//       dueDate: 'May 13 at 11:59pm',
//       points: 100,
//     },
//     {
//       id: '124',
//       name: 'A2',
//       href: '#/Kanbas/Courses/1234/Assignments/124',
//       modules: 'Multiple Modules',
//       availability: 'Not available until May 13 at 12:00am',
//       dueDate: 'May 20 at 11:59pm',
//       points: 100,
//     },
//     {
//       id: '125',
//       name: 'A3',
//       href: '#/Kanbas/Courses/1234/Assignments/125',
//       modules: 'Multiple Modules',
//       availability: 'Not available until May 20 at 12:00am',
//       dueDate: 'May 27 at 11:59pm',
//       points: 100,
//     },
//   ];
//   // State to manage collapse
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle expand/collapse
//   const toggleCollapse = () => {
//     setIsOpen(!isOpen);
//   };

//   // State to manage search input
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered list based on search term
//   const filteredAssignments = assignments.filter((assignment) =>
//     assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div id="wd-assignments">
//       <AssignmentsControls />


//       <div className="container mt-1">
//         {/* Assignments Header */}
//         <div className="d-flex justify-content-between align-items-center p-3 bg-light" style={{ cursor: 'pointer' }} onClick={toggleCollapse}>
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             {isOpen ? <BsChevronDown className="me-2" /> : <BsChevronRight className="me-2" />}
//             <h5 className="mb-0">ASSIGNMENTS</h5>
//           </div>
//           <div className="d-flex align-items-center">
//             <span className="badge bg-light text-dark me-2">40% of Total</span>
//             <BsGripVertical className="me-2 fs-3" />
//           </div>
//         </div>

//         {/* Assignment List */}
//         <ul id="wd-assignment-list">
//           {filteredAssignments.length > 0 ? (
//             filteredAssignments.map((assignment) => (
//               <div className={`collapse ${isOpen ? 'show' : ''}`}>
//                 <div className="list-group">
//                   {/* Assignment 1 */}
//                   <div className="list-group-item d-flex align-items-center justify-content-between border-bottom wd-assignment">
//                     <div className="d-flex align-items-center">
//                       {/* Green left border for active assignments */}
//                       <div className="border-start border-success border-2 me-2" style={{ height: '100%' }}></div>
//                       <BsGripVertical className="me-2 fs-3" />
//                       <MdAssignmentAdd className="me-2 fs-3" />
//                       <div>
//                         <a className="wd-assignment-link" href={assignment.href}>
//                           {assignment.name}
//                         </a>
//                         <p className="mb-0 text-muted">
//                           <span className="text-danger">{assignment.modules}</span> | {assignment.availability}
//                         </p>
//                         <p className="mb-0 text-muted"><strong>Due {assignment.dueDate} | {assignment.points} pts</strong></p>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       {/* <BsCheckCircle className="text-success me-3" size="24" /> */}

//                       <AssignmentControlButtons />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//             )
//           ) : (
//             <li>No assignments found</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }


import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import {FaCaretDown} from "react-icons/fa";
import {FaRegEdit} from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentControlButtons from './AssignmentControlButtons';
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
      <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="input-group" style={{ width: "250px" }}>
                  <span className="input-group-text bg-light">
                      <CiSearch />
                  </span>
                  <input
                      type="text"
                      id="wd-assignment-search"
                      className="form-control"
                      placeholder="Search..."
                  />
              </div>

              <div className="d-flex">
                  <button id = "wd-assignment-group" className="btn btn-outline-dark btn-lg me-2"
                      style={{ backgroundColor: '#f1f2f3', color: 'black' }}>
                      <FaPlus className="position-relative me-2" /> 
                      Group
                  </button>
                  <button id="wd-assignment-add" className="btn btn-lg btn-danger me-2">
                      <FaPlus className="position-relative me-2"/> 
                      Assignment
                  </button>
              </div>
          </div>

          <ul id="wd-assignments" className="list-group rounded-0">
              <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-white">
                  <div className="wd-title p-3 ps-2" style={{ backgroundColor: '#f1f2f3' }}>
                      <BsGripVertical className="me-2 fs-3" />
                      <FaCaretDown className="me-2 fs-3"/>
                      ASSIGNMENTS
                      <AssignmentControlButtons />
                  </div>

                  <ul id="wd-assignment" className="list-group rounded-0">
                      {assignments
                      .filter((assignment: any) => assignment.course === cid)
                      .map((assignment: any) => (
                          <li className="wd-lesson list-group-item p-3 ps-1
                              d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center me-3">
                                  <BsGripVertical className="me-2 fs-3" />
                                  <FaRegEdit className="me-3 fs-4" />
                              </div>
                              <Link className="wd-assignment-link text-dark text-decoration-none"
                                  to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                                  <div className="d-flex flex-column">
                                      <span>{assignment._id}</span>
                                      <span className="text-danger">
                                          {assignment.title}
                                          <span className="text-dark fw-bold mx-2">|</span>
                                          <span className="fw-bold text-dark">Not available until </span>
                                          <span className="text-dark">May 6 at 12:00am</span>
                                          <span className="text-dark fw-bold mx-2">|</span>
                                      </span>
                                      <span>
                                          <span className="fw-bold text-dark">Due </span>
                                          <span className="text-dark">May 13 at 11:59pm</span>
                                          <span className="text-dark fw-bold mx-2">|</span>
                                          <span>100 pts</span>
                                      </span>
                                  </div>
                              </Link>
                          <LessonControlButtons />
                          </li>
                      ))}
                  </ul>
              </li>
          </ul>
      </div>
  );
}
