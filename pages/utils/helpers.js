import { v4 } from "uuid";
import { TASK_STATUS } from "./constants";

export const taskData = {
  id: "1",
  title: "Test Task",
  status: TASK_STATUS.INBOX,
  createdAt: new Date(),
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const initialState = {
  tasks: [],
  loading: false,
};

export const newTask = (title) => {
  return {
    id: v4(),
    title, 
    status: TASK_STATUS.INBOX,
    createdAt: (new Date()).toLocaleDateString(),
    updatedAt: null,
    archivedAt: null
  };
}
