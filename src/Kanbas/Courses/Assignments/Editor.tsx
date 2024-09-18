
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Group</label>
                    </td>
                    <select id="wd-group">
                        <option>Group 1</option>
                        <option>Group 2</option>
                        <option>Group 3</option>
                    </select>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                            <option>Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>    </td>
                    <td align="left" valign="top">
                        <label>Online Entry Options:</label><br />
                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" name="check-entry" id="wd-media-recording" />
                        <label htmlFor="wd-media-recording">Media Recording</label><br />
                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label><br />
                    </td>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" /><br />
                        <br />
                        <label htmlFor="wd-due-date">Due Date</label><br />
                        <input type="date" id="wd-due-date" value="2021-05-20" /><br />
                        <br />
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-from">Available From</label><br />
                            <input type="date" id="wd-available-from" value="2021-05-20" />
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-until">Available Until</label><br />

                            <input type="date" id="wd-available-until" value="2021-05-27" />
                        </td>
                    </td>
                    
                </tr>

            </table>
            <hr />
            <table width="100%">
                <tr>
                    <td align="right">
                        <button id="wd-save">Save</button>
                        <button id="wd-cancel">Cancel</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
