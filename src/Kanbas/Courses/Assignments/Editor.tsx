
// export default function AssignmentEditor() {
//     return (
//         <div id="wd-assignments-editor">
//             <label htmlFor="wd-name">Assignment Name</label>
//             <input id="wd-name" value="A1" /><br /><br />
//             <textarea id="wd-description">
//                 The assignment is available online Submit a link to the landing page of
//             </textarea>
//             <br />
//             <table>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-points">Points</label>
//                     </td>
//                     <td>
//                         <input id="wd-points" value={100} />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-group">Group</label>
//                     </td>
//                     <select id="wd-group">
//                         <option>Group 1</option>
//                         <option>Group 2</option>
//                         <option>Group 3</option>
//                     </select>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-display-grade-as">Display Grade As</label>
//                     </td>
//                     <td>
//                         <select id="wd-display-grade-as">
//                             <option>Percentage</option>
//                             <option>Letter Grade</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-submission-type">Submission Type</label>
//                     </td>
//                     <td>
//                         <select id="wd-submission-type">
//                             <option>Online</option>
//                             <option>On Paper</option>
//                             <option>No Submission</option>
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>    </td>
//                     <td align="left" valign="top">
//                         <label>Online Entry Options:</label><br />
//                         <input type="checkbox" name="check-entry" id="wd-text-entry" />
//                         <label htmlFor="wd-text-entry">Text Entry</label><br />
//                         <input type="checkbox" name="check-entry" id="wd-website-url" />
//                         <label htmlFor="wd-website-url">Website URL</label><br />
//                         <input type="checkbox" name="check-entry" id="wd-media-recording" />
//                         <label htmlFor="wd-media-recording">Media Recording</label><br />
//                         <input type="checkbox" name="check-entry" id="wd-student-annotation" />
//                         <label htmlFor="wd-student-annotation">Student Annotation</label><br />
//                         <input type="checkbox" name="check-entry" id="wd-file-upload" />
//                         <label htmlFor="wd-file-upload">File Upload</label><br />
//                     </td>
//                 </tr>
//                 <tr>
//                 </tr>
//                 <tr>
//                     <td align="right" valign="top">
//                         <label htmlFor="wd-assign-to">Assign</label>
//                     </td>
//                     <td align="left" valign="top">
//                         <label htmlFor="wd-assign-to">Assign to</label><br />
//                         <input id="wd-assign-to" value="Everyone" /><br />
//                         <br />
//                         <label htmlFor="wd-due-date">Due Date</label><br />
//                         <input type="date" id="wd-due-date" value="2021-05-20" /><br />
//                         <br />
//                         <td align="left" valign="top">
//                             <label htmlFor="wd-available-from">Available From</label><br />
//                             <input type="date" id="wd-available-from" value="2021-05-20" />
//                         </td>
//                         <td align="left" valign="top">
//                             <label htmlFor="wd-available-until">Available Until</label><br />

//                             <input type="date" id="wd-available-until" value="2021-05-27" />
//                         </td>
//                     </td>

//                 </tr>

