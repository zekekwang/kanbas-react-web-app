import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function QuizzesControlButtons() {
  return (
    <div className="float-end">
      <span className="wd-assignments-percentage" >40% of Total</span>
      <BsPlus className="ms-1 fs-3"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
    );
}