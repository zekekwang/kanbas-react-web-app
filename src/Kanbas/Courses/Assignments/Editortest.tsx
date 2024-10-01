import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  // State variables for form controls
  const [assignmentName, setAssignmentName] = useState<string>('A1');
  const [points, setPoints] = useState<number>(100);
  const [group, setGroup] = useState<string>('Assignments');
  const [displayGradeAs, setDisplayGradeAs] = useState<string>('Percentage');
  const [submissionType, setSubmissionType] = useState<string>('Online');
  const [entryOptions, setEntryOptions] = useState({
    textEntry: false,
    websiteUrl: true,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUploads: false,
  });
  const [assignTo, setAssignTo] = useState<string>('Everyone');
  const [dueDate, setDueDate] = useState<string>('2024-05-13T23:59');
  const [availableFrom, setAvailableFrom] = useState<string>('2024-05-06T00:00');
  const [availableUntil, setAvailableUntil] = useState<string>('2024-05-27T00:00');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setEntryOptions(prevOptions => ({
      ...prevOptions,
      [id]: checked,
    }));
  };

  return (
    <div className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={assignmentName}
          className="form-control"
          onChange={(e) => setAssignmentName(e.target.value)}
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <div className="border p-3 bg-light">
          <p>The assignment is <span className="text-danger">available online</span></p>
          <p>Submit a link to the landing page of your Web application running on <a href="#">Netlify</a>.</p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the <a href="#">Kanbas</a> application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>The <a href="#">Kanbas</a> application should include a link to navigate back to the landing page.</p>
        </div>
      </div>

      {/* Points, Assignment Group, Display Grade As */}
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            type="number"
            value={points}
            className="form-control"
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select
            id="wd-group"
            value={group}
            className="form-control"
            onChange={(e) => setGroup(e.target.value)}
          >
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Projects</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select
            id="wd-display-grade-as"
            value={displayGradeAs}
            className="form-control"
            onChange={(e) => setDisplayGradeAs(e.target.value)}
          >
            <option>Percentage</option>
            <option>Letter Grade</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select
            id="wd-submission-type"
            value={submissionType}
            className="form-control"
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="mb-3 p-3 border">
        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="textEntry"
            checked={entryOptions.textEntry}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="websiteUrl"
            checked={entryOptions.websiteUrl}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="mediaRecordings"
            checked={entryOptions.mediaRecordings}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="studentAnnotation"
            checked={entryOptions.studentAnnotation}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="fileUploads"
            checked={entryOptions.fileUploads}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
        </div>
      </div>

      {/* Assign to and Dates */}
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input
            id="wd-assign-to"
            value={assignTo}
            className="form-control"
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input
            type="datetime-local"
            id="wd-due-date"
            value={dueDate}
            className="form-control"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="datetime-local"
            id="wd-available-from"
            value={availableFrom}
            className="form-control"
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            type="datetime-local"
            id="wd-available-until"
            value={availableUntil}
            className="form-control"
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button id="wd-cancel" className="btn btn-light me-2">Cancel</button>
        <button id="wd-save" className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
