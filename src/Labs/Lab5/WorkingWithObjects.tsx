import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [module_state, setModuleState] = useState("module");
    const [score, setScore] = useState("0");
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const [checkboxes, setCheckboxes] = useState({
        option1: false,
      });
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>test editing the module object</h4>
            <input id="wd-module-state" className="form-control mb-2" type="text" defaultValue={module_state}
                onChange={(e) => setModuleState(e.target.value)} />
            <a id="wd-update-assignment" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title/${module_state}`}>
                Updates the Name
            </a><hr />
            <h4>editing the score</h4>
            <input id="wd-module-state" className="form-control mb-2" type="text" defaultValue={score}
                onChange={(e) => setScore(e.target.value)} />
            <a id="wd-update-assignment" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${score}`}>
                Updates the Score
            </a><hr />
            <h4>editing the completed property</h4>
            {/* two checkbox completed or not completed*/}
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.option1}
                    onChange={(e) =>
                        setCheckboxes({ ...checkboxes, option1: e.target.checked })
                    }
                />
                Completed
            </label>
            <a id="wd-update-assignment" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${checkboxes.option1}`}>
                Updates the Completed
            </a><hr />
        </div>
    );
}
