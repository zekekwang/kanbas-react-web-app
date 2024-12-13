import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;


export const getAttempt = async (quizId: String, attemptId: String) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${quizId}/attempts/${attemptId}`);
    return data;
};

export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZ_API}/${quizId}`);
    return response.data;
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quiz._id}`, quiz);
    return data;
};

export const setPublishStatus = async (quizId: string, newStatus: string) => {
    const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quizId}/status`, {newStatus});
    return data;
};

export const getQuiz = async (quizId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${quizId}`);
    return data;
};

export const getQuestions = async (quizId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${quizId}/questions`);
    return data;
};

export const createQuestion = async (quiz: any, question: any) => {
    const { data } = await axiosWithCredentials.post(`${QUIZ_API}/${quiz._id}/questions`, question);
    return data;
};

export const getPublishedQuiz = async () => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/published`);
    return data;
}

export const createAttempt = async (quiz: any, attempt: any) => {
    const { data } = await axiosWithCredentials.post(`${QUIZ_API}/${quiz._id}/attempts`, attempt);
    return data;
}

export const updateAttempt = async (quizId: String, attempt: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZ_API}/${quizId}/attempts/${attempt._id}`, attempt);
    return data;
}

export const getAttemptsForUser = async (quizId: string, userId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUIZ_API}/${quizId}/${userId}/attempts`);
    return data;
}
