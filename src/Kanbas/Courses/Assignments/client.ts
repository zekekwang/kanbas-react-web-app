import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignmentId:String, assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return data;
};


export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${ASSIGNMENTS_API}/${courseId}`, assignment);
    return response.data;
}

export const findAssignmentsForCourse = async (courseId: string) => {
    const url = `${ASSIGNMENTS_API}/${courseId}`;
    console.log("fetching assignments for course", url);
    const { data } = await axios.get(url);
    return data;
};

