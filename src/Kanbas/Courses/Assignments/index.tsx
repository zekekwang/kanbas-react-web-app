import React, { useState } from 'react';

export default function Assignments() {
  // Sample data for assignments
  const assignments = [
    {
      id: '123',
      name: 'A1 - ENV + HTML',
      href: '#/Kanbas/Courses/1234/Assignments/123',
      modules: 'Multiple Modules',
      availability: 'Not available until May 6 at 12:00am',
      dueDate: 'May 13 at 11:59pm',
      points: 100,
    },
    {
      id: '124',
      name: 'A2 - CSS + BOOTSTRAP',
      href: '#/Kanbas/Courses/1234/Assignments/124',
      modules: 'Multiple Modules',
      availability: 'Not available until May 13 at 12:00am',
      dueDate: 'May 20 at 11:59pm',
      points: 100,
    },
    {
      id: '125',
      name: 'A3 - JAVASCRIPT + REACT',
      href: '#/Kanbas/Courses/1234/Assignments/125',
      modules: 'Multiple Modules',
      availability: 'Not available until May 20 at 12:00am',
      dueDate: 'May 27 at 11:59pm',
      points: 100,
    },
  ];

  // State to manage search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered list based on search term
  const filteredAssignments = assignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="wd-assignments">
      {/* Search input */}
      <div id="wd-header">
        <input
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      {/* Title */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button id="wd-add-button">+</button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <li key={assignment.id} className="wd-assignment-list-item">
              <a className="wd-assignment-link" href={assignment.href}>
                {assignment.name}
              </a>
              <div className="wd-assignment-details">
                {assignment.modules} | {assignment.availability} <br />
                <strong>Due {assignment.dueDate} | {assignment.points} pts</strong>
              </div>
            </li>
          ))
        ) : (
          <li>No assignments found</li>
        )}
      </ul>
    </div>
  );
}