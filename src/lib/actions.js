import {
  FETCH_TASKS,
  ARCHIVE_TASK,
  PIN_TASK,
  ADD_TASK,
  DELETE_TASK,
} from "./types";
import { newTask } from "../utils/helpers";

export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks,
});

export const archiveTask = (id) => ({ type: ARCHIVE_TASK, id });

export const pinTask = (id) => ({ type: PIN_TASK, id });

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    task: newTask(title),
  };
};

export const deleteTask = (id) => ({ type: DELETE_TASK, id });
