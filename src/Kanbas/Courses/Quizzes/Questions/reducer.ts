import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {

        setQuestions: (state, action) => {
            state.questions = action.payload;
        },

        addQuestion: (state, { payload: question }) => {
        const newQuestion: any = {
            _id: question._id,
            type: question.type,
            quiz: question.quiz,
            description: question.description,
            points: question.number,
            possible_answers: question.possible_answers,
            correct_answer: question.correct_answer,
        };
        state.questions = [...state.questions, newQuestion] as any;
        },

        updateQuestion: (state, { payload: question }) => {
            state.questions = state.questions.map((a: any) =>
            a._id === question._id ? question : a) as any;
        },

        deleteQuestion: (state, {payload: questionID}) => {
            state.questions = state.questions.filter((a: any) =>
            a._id !== questionID) as any;
        },

    }
});

export const { addQuestion, updateQuestion, deleteQuestion, setQuestions} = questionsSlice.actions;
export default questionsSlice.reducer;