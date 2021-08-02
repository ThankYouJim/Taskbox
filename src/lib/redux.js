// src/lib/redux.js

// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from "redux";
import { TASK_STATUS } from "../utils/constants";
import {
  FETCH_TASKS,
  ARCHIVE_TASK,
  PIN_TASK,
  ADD_TASK,
  DELETE_TASK,
} from "./types";

// All our reducers simply change the status of a single task.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, status: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  // console.log("\nSTATE", state);
  // console.log("\nACTION", action);
  switch (action.type) {
    case FETCH_TASKS:
      return state.tasks = action.tasks;
    case ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  // { id: "1", title: "First order of business", status : TASK_STATUS.INBOX },
  // { id: "2", title: "Second coming", status : TASK_STATUS.INBOX },
  // { id: "3", title: "Third blind mice", status : TASK_STATUS.INBOX },
  // { id: "4", title: "Go forth", status : TASK_STATUS.INBOX },
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks, loading: false });
