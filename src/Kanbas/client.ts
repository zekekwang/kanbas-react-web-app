import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const createEnrollment = async (enrollment: any) => {
    const response = await axios.post(ENROLLMENTS_API, enrollment);
    return response.data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
};

export const findEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return response.data;
};
