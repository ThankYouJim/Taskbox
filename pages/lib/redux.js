import { createStore } from "redux";
import {
  FETCH_TASKS,
  ARCHIVE_TASK,
  PIN_TASK,
  ADD_TASK,
  DELETE_TASK,
} from "./types";
import { TASK_STATUS } from "../utils/constants";
import { loadState, saveState } from "./localStorage";

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
    case ARCHIVE_TASK:
      return taskStateReducer(TASK_STATUS.ARCHIVED)(state, action);
    case PIN_TASK:
      return taskStateReducer(TASK_STATUS.PINNED)(state, action);
    case ADD_TASK: {
      const newState = { ...state, tasks: [...state.tasks, action.task] };
      saveState(newState);
      return newState;
    }
    case DELETE_TASK:
      return { ...state, tasks: tasks.filter((t) => t.id !== action.id) };
    default:
      return state;
  }
};

export default createStore(reducer, loadState());
