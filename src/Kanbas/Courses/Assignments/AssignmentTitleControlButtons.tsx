import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

export default function AssignmentTitleControlButtons() {
  return (
    <div className="float-end">
      <span className="assignment-percentage rounded-pill border border-dark px-3 py-1 me-2">
        40% of Total
      </span>
      <BsPlusLg className="me-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}