import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentControlButtons from './AssignmentControlButtons';
import { MdAssignmentAdd } from "react-icons/md";


import AssignmentsControls from './AssignmentsControls';

export default function Assignments() {
  // Sample data for assignments
  const assignments = [
    {
      id: '123',
      name: 'A1',
      href: '#/Kanbas/Courses/1234/Assignments/123',
      modules: 'Multiple Modules',
      availability: 'Not available until May 6 at 12:00am',
      dueDate: 'May 13 at 11:59pm',
      points: 100,
    },
    {
      id: '124',
      name: 'A2',
      href: '#/Kanbas/Courses/1234/Assignments/124',
      modules: 'Multiple Modules',
      availability: 'Not available until May 13 at 12:00am',
      dueDate: 'May 20 at 11:59pm',
      points: 100,
    },
    {
      id: '125',
      name: 'A3',
      href: '#/Kanbas/Courses/1234/Assignments/125',
      modules: 'Multiple Modules',
      availability: 'Not available until May 20 at 12:00am',
      dueDate: 'May 27 at 11:59pm',
      points: 100,
    },
  ];
  // State to manage collapse
  const [isOpen, setIsOpen] = useState(false);

  // Toggle expand/collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // State to manage search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered list based on search term
  const filteredAssignments = assignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="wd-assignments">
      {/* Search input */}
      {/* The Search for Assignment text field must render as shown including the placeholder text, the magnifying glass, and justified to the left. */}

      {/* <div id="wd-header">
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div> */}
      <AssignmentsControls />


      {/* Title */}
      {/* <h3 id="wd-assignments-title">
      <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS 40% of Total <button id="wd-add-button">+</button>
      </h3> */}

      <div className="container mt-1">
        {/* Assignments Header */}
        <div className="d-flex justify-content-between align-items-center p-3 bg-light" style={{ cursor: 'pointer' }} onClick={toggleCollapse}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            {isOpen ? <BsChevronDown className="me-2" /> : <BsChevronRight className="me-2" />}
            <h5 className="mb-0">ASSIGNMENTS</h5>
          </div>
          <div className="d-flex align-items-center">
            <span className="badge bg-light text-dark me-2">40% of Total</span>
            <BsGripVertical className="me-2 fs-3" />
          </div>
        </div>

        {/* Assignment List */}
        <ul id="wd-assignment-list">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              // <li key={assignment.id} className="wd-assignment-list-item p-0 mb-5 fs-5 border-gray">
              //   <a className="wd-assignment-link" href={assignment.href}>
              //     {assignment.name}
              //   </a>
              //   <div className="wd-assignment-details">
              //     {assignment.modules} | {assignment.availability} <br />
              //     <strong>Due {assignment.dueDate} | {assignment.points} pts</strong>
              //   </div>
              // </li>
              <div className={`collapse ${isOpen ? 'show' : ''}`}>
                <div className="list-group">
                  {/* Assignment 1 */}
                  <div className="list-group-item d-flex align-items-center justify-content-between border-bottom wd-assignment">
                    <div className="d-flex align-items-center">
                      {/* Green left border for active assignments */}
                      <div className="border-start border-success border-2 me-2" style={{ height: '100%' }}></div>
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignmentAdd className="me-2 fs-3" />
                      <div>
                        <a className="wd-assignment-link" href={assignment.href}>
                          {assignment.name}
                        </a>
                        <p className="mb-0 text-muted">
                          <span className="text-danger">{assignment.modules}</span> | {assignment.availability}
                        </p>
                        <p className="mb-0 text-muted"><strong>Due {assignment.dueDate} | {assignment.points} pts</strong></p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      {/* <BsCheckCircle className="text-success me-3" size="24" /> */}

                      <AssignmentControlButtons />
                    </div>
                  </div>

                  {/* Assignment 2 */}
                  {/* <div className="list-group-item d-flex align-items-center justify-content-between border-bottom wd-assignment">
                    <div className="d-flex align-items-center">
                      <div className="border-start border-success border-3 me-3" style={{ height: '100%' }}></div>
                      <div>
                        <h6 className="mb-1">A2</h6>
                        <a className="wd-assignment-link" href={assignment.href}>
                          {assignment.name}
                        </a>
                        <p className="mb-0 text-muted">
                          <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am
                        </p>
                        <p className="mb-0 text-muted">Due May 20 at 11:59pm | 100 pts</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">

                      <AssignmentControlButtons />
                    </div>
                  </div> */}

                  {/* Assignment 3 */}
                  {/* <div className="list-group-item d-flex align-items-center justify-content-between border-bottom wd-assignment">
                    <div className="d-flex align-items-center">
                      <div className="border-start border-success border-3 me-3" style={{ height: '100%' }}></div>
                      <div>
                        <h6 className="mb-1">A3</h6>
                        <a className="wd-assignment-link" href={assignment.href}>
                          {assignment.name}
                        </a>
                        <p className="mb-0 text-muted">
                          <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am
                        </p>
                        <p className="mb-0 text-muted">Due May 27 at 11:59pm | 100 pts</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">

                      <AssignmentControlButtons />
                    </div>
                  </div> */}
                </div>
              </div>
            )
            )
          ) : (
            <li>No assignments found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

