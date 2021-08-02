import {v4} from 'uuid';
import {
  FETCH_TASKS,
  ARCHIVE_TASK,
  PIN_TASK,
  ADD_TASK,
  DELETE_TASK,
} from "./types";
import { TASK_STATUS } from "../utils/constants";

export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks,
});

export const archiveTask = (id) => ({ type: ARCHIVE_TASK, id });

export const pinTask = (id) => ({ type: PIN_TASK, id });

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    task: {
      id: v4(),
      title,
      state: TASK_STATUS.INBOX,
      archivedAt: null,
    },
  };
};
