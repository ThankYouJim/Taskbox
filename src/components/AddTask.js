import React, { useState } from "react";
import { connect } from "react-redux";
import { API } from "aws-amplify";
import { addTask } from "../lib/redux";

function AddTask({ onAddTask }) {
  const [value, setValue] = useState("");
  const addNewTask = () => {
    onAddTask(value);
    setValue('');
  };

  return (
    <div
      className="list-item"
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <input
        className="editable"
        type="text"
        name="add-task"
        value={value}
        placeholder="...New Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addNewTask}>Add +</button>
    </div>
  );
}

const mapDispatchToProps = { onAddTask: addTask };

export default connect(null, mapDispatchToProps)(AddTask);
