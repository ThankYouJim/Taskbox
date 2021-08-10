import React from "react";
import PropTypes from "prop-types";
import { TASK_STATUS } from "../utils/constants";

const Task = ({ task: { id, title, status, createdAt }, onArchiveTask, onPinTask }) => {
  const isArchived = status === TASK_STATUS.ARCHIVED;

  return (
    <div className={`list-item ${status}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={isArchived}
          disabled={isArchived}
          name="checked"
          readOnly
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="list-content">
        <div className="title">
          <input type="text" value={title} placeholder="Input title" readOnly />
        </div>
        <div className="subtitle">{createdAt.toLocaleString()}</div>
      </div>
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {status !== TASK_STATUS.ARCHIVED && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default Task;
