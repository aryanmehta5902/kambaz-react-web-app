import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
import { v4 as uuidv4 } from 'uuid';

// Get enrollments from sessionStorage if available
const getInitialEnrollments = () => {
  const storedEnrollments = sessionStorage.getItem('enrollments');
  return storedEnrollments ? JSON.parse(storedEnrollments) : enrollments;
};

const initialState = {
  enrollments: getInitialEnrollments(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    unenroll: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter((e: { user: any; course: any }) =>
        !(e.course === course._id && e.user === user._id)
      );
      
      // Save to sessionStorage
      sessionStorage.setItem('enrollments', JSON.stringify(state.enrollments));
      
      console.log("After unenroll:", JSON.stringify(state.enrollments, null, 2));
    },
    enroll: (state, { payload: { user, course } }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: user._id,
        course: course._id
      };
      state.enrollments = [...state.enrollments, newEnrollment];
      
      // Save to sessionStorage
      sessionStorage.setItem('enrollments', JSON.stringify(state.enrollments));
    },
  },
});

export const { unenroll, enroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;