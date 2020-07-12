import React, { useReducer } from "react";
import PropTypes from "prop-types";

import Task from "./Task";
import { defaultTasksData } from "./helper";
import {reducer, archiveTask, pinTask} from "./hooks";
 
const initialState = { tasks: defaultTasksData };

function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (state.tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...state.tasks.filter((t) => t.state === "TASK_PINNED"),
    ...state.tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];

  return (
      <div className="list-items">
        {tasksInOrder.map((task) => (
          <Task key={task.id} task={task} onArchiveTask={archiveTask} onPinTask={pinTask}/>
        ))}
      </div>
  );
}

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
  loading: false,
};

export default PureTaskList;
