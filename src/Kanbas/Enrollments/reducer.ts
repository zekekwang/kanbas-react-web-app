//kanbas-react-web-app/src/Kanbas/Enrollments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments, // from Database/enrollments.json
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      // create a new enrollment object
      const newEnrollment = {
        _id: new Date().getTime().toString(), // use timestamp as the id
        user: userId,
        course: courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      // delete the enrollment with the given user and course id
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => !(enrollment.user === userId && enrollment.course === courseId) // include all enrollments except the one to be deleted
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;