

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function AssignmentEditor() {
//     // State variables for form controls
//     const [assignmentName, setAssignmentName] = useState<string>('A1');
//     const [description, setDescription] = useState<string>('The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.');
//     const [points, setPoints] = useState<number>(100);
//     const [group, setGroup] = useState<string>('Group 1');
//     const [displayGradeAs, setDisplayGradeAs] = useState<string>('Percentage');
//     const [submissionType, setSubmissionType] = useState<string>('Online');
//     const [assignTo, setAssignTo] = useState<string>('Everyone');
//     const [dueDate, setDueDate] = useState<string>('2021-05-20');
//     const [availableFrom, setAvailableFrom] = useState<string>('2021-05-20');
//     const [availableUntil, setAvailableUntil] = useState<string>('2021-05-27');

//     return (
//         <div className="container mt-4">
//             {/* Assignment Name */}
//             <div className="mb-3">
//                 <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//                 <input
//                     id="wd-name"
//                     value={assignmentName}
//                     className="form-control"
//                     onChange={(e) => setAssignmentName(e.target.value)}
//                 />
//             </div>
//             {/* Assignment Description */}
//             <div className="mb-4">
//                 <label htmlFor="wd-description" className="form-label">Description</label>
//                 <textarea
//                     id="wd-description"
//                     className="form-control"
//                     rows={4}
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <div className="columns g-3 mb-3">
//                     <div className="wd-flex-row-container mb-3">
//                         <div className="col-md-2">
//                             <label htmlFor="wd-points" className="form-label">Points</label>
//                         </div>
//                         <div className="col-md-4 wd-flex-grow-1">
//                             <input
//                                 id="wd-points"
//                                 type="number"
//                                 value={points}
//                                 className="form-control"
//                                 onChange={(e) => setPoints(Number(e.target.value))}
//                             />
//                         </div>
//                     </div>
//                     <div className="wd-flex-row-container mb-3">
//                         <div className="col-md-2">
//                             <label htmlFor="wd-group" className="form-label">Group</label>
//                         </div>
//                         <div className="col-md-4 wd-flex-grow-1">
//                             <select
//                                 id="wd-group"
//                                 value={group}
//                                 className="form-control form-select"
//                                 onChange={(e) => setGroup(e.target.value)}
//                             >
//                                 <option>Group 1</option>
//                                 <option>Group 2</option>
//                                 <option>Group 3</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="wd-flex-row-container mb-3">
//                         <div className="col-md-2">
//                             <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
//                         </div>
//                         <div className="col-md-4 wd-flex-grow-1">
//                             <select
//                                 id="wd-display-grade-as"
//                                 value={displayGradeAs}
//                                 className="form-control form-select"
//                                 onChange={(e) => setDisplayGradeAs(e.target.value)}
//                             >
//                                 <option>Percentage</option>
//                                 <option>Letter Grade</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Submission Type */}
//             <div className="wd-flex-row-container mb-3">
//                 <div className="col-md-4">
//                     <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//                 </div>
//                 <div className="col-md-4 wd-flex-grow-1 border p-3">
//                     <div>
//                         <select
//                             id="wd-submission-type"
//                             value={submissionType}
//                             className="form-control form-select"
//                             onChange={(e) => setSubmissionType(e.target.value)}
//                         >
//                             <option>Online</option>
//                             <option>On Paper</option>
//                             <option>No Submission</option>
//                         </select>
//                     </div>


//                     {/* Online Entry Options */}
//                     <div className="mb-1">
//                         <label className="form-label fw-bold">Online Entry Options</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="wd-text-entry" />
//                         <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="wd-website-url" />
//                         <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="wd-media-recording" />
//                         <label className="form-check-label" htmlFor="wd-media-recording">Media Recording</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
//                         <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="wd-file-upload" />
//                         <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
//                     </div>
//                 </div>
//             </div>

//             {/* Assign to and Dates */}
//             <div className="wd-flex-row-container mb-3">
//                 <div className="col-md-6">
//                     <label htmlFor="wd-assign-to" className="form-label">Assign</label>
//                 </div>
//                 <div className="col-md-4 wd-flex-grow-1 border p-3">
//                     <div>
//                         <label htmlFor="wd-assign-to" className="form-label">Assign to</label>

//                         <input
//                             id="wd-assign-to"
//                             value={assignTo}
//                             className="form-control"
//                             onChange={(e) => setAssignTo(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <label htmlFor="wd-due-date" className="form-label">Due Date</label>
//                         <input
//                             type="date"
//                             id="wd-due-date"
//                             value={dueDate}
//                             className="form-control"
//                             onChange={(e) => setDueDate(e.target.value)}
//                         />
//                     </div>
//                     <div className="wd-flex-row-container mb-3">
//                         <div className="col-md-6">
//                             <label htmlFor="wd-available-from" className="form-label">Available From</label>
//                             <input
//                                 type="date"
//                                 id="wd-available-from"
//                                 value={availableFrom}
//                                 className="form-control"
//                                 onChange={(e) => setAvailableFrom(e.target.value)}
//                             />
//                         </div>
//                         <div className="col-md-6">
//                             <label htmlFor="wd-available-until" className="form-label">Available Until</label>
//                             <input
//                                 type="date"
//                                 id="wd-available-until"
//                                 value={availableUntil}
//                                 className="form-control"
//                                 onChange={(e) => setAvailableUntil(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <hr />

//             {/* Save and Cancel Buttons */}
//             <div className="d-flex justify-content-end mt-4">
//                 <button id="wd-cancel" className="btn btn-light me-2">Cancel</button>
//                 <button id="wd-save" className="btn btn-danger">Save</button>
//             </div>
//         </div>

//     );
// }



import { useNavigate, useLocation } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { pathname } = useLocation();
    const assignment_id = pathname.split("/").filter(Boolean).pop();
    const assignments = db.assignments;
    const navigate = useNavigate();

    return (
        <div id="wd-assignments-editor" className="container">
            {assignments
                .filter((assignment: any) => assignment._id === assignment_id)
                .map((assignment: any) => (
                <div className="mb-3" key={assignment._id}>
                    <label htmlFor={`wd-name-${assignment._id}`}>Assignment Name</label>
                    <input id={`wd-name-${assignment._id}`} className="form-control" value={assignment._id} />
                </div>
            ))}
            {/* Description */}
            <div className="mb-3">
                <label htmlFor="wd-description">Description</label>
                <textarea id="wd-description" className="form-control" rows={5}>
                    The assignment is available online
                    Submit a link to the landing page of your Web
                    application running on Netlify. The landing page should include the following:
                    Your full name and section links to each of the lab assignments Link to the
                    Kanbas application
                </textarea>
            </div>

            {/* Points */}
            <div className="row mb-3">
                <div className="col-md-3 text-end">
                    <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-9">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>


            {/* Assign Section */}
            <div className="row mb-3">
                <div className="col-md-3 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-md-9">
                    <div className="border p-3">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <input id="wd-assign-to" className="form-control" value="Everyone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date">Due</label>
                            <input
                                type="date"
                                name="due-date"
                                id="wd-due-date"
                                className="form-control"
                                defaultValue="2024-05-13"
                            />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from">Available from</label>
                                <input
                                    type="date"
                                    name="earliest-available-date"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue="2024-05-06"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until">Until</label>
                                <input
                                    type="date"
                                    name="latest-available-date"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue="2024-05-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Buttons */}
            <div className="float-end">
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
                <button className="btn btn-danger" onClick={() => navigate(-1)}>Save</button>
            </div>
        </div>
    );
}