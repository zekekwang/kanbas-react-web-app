import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";


// import from reducer

import { setAssignment } from "./reducer";
import ProtectedContent from "../../Account/ProtectedContent";

import { useEffect } from "react";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchAssignments = async () => {
        const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignment(assignments));
    }

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        fetchAssignments();
    }

    useEffect(() => {
        fetchAssignments();
    }, []);

    const handleDeleteAssignment = (assignmentId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmDelete) {
            dispatch(deleteAssignment(assignmentId));
        }
    };

    return (
        <div id="wd-assignments-controls" className="p-3">
            
            
            <div className="search-and-buttons-container mb-4 d-flex justify-content-between">
                <div className="search-container d-flex align-items-center">
                    <CiSearch className="search-icon me-2" />
                    <input type="text" className="search-input form-control" placeholder="Search..."/>
                </div>
                <ProtectedContent><div className="button-group"> 
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1"><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Group</button>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}><FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />Assignment</button> 
                </div></ProtectedContent>
            </div>
            
            
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center fw-bold">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineArrowDropDown className="me-2 fs-3" />
                            ASSIGNMENTS
                        </div>
                        <ProtectedContent><AssignmentTitleControlButtons /></ProtectedContent>
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">
                    {assignments
                    // .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-3 fs-3" />
                                <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
                                <div className="flex-grow-1">
                                    {currentUser.role === "FACULTY" ? (
                                        <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </Link>
                                    ) : (
                                        <strong>{assignment.title}</strong>
                                    )}
                                    <br /> 
                                    <span className="red-text">Multiple Modules</span> | <span className="bold-darkgray-text">Not available until</span> {assignment.available} |<br />
                                    <span className="bold-darkgray-text">Due</span> {assignment.due} | {assignment.points} pts
                                </div>
                                <ProtectedContent><LessonControlButtons assignmentId={assignment._id}
                                // deleteAssignment={() => handleDeleteAssignment(assignment._id)}/>
                                deleteAssignment={() => removeAssignment(assignment._id)}/>
                                </ProtectedContent>
                            </div>
                        </li>
                         ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}