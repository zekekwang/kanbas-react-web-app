import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// export const updateAssignment = async (assignmentId:String, assignment: any) => {
//     const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
//     return data;
// };


// export const deleteAssignment = async (assignmentId: string) => {
//     const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//     return response.data;
// };

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//     const response = await axios.post(`${ASSIGNMENTS_API}/${courseId}`, assignment);
//     return response.data;
// }

// export const findAssignmentsForCourse = async (courseId: string) => {
//     const url = `${ASSIGNMENTS_API}/${courseId}`;
//     console.log("fetching assignments for course", url);
//     const { data } = await axios.get(url);
//     return data;
// };

// get all assignments
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  };
  
  // create a new assignment
  export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
  };
  
  // update the assignment
  export const updateAssignment = async (assignment: any) => {
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };
  
  // delete the assignment
  export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  };