//             </table>
//             <hr />
//             <table width="100%">
//                 <tr>
//                     <td align="right">
//                         <button id="wd-save">Save</button>
//                         <button id="wd-cancel">Cancel</button>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     );
// }



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function AssignmentEditor() {
//   return (
//     <div className="container mt-4">
//       {/* Breadcrumb */}
//       <div className="mb-4">
//         <h4>CS5610 SU1 24 MON/FRI</h4>
//       </div>

//       {/* Assignment Name */}
//       <div className="mb-3">
//         <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//         <input id="wd-name" value="A1" className="form-control" />
//       </div>

//       {/* Assignment Description */}
//       <div className="mb-4">
//         <label htmlFor="wd-description" className="form-label">Description</label>
//         <div className="border p-3 bg-light">
//           <p>The assignment is <span className="text-danger">available online</span></p>
//           <p>Submit a link to the landing page of your Web application running on <a href="#">Netlify</a>.</p>
//           <p>The landing page should include the following:</p>
//           <ul>
//             <li>Your full name and section</li>
//             <li>Links to each of the lab assignments</li>
//             <li>Link to the <a href="#">Kanbas</a> application</li>
//             <li>Links to all relevant source code repositories</li>
//           </ul>
//           <p>The <a href="#">Kanbas</a> application should include a link to navigate back to the landing page.</p>
//         </div>
//       </div>

//       {/* Points, Assignment Group, Display Grade As */}
//       <div className="row g-3 mb-3">
//         <div className="col-md-4">
//           <label htmlFor="wd-points" className="form-label">Points</label>
//           <input id="wd-points" value={100} className="form-control" />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="wd-group" className="form-label">Assignment Group</label>
//           <select id="wd-group" className="form-control">
//             <option>Assignments</option>
//             <option>Quizzes</option>
//             <option>Projects</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
//           <select id="wd-display-grade-as" className="form-control">
//             <option>Percentage</option>
//             <option>Letter Grade</option>
//             <option>Complete/Incomplete</option>
//           </select>
//         </div>
//       </div>

//       {/* Submission Type */}
//       <div className="row g-3 mb-3">
//         <div className="col-md-4">
//           <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//           <select id="wd-submission-type" className="form-control">
//             <option>Online</option>
//             <option>On Paper</option>
//             <option>No Submission</option>
//           </select>
//         </div>
//       </div>

//       {/* Online Entry Options */}
//       <div className="mb-3">
//         <label className="form-label">Online Entry Options</label>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="wd-text-entry" />
//           <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
//           <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="wd-media-recording" />
//           <label className="form-check-label" htmlFor="wd-media-recording">Media Recordings</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
//           <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="wd-file-upload" />
//           <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
//         </div>
//       </div>

//       {/* Assign to and Dates */}
//       <div className="row g-3 mb-3">
//         <div className="col-md-6">
//           <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
//           <input id="wd-assign-to" value="Everyone" className="form-control" />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="wd-due-date" className="form-label">Due</label>
//           <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
//         </div>
//       </div>

//       <div className="row g-3 mb-3">
//         <div className="col-md-6">
//           <label htmlFor="wd-available-from" className="form-label">Available From</label>
//           <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T00:00" />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="wd-available-until" className="form-label">Available Until</label>
//           <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-27T00:00" />
//         </div>
//       </div>

//       {/* Save and Cancel Buttons */}
//       <div className="d-flex justify-content-end mt-4">
//         <button id="wd-cancel" className="btn btn-light me-2">Cancel</button>
//         <button id="wd-save" className="btn btn-danger">Save</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
    // State variables for form controls
    const [assignmentName, setAssignmentName] = useState<string>('A1');
    const [description, setDescription] = useState<string>('The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.');
    const [points, setPoints] = useState<number>(100);
    const [group, setGroup] = useState<string>('Group 1');
    const [displayGradeAs, setDisplayGradeAs] = useState<string>('Percentage');
    const [submissionType, setSubmissionType] = useState<string>('Online');
    const [assignTo, setAssignTo] = useState<string>('Everyone');
    const [dueDate, setDueDate] = useState<string>('2021-05-20');
    const [availableFrom, setAvailableFrom] = useState<string>('2021-05-20');
    const [availableUntil, setAvailableUntil] = useState<string>('2021-05-27');

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
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="columns g-3 mb-3">
                    <div className="wd-flex-row-container mb-3">
                        <div className="col-md-2">
                            <label htmlFor="wd-points" className="form-label">Points</label>
                        </div>
                        <div className="col-md-4 wd-flex-grow-1">
                            <input
                                id="wd-points"
                                type="number"
                                value={points}
                                className="form-control"
                                onChange={(e) => setPoints(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="wd-flex-row-container mb-3">
                        <div className="col-md-2">
                            <label htmlFor="wd-group" className="form-label">Group</label>
                        </div>
                        <div className="col-md-4 wd-flex-grow-1">
                            <select
                                id="wd-group"
                                value={group}
                                className="form-control form-select"
                                onChange={(e) => setGroup(e.target.value)}
                            >
                                <option>Group 1</option>
                                <option>Group 2</option>
                                <option>Group 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="wd-flex-row-container mb-3">
                        <div className="col-md-2">
                            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                        </div>
                        <div className="col-md-4 wd-flex-grow-1">
                            <select
                                id="wd-display-grade-as"
                                value={displayGradeAs}
                                className="form-control form-select"
                                onChange={(e) => setDisplayGradeAs(e.target.value)}
                            >
                                <option>Percentage</option>
                                <option>Letter Grade</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submission Type */}
            <div className="wd-flex-row-container mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-4 wd-flex-grow-1 border p-3">
                    <div>
                        <select
                            id="wd-submission-type"
                            value={submissionType}
                            className="form-control form-select"
                            onChange={(e) => setSubmissionType(e.target.value)}
                        >
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>
                    </div>


                    {/* Online Entry Options */}
                    <div className="mb-1">
                        <label className="form-label fw-bold">Online Entry Options</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-media-recording" />
                        <label className="form-check-label" htmlFor="wd-media-recording">Media Recording</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                    </div>
                </div>
            </div>

            {/* Assign to and Dates */}
            <div className="wd-flex-row-container mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                </div>
                <div className="col-md-4 wd-flex-grow-1 border p-3">
                    <div>
                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>

                        <input
                            id="wd-assign-to"
                            value={assignTo}
                            className="form-control"
                            onChange={(e) => setAssignTo(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                        <input
                            type="date"
                            id="wd-due-date"
                            value={dueDate}
                            className="form-control"
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                    <div className="wd-flex-row-container mb-3">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label">Available From</label>
                            <input
                                type="date"
                                id="wd-available-from"
                                value={availableFrom}
                                className="form-control"
                                onChange={(e) => setAvailableFrom(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until" className="form-label">Available Until</label>
                            <input
                                type="date"
                                id="wd-available-until"
                                value={availableUntil}
                                className="form-control"
                                onChange={(e) => setAvailableUntil(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Save and Cancel Buttons */}
            <div className="d-flex justify-content-end mt-4">
                <button id="wd-cancel" className="btn btn-light me-2">Cancel</button>
                <button id="wd-save" className="btn btn-danger">Save</button>
            </div>
        </div>

    );
}

