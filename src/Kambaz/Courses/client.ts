import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

// Assignment APIs
export const findAssignmentForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments for course:", error);
    throw error;
  }
};

export const fetchAllAssignments = async () => {
  try {
    const { data } = await axiosWithCredentials.get(ASSIGNMENT_API);
    return data;
  } catch (error) {
    console.error("Error fetching all assignments:", error);
    throw error;
  }
};

export const deleteAssignment = async (id: string) => {
  try {
    const { data } = await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (assignment: any) => {
  try {
    const { data } = await axiosWithCredentials.put(
      `${ASSIGNMENT_API}/${assignment._id}`, 
      assignment
    );
    return data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};

export const createNewAssignment = async (assignment: any) => {
  try {
    const response = await axiosWithCredentials.post(
      `${ASSIGNMENT_API}/create`, 
      assignment
    );
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

// Course APIs
export const findModulesForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  } catch (error) {
    console.error("Error fetching modules for course:", error);
    throw error;
  }
};

export const createCourse = async (course: any) => {
  try {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

export const fetchAllCourses = async () => {
  try {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

export const updateCourse = async (course: any) => {
  try {
    const { data } = await axiosWithCredentials.put(
      `${COURSES_API}/${course._id}`, 
      course
    );
    return data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

export const findUsersForCourse = async (courseId: any) => {
  try {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users for course:", error);
    throw error;
  }
};

export const createModuleForCourse = async (courseId: any, module: any) => {
  try {
    const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  } catch (error) {
    console.error("Error creating module for course:", error);
    throw error;
  }
};