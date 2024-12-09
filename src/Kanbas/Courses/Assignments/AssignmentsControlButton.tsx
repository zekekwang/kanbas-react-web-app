// import { IoEllipsisVertical } from "react-icons/io5";
// import GreenCheckmark from "./GreenCheckmark";
// export default function AssignmentControlButtons() {
//     return (
//         <div className="float-end">
//             <GreenCheckmark />
//             <IoEllipsisVertical className="fs-4" />
//         </div>
//     );
// }
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentsControlButton() {
  
  const { cid } = useParams(); 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;

  // if the user is not a faculty, return null
  if (role !== "FACULTY"&& role !== "ADMIN" ) {
    return null;
  }

  console.log("AssignmentsControlButton: cid =", cid);
  return (
    <div className="float-end">
       <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`} className="text-decoration-none">
        <BsPlus className="fs-4 text-dark" />
      </Link>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}