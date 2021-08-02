import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Task from "./Task";
import { archiveTask, pinTask } from "../lib/actions";
import { TASK_STATUS } from "../utils/constants";

function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {
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

  if (tasks.length === 0) {
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
    ...tasks.filter((t) => t.state === TASK_STATUS.PINNED),
    ...tasks.filter((t) => t.state === TASK_STATUS.INBOX),
    ...tasks.filter((t) => t.state === TASK_STATUS.ARCHIVED),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={onArchiveTask}
          onPinTask={onPinTask}
        />
      ))}
    </div>
  );
}

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onArchiveTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
  loading: false,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  loading: state.loading,
});

const mapDispatchToProps = {
  onArchiveTask: archiveTask,
  onPinTask: pinTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(PureTaskList);
