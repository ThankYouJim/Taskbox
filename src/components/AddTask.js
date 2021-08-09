import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "../lib/actions";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  const addNewTask = () => {
    onAddTask(value);
    setValue("");
  };

  // Check everytime value is changed, if value is empty, disable the button
  useEffect(() => {
    setDisabled(value === "");
  }, [value]);

  return (
    <Row style={{ alignItems: "center", justifyContent: "center" }}>
      <Col>
        <div className="list-item">
          <input
            className="editable"
            type="text"
            name="add-task"
            value={value}
            placeholder="...New Task"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </Col>
      <Col xs="auto">
        <Button variant="primary" onClick={addNewTask} disabled={disabled}>
          Add +
        </Button>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = { onAddTask: addTask };

export default connect(null, mapDispatchToProps)(AddTask);
