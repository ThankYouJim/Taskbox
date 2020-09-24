import React from "react";
import PropTypes from "prop-types";
import { TASK_STATUS } from "../utils/constants";

// Contextualise parameters
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  const isArchived = state === TASK_STATUS.ARCHIVED;

  return (
    <div className={`list-item ${state}`}>
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
          <input
            type="text"
            value={title}
            placeholder="Input title"
            readOnly
          />
        </div>
        <div className="subtitle">
          10/10/2010 10:10pm
        </div>
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== TASK_STATUS.ARCHIVED && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
