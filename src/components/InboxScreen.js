import React from "react";
import PropTypes from "prop-types";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

import Container from "react-bootstrap/Container";

export function PureInboxScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show" style={{background: 'pink'}}>
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <Container>
        <TaskList />
        <AddTask />
      </Container>
    </div>
  );
}

PureInboxScreen.propTypes = {
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default PureInboxScreen;
