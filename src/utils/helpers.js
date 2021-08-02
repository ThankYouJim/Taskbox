import { TASK_STATUS } from "./constants";

// Plug a sample data to be fed to the Task component
export const taskData = {
  id: "1",
  title: "Test Task",
  state: TASK_STATUS.INBOX,
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
