import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTION_API = `${REMOTE_SERVER}/api/questions`;

export const getQuestion = async (questionId: string) => {
    const { data } = await axiosWithCredentials.get(`${QUESTION_API}/${questionId}`);
    return data;
};

export const deleteQuestion = async (questionId: string) => {
    const response = await axiosWithCredentials.delete(`${QUESTION_API}/${questionId}`);
    return response;
}

export const updateQuestion = async (question: any) => {
    const { data } = await axiosWithCredentials.put(`${QUESTION_API}/${question._id}`, question);
    return data;
}