//kanbas-react-web-app/src/Kanbas/Enrollments/client.ts
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// check if the user is enrolled in a course
export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${courseId}`);
  return response.data;
};

// cancel enrollment in a course
export const unenrollFromCourse = async (courseId: string) => {
  await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}`);
};

// check if the user is enrolled in a course, not used in dashboard because I found it is not necessary.
export const isEnrolledInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${courseId}`);
  return response.data.enrolled;
};

// get courses that the user is enrolled in
export const fetchMyCourses = async () => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/current/courses`);
  return response.data;
};