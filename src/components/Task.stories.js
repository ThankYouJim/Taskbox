import React from "react";
import { action } from "@storybook/addon-actions";
import { taskData } from "../utils/helpers";
import { TASK_STATUS } from "../utils/constants";

import Task from "./Task";

// Create main heading: Task
export default {
  component: Task,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

// Consolidate actions into a single callback
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

// Create sub headings: Default, Pinned Archived
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, state: TASK_STATUS.PINNED }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: TASK_STATUS.ARCHIVED }} {...actionsData} />
);
