import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../lib/actions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");
  
  const addNewTask = () => {
    onAddTask(value);
    setValue("");
  };

  return (
    <Container fluid>
      <Row style={{ alignItems: "center", justifyContent: "center" }}>
        <Col xs={8} sm={10}>
          <div class="list-item">
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
          <Button variant="primary" onClick={addNewTask}>
            Add +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = { onAddTask: addTask };

export default connect(null, mapDispatchToProps)(AddTask);
