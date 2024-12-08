import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
    new_quiz_created: false,
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {

        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        addQuiz: (state, { payload: quiz }) => {
        const newQuiz: any = {
            _id: quiz._id,
            name: quiz.name,
            instruction: quiz.instruction,
            course: quiz.course,
            num_of_questions: quiz.num_of_questions,
            quiz_type: quiz.quiz_type,
            points: quiz.points,
            assignment_group: quiz.assignment_group,
            shuffle_answer: quiz.shuffle_answer,
            time_limit: quiz.time_limit,
            multiple_attempts: quiz.multiple_attempts,
            how_many_attempts: quiz.how_many_attempts,
            show_correct_answer: quiz.show_correct_answer,
            access_code: quiz.access_code,
            one_question_at_a_time: quiz.one_question_at_a_time,
            webcam_required: quiz.webcam_required,
            lock_questions_after_answering: quiz.lock_questions_after_answering,
            due_date: quiz.due_date,
            available_date: quiz.available_date,
            until_date: quiz.until_date,
            published_status: quiz.published_status
        };
        state.quizzes = [...state.quizzes, newQuiz] as any;
        state.new_quiz_created = true;
        },

        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
            a._id === quiz._id ? quiz : a) as any;
        },

        deleteQuiz: (state, {payload: QuizID}) => {
            state.quizzes = state.quizzes.filter((a: any) =>
            a._id !== QuizID) as any;
        },

        switchCreationStatus: (state) => {
            if (state.new_quiz_created === true) {
                state.new_quiz_created = false;
            } else {
                state.new_quiz_created = true;
            }
        },

    }
});

export const { addQuiz, updateQuiz, deleteQuiz, switchCreationStatus, setQuizzes} = quizzesSlice.actions;
export default quizzesSlice.reducer;