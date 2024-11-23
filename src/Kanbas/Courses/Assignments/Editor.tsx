
import { useNavigate, useLocation } from "react-router";
import * as db from "../../Database";
import { RxCross2 } from "react-icons/rx";
import { useParams} from "react-router";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment } from "./reducer";

import * as assignmentsClient from "./client";

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

    const handleSave = async () => {
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
            console.log("Updating assignment", aid);
            const result = await assignmentsClient.updateAssignment(aid as string, updatedAssignment);
            dispatch(updateAssignment(result));
        } else {
            console.log("Creating new assignment for course", cid);
            const newAssignment = await assignmentsClient.createAssignmentForCourse(cid as string, updatedAssignment);
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

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

    // const handleSave = () => {
    //     const updatedAssignment = {
    //         ...assignment,
    //         course: cid,
    //         title,
    //         description,
    //         points,
    //         available,
    //         due,
    //         until,
    //     };
    //     if (assignment) {
    //         dispatch(updateAssignment(updatedAssignment));
    //     } else {
    //         dispatch(addAssignment(updatedAssignment));
    //     }
    //     navigate(`/Kanbas/Courses/${cid}/Assignments`);
    // };

    return (

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