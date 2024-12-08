import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./enrollmentreducer";
import quizzesReducer from "./Courses/Quizzes/reducer";
import questionsReducer from "./Courses/Quizzes/Questions/reducer";

const store = configureStore({
  reducer: {
    modulesReducer, accountReducer, assignmentsReducer, enrollmentsReducer, quizzesReducer,
    questionsReducer,
  },
});
export default store;