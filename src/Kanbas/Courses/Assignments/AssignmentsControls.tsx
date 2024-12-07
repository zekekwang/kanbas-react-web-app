// import { FaPlus } from 'react-icons/fa';
// import { CiSearch } from "react-icons/ci";

// export default function AssignmentsControls() {

//     return (
//         <div id="wd-modules-controls" className="text-nowrap">
//             <span className="me-1 position-relative">

//                 <div className="d-flex align-items-center mb-1">
//                     <div className="input-group">
//                         <span className="input-group-text bg-white border-end-0">
//                             <CiSearch className="text-gray-500" />
//                         </span>
//                         <input
//                             type="text"
//                             className="form-control border-start-0"
//                             placeholder="Search..."
//                         />
//                     </div>
//                     <button className="btn btn-outline-secondary  ms-5">+ Group</button>
//                     <button className="btn btn-danger ms-2">+ Assignment</button>
//                 </div>

//             </span>
//         </div>
//     );
// }

import { FaSearch, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"; 
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
  const { cid: courseId } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;

  // console.log("AssignmentsControls: courseId =", courseId);
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Search Input */}
      <div className="input-group w-50">
        <span className="input-group-text"><FaSearch /></span>
        <input
          type="text"
          className="form-control"
          id="wd-search-assignment"
          placeholder="Search for Assignments"
        />
      </div>
      {/* Group and Assignment Buttons */}
      {(role === "FACULTY" || role === "ADMIN") && (
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary me-2"
          >
            <FaPlus className="me-1" /> Group
          </button>

          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}
            className="btn btn-danger"
          >
            <FaPlus className="me-1" /> Assignment
          </Link>
        </div>
      )}

    </div>
  );
}