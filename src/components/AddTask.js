import React, { useState } from "react";
import { FlexContainer } from "./styled";

export default function AddTask() {
  const [value, setValue] = useState("");

  return (
    <div className="list-item">
      <input
        type="text"
        name="add-task"
        value={value}
        placeholder="...New Task"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
