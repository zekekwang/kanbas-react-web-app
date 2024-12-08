import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
// enable axios to send cookies with every request multipule users

export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
   };
   

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
   };
   
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};
export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};


export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
  };
  
  export const findPublishedQuizzesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes/published`);
    return response.data;
  };
  
  export const createQuizForCourse = async (courseId: string, quiz: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data;
  };
  

