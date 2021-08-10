const ARCHIVE_TASK = "ARCHIVE_TASK";
const PIN_TASK = "PIN_TASK";

export const archiveTask = (id) => ({ type: ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: PIN_TASK, id });

const taskStateReducer = (taskState) => (state, action) => ({
  ...state,
  task: state.task.map((task) =>
    task.id === action.id ? { ...task, state: taskState } : task
  ),
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ARCHIVE_TASK:
      return taskStateReducer(ARCHIVE_TASK)(state, action);
    case PIN_TASK:
      return taskStateReducer(PIN_TASK)(state, action);
    default:
      return state;
  }
}
