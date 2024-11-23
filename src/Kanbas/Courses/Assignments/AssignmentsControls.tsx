import { FaPlus } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <span className="me-1 position-relative">

                <div className="d-flex align-items-center mb-1">
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <CiSearch className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search..."
                        />
                    </div>
                    <button className="btn btn-outline-secondary  ms-5">+ Group</button>
                    <button className="btn btn-danger ms-2">+ Assignment</button>
                </div>

            </span>
        </div>

    );
}