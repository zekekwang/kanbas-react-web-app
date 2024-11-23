import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database"; 

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  available: Date;
  due: Date;
  until: Date;
  course: string;
}

const initialState: { assignments: Assignment[] } = {
//   assignments: assignments,
    assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
        state.assignments = action.payload;
        },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        available: assignment.available,
        due: assignment.due,
        until: assignment.until,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;