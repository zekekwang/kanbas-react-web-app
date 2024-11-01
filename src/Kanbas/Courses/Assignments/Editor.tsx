

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
import { RxCross2 } from "react-icons/rx";
import { useParams} from "react-router";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function AssignmentEditor() {
    // const { pathname } = useLocation();
    // const assignment_id = pathname.split("/").filter(Boolean).pop();
    // const assignments = db.assignments;
    // const navigate = useNavigate();
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const assignment = useSelector((state: any) => 
        state.assignmentsReducer.assignments.find((a: any) => a.course === cid && a._id === aid)
    );

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [available, setAvailable] = useState('');
    const [due, setDue] = useState('');
    const [until, setUntil] = useState('');

    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title || '');
            setDescription(assignment.description || '');
            setPoints(assignment.points || '');
            setAvailable(assignment.available || '');
            setDue(assignment.due || '');
            setUntil(assignment.until || '');
        }
    }, [assignment]);

    const handleSave = () => {
        const updatedAssignment = {
            ...assignment,
            course: cid,
            title,
            description,
            points,
            available,
            due,
            until,
        };
        if (assignment) {
            dispatch(updateAssignment(updatedAssignment));
        } else {
            dispatch(addAssignment(updatedAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
    //     <div id="wd-assignments-editor" className="container">
    //         {assignments
    //             .filter((assignment: any) => assignment._id === assignment_id)
    //             .map((assignment: any) => (
    //             <div className="mb-3" key={assignment._id}>
    //                 <label htmlFor={`wd-name-${assignment._id}`}>Assignment Name</label>
    //                 <input id={`wd-name-${assignment._id}`} className="form-control" value={assignment._id} />
    //             </div>
    //         ))}
    //         {/* Description */}
    //         <div className="mb-3">
    //             <label htmlFor="wd-description">Description</label>
    //             <textarea id="wd-description" className="form-control" rows={5}>
    //                 The assignment is available online
    //                 Submit a link to the landing page of your Web
    //                 application running on Netlify. The landing page should include the following:
    //                 Your full name and section links to each of the lab assignments Link to the
    //                 Kanbas application
    //             </textarea>
    //         </div>

    //         {/* Points */}
    //         <div className="row mb-3">
    //             <div className="col-md-3 text-end">
    //                 <label htmlFor="wd-points">Points</label>
    //             </div>
    //             <div className="col-md-9">
    //                 <input id="wd-points" className="form-control" value={100} />
    //             </div>
    //         </div>


    //         {/* Assign Section */}
    //         <div className="row mb-3">
    //             <div className="col-md-3 text-end">
    //                 <label>Assign</label>
    //             </div>
    //             <div className="col-md-9">
    //                 <div className="border p-3">
    //                     <div className="mb-3">
    //                         <label htmlFor="wd-assign-to">Assign to</label>
    //                         <input id="wd-assign-to" className="form-control" value="Everyone" />
    //                     </div>
    //                     <div className="mb-3">
    //                         <label htmlFor="wd-due-date">Due</label>
    //                         <input
    //                             type="date"
    //                             name="due-date"
    //                             id="wd-due-date"
    //                             className="form-control"
    //                             defaultValue="2024-05-13"
    //                         />
    //                     </div>
    //                     <div className="row mb-3">
    //                         <div className="col-md-6">
    //                             <label htmlFor="wd-available-from">Available from</label>
    //                             <input
    //                                 type="date"
    //                                 name="earliest-available-date"
    //                                 id="wd-available-from"
    //                                 className="form-control"
    //                                 defaultValue="2024-05-06"
    //                             />
    //                         </div>
    //                         <div className="col-md-6">
    //                             <label htmlFor="wd-available-until">Until</label>
    //                             <input
    //                                 type="date"
    //                                 name="latest-available-date"
    //                                 id="wd-available-until"
    //                                 className="form-control"
    //                                 defaultValue="2024-05-20"
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <hr />

    //         {/* Buttons */}
    //         <div className="float-end">
    //             <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
    //             <button className="btn btn-danger" onClick={() => navigate(-1)}>Save</button>
    //         </div>
    //     </div>
    <div id="wd-assignments-editor">
   
        <h4><label htmlFor="wd-name">Assignment Name</label></h4>
        
        <input id="wd-name" placeholder="Assignment Title" className="form-control mb-3" value={title} onChange={(e) => setTitle(e.target.value)} />
        
        <textarea id="wd-description" placeholder="Assignment Description" className="form-control mb-3" rows={6} value={description}  onChange={(e) => setDescription(e.target.value)} /><br />

        <div className="container">
        {/* Points */}
        <div className="row mb-3">
            <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
            <div className="col-sm-9">
            <input id="wd-points" placeholder="Assignment Points" className="form-control" value={points} onChange={(e) => setPoints(e.target.value)} />
            </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
            <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">Assignment Group</label>
            <div className="col-sm-9">
            <select id="wd-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
            </select>
            </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
            <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label text-end">Display Grade as</label>
            <div className="col-sm-9">
            <select id="wd-display-grade-as" className="form-select">
                <option value="ASSIGNMENTS">Percentage</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
            </select>
            </div>
        </div>

        {/* Submission Type and Online Entry Options */}
        <div className="row mb-3">
            <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end">Submission Type</label>
            <div className="col-sm-9">
            <div className="border p-3">
                <select id="wd-submission-type" className="form-select mb-3">
                <option value="ASSIGNMENTS">Online</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
                </select>
                
                <h6><b>Online Entry Options</b></h6>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-text-entry" />
                <label htmlFor="wd-text-entry" className="ms-2 mb-2">Text Entry</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-website-url" checked/>
                <label htmlFor="wd-website-url" className="ms-2 mb-2">Website URL</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings" className="ms-2 mb-2">Media Recordings</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation" className="ms-2 mb-2">Student Annotation</label>
                </div>
                <div>
                <input type="checkbox" name="check-online-entry-options" id="wd-file-upload" />
                <label htmlFor="wd-file-upload" className="ms-2 mb-2">File Uploads</label>
                </div>
            </div>
            </div>
        </div>
        
        {/* Assign */}
        <div className="row mb-3">
            <label htmlFor="wd-assign" className="col-sm-3 col-form-label text-end">Assign</label>
            <div className="col-sm-9">
                <div className="border p-3"> 
                <label htmlFor="wd-assign-to" className="col-form-label fw-bold">Assign to</label>
                <div className="input-wrapper "><div className="tag ">Everyone  </div></div>

                <div className="col">
                <label htmlFor="wd-due-date" className="col-form-label fw-bold">Due</label>
                <input type="datetime-local" id="wd-due-date" className="form-control mb-3" value={due} onChange={(e) => setDue(e.target.value)} />
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="wd-available-from" className="col-form-label fw-bold">Available From</label>
                        <input type="datetime-local" id="wd-available-from" className="form-control" value={available} onChange={(e) => setAvailable(e.target.value)}/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="wd-available-until" className="col-form-label fw-bold">Until</label>
                        <input type="datetime-local" id="wd-available-until" className="form-control" value={until} onChange={(e) => setUntil(e.target.value)} />
                    </div>
                </div>
                </div>
            </div>
        </div><hr />

        <div className="text-end">
        <button id="wd-cancel" className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button id="wd-save" className="btn btn-danger" onClick={handleSave}>Save</button>  
        </div>

        </div>
        
    </div>
    );
}