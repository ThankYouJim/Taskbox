import { createStore } from "redux";
import {
  FETCH_TASKS,
  ARCHIVE_TASK,
  PIN_TASK,
  ADD_TASK,
  DELETE_TASK,
} from "./types";
import { TASK_STATUS } from "../utils/constants";

// Toggle the status
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id
          ? {
              ...task,
              status: task.status === taskState ? TASK_STATUS.INBOX : taskState,
            }
          : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  console.log("\nSTATE", state);
  console.log("\nACTION", action);
  switch (action.type) {
    case FETCH_TASKS:
      return (state.tasks = action.tasks);
    case ARCHIVE_TASK:
      return taskStateReducer(TASK_STATUS.ARCHIVED)(state, action);
    case PIN_TASK:
      return taskStateReducer(TASK_STATUS.PINNED)(state, action);
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    case DELETE_TASK:
      return state; // TODO
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
