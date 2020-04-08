import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

// Create main heading: Task
export default {
  component: Task,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

// Plug a sample data to be fed to the Task component
export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// Consolidate actions into a single callback
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};


// Create sub headings: Default, Pinned Archived
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);
